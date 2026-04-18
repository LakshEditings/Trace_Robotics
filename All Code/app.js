/* ============================================================
   app.js — Trace Robotics Static Site
   Handles: Theme, Navbar, Hamburger, Scroll, Swiper, Particles
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

    // ====== THEME TOGGLE ======
    const themeToggleBtn = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
    }
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            if (currentTheme === 'light') {
                document.documentElement.removeAttribute('data-theme');
                localStorage.setItem('theme', 'dark');
            } else {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
            }
        });
    }

    // ====== NAVBAR SCROLL ======
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (navbar) {
            if (window.scrollY > 60) navbar.classList.add('scrolled');
            else navbar.classList.remove('scrolled');
        }
    }, { passive: true });

    // ====== HAMBURGER MENU ======
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            const isOpened = hamburger.classList.toggle('active');
            navLinks.classList.toggle('mobile-open');
            hamburger.setAttribute('aria-expanded', isOpened);
            navLinks.setAttribute('aria-hidden', !isOpened);
            document.body.style.overflow = isOpened ? 'hidden' : '';
        });
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('mobile-open');
                hamburger.setAttribute('aria-expanded', 'false');
                navLinks.setAttribute('aria-hidden', 'true');
                document.body.style.overflow = '';
            });
        });
    }

    // ====== SCROLL TO TOP ======
    const scrollTopBtn = document.getElementById('scrollToTop');
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) scrollTopBtn.classList.add('visible');
            else scrollTopBtn.classList.remove('visible');
        }, { passive: true });
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ====== SWIPER CAROUSEL (Home only) ======
    if (typeof Swiper !== 'undefined' && document.getElementById('heroSwiper')) {
        new Swiper('#heroSwiper', {
            loop: true,
            grabCursor: true,
            slidesPerView: 1,
            autoplay: { delay: 5000, disableOnInteraction: false },
            pagination: { el: '.swiper-pagination', clickable: true },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }

    // ====== PARTICLE CANVAS ======
    const canvas = document.getElementById('heroCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let animId;
        let W = canvas.width = canvas.offsetWidth;
        let H = canvas.height = canvas.offsetHeight;
        let mouse = { x: W / 2, y: H / 2 };

        window.addEventListener('mousemove', e => {
            const r = canvas.getBoundingClientRect();
            mouse.x = e.clientX - r.left;
            mouse.y = e.clientY - r.top;
        }, { passive: true });

        const pickColor = () => document.documentElement.getAttribute('data-theme') === 'light'
            ? '59, 130, 246' : '99, 102, 241';

        class Particle {
            constructor() { this.reset(); }
            reset() {
                this.x = Math.random() * W; this.y = Math.random() * H;
                this.z = Math.random(); this.r = 1 + this.z * 3;
                this.vx = (Math.random() - 0.5) * (0.2 + this.z * 0.5);
                this.vy = -(0.2 + this.z * 0.8);
                this.alpha = 0.1 + this.z * 0.7;
                this.color = pickColor();
            }
            update() {
                const dx = mouse.x - this.x, dy = mouse.y - this.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 150) {
                    const angle = Math.atan2(dy, dx), force = (150 - dist) / 150;
                    this.vx -= Math.cos(angle) * force * 0.5;
                    this.vy -= Math.sin(angle) * force * 0.5;
                }
                this.x += this.vx; this.y += this.vy;
                this.vx *= 0.98; this.vy *= 0.98;
                if (this.y < -50) { this.y = H + 50; this.x = Math.random() * W; }
                if (this.x < -50) this.x = W + 50;
                if (this.x > W + 50) this.x = -50;
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${this.color},${this.alpha})`;
                ctx.fill();
            }
        }

        const count = Math.min(100, Math.floor((W * H) / 10000));
        const particles = Array.from({ length: count }, () => new Particle());

        function loop() {
            ctx.clearRect(0, 0, W, H);
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const p1 = particles[i], p2 = particles[j];
                    const dx = p1.x - p2.x, dy = p1.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 120) {
                        ctx.beginPath(); ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `rgba(${p1.color},${(1 - dist / 120) * 0.2})`;
                        ctx.lineWidth = 1; ctx.stroke();
                    }
                }
            }
            particles.forEach(p => { p.update(); p.draw(); });
            animId = requestAnimationFrame(loop);
        }
        loop();
    }

    // ====== CURSOR GLOW ======
    const glow = document.createElement('div');
    glow.id = 'cursor-glow';
    document.body.prepend(glow);
    window.addEventListener('mousemove', e => {
        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';
    }, { passive: true });

    // ====== SCROLL ANIMATIONS ======
    const animElements = document.querySelectorAll(
        '.feature-card, .content-item, .contact-card, .image-frame, .split-content, .section-header, .cta-content'
    );
    animElements.forEach(el => el.classList.add('animate-on-scroll'));
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
    animElements.forEach(el => observer.observe(el));

    // ====== COUNTER ANIMATION ======
    const counters = document.querySelectorAll('.stat-number[data-count]');
    const counterObs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.animated) {
                entry.target.dataset.animated = 'true';
                const target = parseInt(entry.target.dataset.count);
                const startTime = performance.now();
                function tick(now) {
                    const p = Math.min((now - startTime) / 2000, 1);
                    entry.target.textContent = Math.floor((1 - Math.pow(1 - p, 3)) * target).toLocaleString();
                    if (p < 1) requestAnimationFrame(tick);
                    else entry.target.textContent = target.toLocaleString();
                }
                requestAnimationFrame(tick);
            }
        });
    }, { threshold: 0.5 });
    counters.forEach(c => counterObs.observe(c));

});
