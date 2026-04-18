import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useLegacyScript = () => {
    const location = useLocation();

    useEffect(() => {
        // --- Shared Legacy Variables ---
        let lastScrollY = 0;
        let slideInterval;
        let currentSlide = 0;

        // ====== SCROLL ANIMATIONS ======
        const initScrollAnimations = () => {
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
            return observer;
        };

        // ====== COUNTER ANIMATION ======
        const animateCounters = () => {
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
            return counterObserver;
        };

        // ====== PARALLAX EFFECT ON HERO ORBS ======
        const handleGridParallax = (e) => {
            if (window.innerWidth < 768) return;
            const x = (e.clientX / window.innerWidth - 0.5) * 2;
            const y = (e.clientY / window.innerHeight - 0.5) * 2;
            const orbs = document.querySelectorAll('.hero-orb');
            orbs.forEach((orb, i) => {
                const speed = (i + 1) * 10;
                orb.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
            });
        };

        // ====== THEME TOGGLE ======
        let themeListener;
        const initTheme = () => {
            const themeToggleBtn = document.getElementById('themeToggle');
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'light') {
                document.documentElement.setAttribute('data-theme', 'light');
            }
            if(themeToggleBtn) {
                themeListener = () => {
                    const currentTheme = document.documentElement.getAttribute('data-theme');
                    if (currentTheme === 'light') {
                        document.documentElement.removeAttribute('data-theme');
                        localStorage.setItem('theme', 'dark');
                    } else {
                        document.documentElement.setAttribute('data-theme', 'light');
                        localStorage.setItem('theme', 'light');
                    }
                };
                themeToggleBtn.addEventListener('click', themeListener);
            }
        };

        // ====== NAVBAR & MOBILE ======
        let hamburgerListener;
        let navLinkListeners = [];
        const initNavbar = () => {
            const navbar = document.getElementById('navbar');
            const handleScroll = () => {
                if(navbar) {
                    if (window.scrollY > 60) {
                        navbar.classList.add('scrolled');
                    } else {
                        navbar.classList.remove('scrolled');
                    }
                }
            };
            window.addEventListener('scroll', handleScroll);

            const hamburger = document.getElementById('hamburger');
            const navLinks = document.getElementById('navLinks');

            if (hamburger && navLinks) {
                hamburgerListener = () => {
                    const isOpened = hamburger.classList.toggle('active');
                    navLinks.classList.toggle('mobile-open');
                    hamburger.setAttribute('aria-expanded', isOpened);
                    navLinks.setAttribute('aria-hidden', !isOpened);
                    document.body.style.overflow = isOpened ? 'hidden' : '';
                };
                hamburger.addEventListener('click', hamburgerListener);

                const links = document.querySelectorAll('.nav-links a');
                links.forEach(link => {
                    const listener = () => {
                        hamburger.classList.remove('active');
                        navLinks.classList.remove('mobile-open');
                        hamburger.setAttribute('aria-expanded', 'false');
                        navLinks.setAttribute('aria-hidden', 'true');
                        document.body.style.overflow = '';
                    };
                    link.addEventListener('click', listener);
                    navLinkListeners.push({link, listener});
                });
            }
            return handleScroll;
        };

        // ====== TILT CARDS ======
        const initTiltCards = () => {
            const tiltCards = document.querySelectorAll('.feature-card');
            tiltCards.forEach(card => {
                card.addEventListener('mousemove', (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = ((y - centerY) / centerY) * -8;
                    const rotateY = ((x - centerX) / centerX) * 8;
                    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(8px)`;
                    const pctX = (x / rect.width) * 100;
                    const pctY = (y / rect.height) * 100;
                    card.style.setProperty('--mouse-x', `${pctX}%`);
                    card.style.setProperty('--mouse-y', `${pctY}%`);
                });
                card.addEventListener('mouseleave', () => {
                    card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
                });
            });
        };

        // ====== PARTICLE CANVAS ======
        const initParticleCanvas = () => {
            const canvas = document.getElementById('heroCanvas');
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            let animationId;

            let W = canvas.width = canvas.offsetWidth;
            let H = canvas.height = canvas.offsetHeight;
            let mouse = { x: W / 2, y: H / 2 };

            const handleMouse = e => {
                const r = canvas.getBoundingClientRect();
                mouse.x = e.clientX - r.left;
                mouse.y = e.clientY - r.top;
            };
            window.addEventListener('mousemove', handleMouse, { passive: true });

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
                    if (this.y < -50) { this.y = H + 50; this.x = Math.random() * W; }
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
                particles.forEach(p => { p.update(); p.draw(); });
                animationId = requestAnimationFrame(loop);
            }
            loop();
            return () => {
                cancelAnimationFrame(animationId);
                window.removeEventListener('mousemove', handleMouse);
            };
        };

        // Scroll Depth and Cursor Glow
        const initScrollDepth = () => {
            const handleScrollDepth = () => {
                const scrolled = window.scrollY;
                document.querySelectorAll('.hero-orb').forEach((orb, i) => {
                    const speed = (i + 1) * 0.15;
                    orb.style.top = `calc(var(--base-top, 0%) + ${scrolled * speed}px)`;
                });
                const heroContent = document.querySelector('.hero-container');
                if (heroContent) {
                    heroContent.style.opacity = Math.max(0, 1 - scrolled / 800);
                    heroContent.style.transform = `translateY(${scrolled * 0.15}px)`;
                }
            };
            window.addEventListener('scroll', handleScrollDepth, { passive: true });
            return handleScrollDepth;
        };

        const initCursorGlow = () => {
            let glow = document.getElementById('cursor-glow');
            if(!glow) {
                glow = document.createElement('div');
                glow.id = 'cursor-glow';
                document.body.prepend(glow);
            }
            const handleGlow = (e) => {
                glow.style.left = e.clientX + 'px';
                glow.style.top = e.clientY + 'px';
            };
            window.addEventListener('mousemove', handleGlow, { passive: true });
            return handleGlow;
        };

        // Initializations
        const observer1 = initScrollAnimations();
        const observer2 = animateCounters();
        initTheme();
        const scrollNavbar = initNavbar();
        initTiltCards();
        const cleanupParticles = initParticleCanvas();
        const scrollDepth = initScrollDepth();
        const cursorGlow = initCursorGlow();
        
        window.addEventListener('mousemove', handleGridParallax);

        // ====== HASH SCROLLING ======
        if (location.hash) {
            setTimeout(() => {
                const target = document.querySelector(location.hash);
                if (target) {
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.scrollY - headerOffset;
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }, 100);
        }

        // Cleanup to prevent memory leaks on navigate
        return () => {
            if(observer1) observer1.disconnect();
            if(observer2) observer2.disconnect();
            if(slideInterval) clearInterval(slideInterval);
            window.removeEventListener('mousemove', handleGridParallax);
            if(cleanupParticles) cleanupParticles();
            window.removeEventListener('scroll', scrollDepth);
            window.removeEventListener('mousemove', cursorGlow);
            window.removeEventListener('scroll', scrollNavbar);
            
            const themeToggleBtn = document.getElementById('themeToggle');
            if (themeToggleBtn && themeListener) {
                themeToggleBtn.removeEventListener('click', themeListener);
            }
            
            const hamburger = document.getElementById('hamburger');
            if (hamburger && hamburgerListener) {
                hamburger.removeEventListener('click', hamburgerListener);
            }
            
            navLinkListeners.forEach(({link, listener}) => {
                link.removeEventListener('click', listener);
            });
        };
    }, [location.pathname, location.hash]); // Re-run on navigation or hash change
};
