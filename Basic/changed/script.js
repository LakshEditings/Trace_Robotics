// ====== NAVBAR SCROLL ======
const navbar = document.getElementById('navbar');
let lastScrollY = 0;

window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    lastScrollY = window.scrollY;
});

// ====== MOBILE MENU ======
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    const isOpened = hamburger.classList.toggle('active');
    navLinks.classList.toggle('mobile-open');
    
    // Accessibility
    hamburger.setAttribute('aria-expanded', isOpened);
    navLinks.setAttribute('aria-hidden', !isOpened);
    
    // Body Scroll Lock
    document.body.style.overflow = isOpened ? 'hidden' : '';
});

// Close menu on link click
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('mobile-open');
        hamburger.setAttribute('aria-expanded', 'false');
        navLinks.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    });
});

// ====== ACTIVE NAV LINK ON SCROLL ======
const sections = document.querySelectorAll('section[id]');
const navLinksAll = document.querySelectorAll('.nav-link');

function updateActiveNav() {
    const scrollPosition = window.scrollY + 200;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinksAll.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// ====== SCROLL ANIMATIONS ======
function initScrollAnimations() {
    const animElements = document.querySelectorAll(
        '.feature-card, .content-item, .contact-card, .image-frame, .split-content, .section-header, .cta-content'
    );

    animElements.forEach(el => {
        el.classList.add('animate-on-scroll');
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    animElements.forEach(el => observer.observe(el));
}

// ====== COUNTER ANIMATION ======
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number[data-count]');

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.animated) {
                entry.target.dataset.animated = 'true';
                const target = parseInt(entry.target.dataset.count);
                const duration = 2000;
                const startTime = performance.now();

                function updateCounter(currentTime) {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    // Ease out cubic
                    const eased = 1 - Math.pow(1 - progress, 3);
                    const current = Math.floor(eased * target);

                    entry.target.textContent = current.toLocaleString();

                    if (progress < 1) {
                        requestAnimationFrame(updateCounter);
                    } else {
                        entry.target.textContent = target.toLocaleString();
                    }
                }

                requestAnimationFrame(updateCounter);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));
}

// ====== SMOOTH SCROLL FOR ANCHOR LINKS ======
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ====== CONTACT FORM ======
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const btn = contactForm.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;

        btn.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;">
                <path d="M21 12a9 9 0 11-6.219-8.56"/>
            </svg>
            Sending...
        `;
        btn.disabled = true;

        try {
            const formData = new FormData(contactForm);
            
            const response = await fetch('https://formsubmit.co/ajax/info.tracerobotics@gmail.com', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                btn.innerHTML = `
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    Message Sent!
                `;
                btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';

                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.disabled = false;
                    btn.style.background = '';
                    contactForm.reset();
                }, 2500);
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            btn.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
                Error! Try Again
            `;
            btn.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
            
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.disabled = false;
                btn.style.background = '';
            }, 3000);
        }
    });
}

// ====== PARALLAX EFFECT ON HERO ORBS ======
window.addEventListener('mousemove', (e) => {
    if (window.innerWidth < 768) return;

    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;

    const orbs = document.querySelectorAll('.hero-orb');
    orbs.forEach((orb, i) => {
        const speed = (i + 1) * 10;
        orb.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
    });
});

// ====== HERO SLIDER ======
const slides = document.querySelectorAll('.hero-slider .slide');
const dots = document.querySelectorAll('.slider-dots .dot');
const prevBtn = document.querySelector('.prev-slide');
const nextBtn = document.querySelector('.next-slide');
let currentSlide = 0;
let slideInterval;

function showSlide(index) {
    if (slides.length === 0) return;
    
    // Handle wrap-around
    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;
    
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlide = index;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

if (slides.length > 0) {
    // Buttons
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            clearInterval(slideInterval);
            nextSlide();
            slideInterval = setInterval(nextSlide, 5000);
        });
    }
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            clearInterval(slideInterval);
            prevSlide();
            slideInterval = setInterval(nextSlide, 5000);
        });
    }
    
    // Auto slide
    slideInterval = setInterval(nextSlide, 5000);
    
    // Dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(slideInterval);
            showSlide(index);
            slideInterval = setInterval(nextSlide, 5000);
        });
    });
}

// ====== INIT ======
document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    animateCounters();
});

// Add spin animation for loading state
const style = document.createElement('style');
style.textContent = `@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`;
document.head.appendChild(style);

// ====== THEME TOGGLE ======
const themeToggleBtn = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');

// Apply saved theme on load
if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
}

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

// ====== PREMIUM 3D EXPERIENCE ======

// --- Scroll Progress Bar ---
const progressBar = document.createElement('div');
progressBar.id = 'scroll-progress';
document.body.prepend(progressBar);

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = `${progress}%`;
}, { passive: true });

// --- 3D Mouse Tilt on Feature Cards ---
function initTiltCards() {
    const tiltCards = document.querySelectorAll('.feature-card');

    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // Max ±8 degrees tilt
            const rotateX = ((y - centerY) / centerY) * -8;
            const rotateY = ((x - centerX) / centerX) * 8;

            card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(8px)`;

            // Update radial gradient highlight
            const pctX = (x / rect.width) * 100;
            const pctY = (y / rect.height) * 100;
            card.style.setProperty('--mouse-x', `${pctX}%`);
            card.style.setProperty('--mouse-y', `${pctY}%`);
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
        });
    });
}

// --- 3D Tilt on Product Cards ---
function initProductTilt() {
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const centerX = rect.width / 2;
            const rotateY = ((x - centerX) / centerX) * 5;

            card.style.transform = `perspective(1000px) translateY(-16px) rotateX(2deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}

// --- Animated Gradient Border on hover for feature cards ---
function initAnimatedBorders() {
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach(card => {
        card.classList.add('animate-border');
    });
}

// --- Staggered entrance for grid children ---
function initStaggeredEntrance() {
    const grids = document.querySelectorAll('.about-features, .product-grid, .contact-info');
    grids.forEach(grid => {
        Array.from(grid.children).forEach((child, i) => {
            child.style.transitionDelay = `${i * 80}ms`;
        });
    });
}

// --- Parallax depth on hero orbs (enhanced) ---
// ====== ULTRA IMMERSIVE 3D SYSTEM ======

// --- Cursor Glow Tracking ---
function initCursorGlow() {
    const glow = document.getElementById('cursor-glow');
    if (!glow) return;

    window.addEventListener('mousemove', (e) => {
        // Use requestAnimationFrame for smooth movement if needed, 
        // but simple CSS transform is usually enough for modern browsers.
        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';
    }, { passive: true });
}

// --- Advanced Parallax Engine ---
function initAdvancedParallax() {
    const layers = [
        { selector: '.hero-title', speedX: 12, speedY: 8, scroll: 0.1 },
        { selector: '.hero-image', speedX: -10, speedY: -6, scroll: -0.05 },
        { selector: '.hero-orb-1', speedX: 25, speedY: 20, scroll: 0.2 },
        { selector: '.hero-orb-2', speedX: -20, speedY: 15, scroll: 0.15 },
        { selector: '.hero-orb-3', speedX: 15, speedY: -25, scroll: 0.25 },
        { selector: '.grid-overlay', speedX: 5, speedY: 5, scroll: 0.05 }
    ];

    window.addEventListener('mousemove', (e) => {
        if (window.innerWidth < 768) return;
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;

        layers.forEach(layer => {
            const elements = document.querySelectorAll(layer.selector);
            elements.forEach(el => {
                const tx = x * layer.speedX;
                const ty = y * layer.speedY;
                // Preserve existing vertical offset if any
                el.style.transform = `translate(${tx}px, ${ty}px)`;
            });
        });
    }, { passive: true });
}

// --- Enhanced Particle Galaxy (Neural Network Style) ---
function initParticleCanvas() {
    const canvas = document.getElementById('heroCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let W = canvas.width = canvas.offsetWidth;
    let H = canvas.height = canvas.offsetHeight;
    let mouse = { x: W / 2, y: H / 2 };

    const ro = new ResizeObserver(() => {
        W = canvas.width = canvas.offsetWidth;
        H = canvas.height = canvas.offsetHeight;
    });
    ro.observe(canvas);

    window.addEventListener('mousemove', e => {
        const r = canvas.getBoundingClientRect();
        mouse.x = e.clientX - r.left;
        mouse.y = e.clientY - r.top;
    }, { passive: true });

    class Particle {
        constructor() { this.reset(); }
        reset() {
            this.x = Math.random() * W;
            this.y = Math.random() * H;
            this.z = Math.random();
            this.r = 1 + this.z * 3;
            this.vx = (Math.random() - 0.5) * (0.2 + this.z * 0.5);
            this.vy = -(0.2 + this.z * 0.8);
            this.alpha = 0.1 + this.z * 0.7;
            this.color = this.pickColor();
        }
        pickColor() {
            const isLight = document.documentElement.getAttribute('data-theme') === 'light';
            return isLight ? '59, 130, 246' : '99, 102, 241';
        }
        update() {
            // Mouse push
            const dx = mouse.x - this.x;
            const dy = mouse.y - this.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 150) {
                const angle = Math.atan2(dy, dx);
                const force = (150 - dist) / 150;
                this.vx -= Math.cos(angle) * force * 0.5;
                this.vy -= Math.sin(angle) * force * 0.5;
            }

            this.x += this.vx;
            this.y += this.vy;
            this.vx *= 0.98;
            this.vy *= 0.98;

            if (this.y < -50) {
                this.y = H + 50;
                this.x = Math.random() * W;
            }
            if (this.x < -50) this.x = W + 50;
            if (this.x > W + 50) this.x = -50;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
            ctx.fill();
        }
    }

    const count = Math.min(100, Math.floor((W * H) / 10000));
    const particles = Array.from({ length: count }, () => new Particle());

    function loop() {
        ctx.clearRect(0, 0, W, H);
        
        // Draw connections
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const p1 = particles[i], p2 = particles[j];
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 120) {
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    const opacity = (1 - dist / 120) * 0.2;
                    ctx.strokeStyle = `rgba(${p1.color}, ${opacity})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }
        }

        particles.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(loop);
    }
    loop();
}

// --- 3D Scroll Depth Effect ---
function initScrollDepth() {
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        
        // Parallax scroll on decorative elements
        document.querySelectorAll('.hero-orb').forEach((orb, i) => {
            const speed = (i + 1) * 0.15;
            orb.style.top = `calc(var(--base-top, 0%) + ${scrolled * speed}px)`;
        });

        // Hero fade and lift
        const heroContent = document.querySelector('.hero-container');
        if (heroContent) {
            heroContent.style.opacity = Math.max(0, 1 - scrolled / 800);
            heroContent.style.transform = `translateY(${scrolled * 0.15}px)`;
        }
    }, { passive: true });
}

// --- Init everything ---
document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    animateCounters();
    initTiltCards();
    initProductTilt();
    initAnimatedBorders();
    initStaggeredEntrance();
    
    // Premium 3D
    initCursorGlow();
    initAdvancedParallax();
    initParticleCanvas();
    initScrollDepth();
    initTextDepth();
});



