import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const slides = [
    {
        video: '/images/AMR_Video.mp4',
        badge: 'Logistics Automation',
        title: 'Autonomous Mobile Robots',
        description: 'Next-generation AMR fleet for smart material handling and logistics.',
        link: '/products',
        linkLabel: 'Explore AMRs',
        accentColor: '#6366f1',
    },
    {
        video: '/images/cobot.mp4',
        badge: 'Collaborative Robot',
        title: 'Intelligent Cobot Solutions',
        description: 'Precise, adaptable, and built for modern manufacturing integration.',
        link: '/solutions',
        linkLabel: 'View Solutions',
        accentColor: '#f59e0b',
    },
    {
        video: '/images/QuantumRobot_2mins.mp4',
        badge: 'Future of Tech',
        title: 'The Future of Work',
        description: 'Leading the transformation of industrial processes with robotic precision.',
        link: '/solutions',
        linkLabel: 'Learn More',
        accentColor: '#10b981',
    },
];

const Home = () => {
    return (
        <>
            {/* ====== HERO ====== */}
            <section id="home" className="hero snap-section">
                {/* 3D Particle Canvas */}
                <canvas id="heroCanvas" className="hero-canvas"></canvas>
                {/* Depth fog layer */}
                <div className="hero-fog-bottom"></div>
                <div className="hero-bg-effects">
                    <div className="hero-orb hero-orb-1"></div>
                    <div className="hero-orb hero-orb-2"></div>
                    <div className="hero-orb hero-orb-3"></div>
                    <div className="grid-overlay"></div>
                </div>

                <div className="hero-container">
                    <div className="hero-carousel">
                        <Swiper
                            grabCursor={true}
                            slidesPerView={1}
                            loop={true}
                            autoplay={{ delay: 5000, disableOnInteraction: false }}
                            pagination={{ clickable: true }}
                            navigation={true}
                            modules={[Pagination, Navigation, Autoplay]}
                            className="hero-slider"
                        >
                            {slides.map((slide, i) => (
                                <SwiperSlide key={i} className="basic-slide">
                                    <video
                                        src={slide.video}
                                        autoPlay muted loop playsInline
                                        className="basic-slide-video"
                                    />
                                    <div className="basic-slide-overlay" />
                                    <div className="basic-slide-content">
                                        <span className="hero-badge" style={{ color: slide.accentColor, borderColor: `${slide.accentColor}66` }}>
                                            {slide.badge}
                                        </span>
                                        <h2 className="hero-title">{slide.title}</h2>
                                        <p className="hero-description">{slide.description}</p>
                                        <div className="hero-actions">
                                            <Link to={slide.link} className="btn btn-primary">
                                                {slide.linkLabel}
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>

            {/* ====== ABOUT SECTION ====== */}
            <section id="about" className="about-section snap-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-tag">About Us</span>
                    </div>

                    <div className="about-intro">
                        <p className="about-lead">
                            Trace Robotics is an automation and robotics company focused on solving real industrial problems
                            through <strong>intelligent engineering solutions</strong>. We help manufacturing industries
                            improve
                            productivity, quality, safety, traceability, and operational efficiency by delivering practical
                            automation systems tailored to their workflow.
                        </p>
                        <p className="about-lead">
                            Our expertise combines robotics, embedded systems, mechanical design, control systems,
                            industrial
                            software, and smart automation to build solutions that are reliable, scalable, and
                            industry-ready.
                            From concept to deployment, we work closely with industries to transform manual, repetitive, and
                            inefficient processes into smarter automated operations.
                        </p>
                    </div>

                    {/* Expertise Pillars */}
                    <div className="about-features">
                        <div className="feature-card">
                            <h3>Industrial Robot Integration</h3>
                            <p>Seamless integration of industrial robots into manufacturing environments.</p>
                        </div>

                        <div className="feature-card">
                            <h3>AMR Development</h3>
                            <p>Custom Autonomous Mobile Robots engineered for your facility layout.</p>
                        </div>

                        <div className="feature-card">
                            <h3>Smart Automation</h3>
                            <p>End-to-end automation strategy, design and deployment.</p>
                        </div>

                        <div className="feature-card">
                            <h3>AI & Vision Systems</h3>
                            <p>Machine learning and computer vision embedded into production lines.</p>
                        </div>
                    </div>

                    <div className="about-vision">
                        <div className="vision-icon">⚡</div>
                        <p>
                            <strong>Our Vision:</strong> To become the most trusted automation partner for manufacturing
                            industries in India and beyond — enabling smarter factories, safer workplaces, and more
                            efficient operations.
                        </p>
                    </div>
                </div>
            </section>

            {/* ====== INDUSTRY SECTION ====== */}
            <section id="industry" className="section section-dark snap-section">
                <div className="container">
                    <div className="split-section">
                        <div className="split-image" data-aos="fade-right">
                            <div className="image-frame">
                                <video
                                    src="/images/AMR_Video.mp4"
                                    autoPlay muted loop playsInline
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }}
                                    aria-label="AMR in industrial environment"
                                ></video>
                                <div className="image-overlay"></div>
                            </div>
                        </div>
                        <div className="split-content" data-aos="fade-left">
                            <span className="section-tag">Industry Focus</span>
                            <h2 className="section-title">Autonomous Solutions for <span className="gradient-text">Smart
                                    Factories</span></h2>
                            <div className="content-list">
                                <div className="content-item">
                                    <div className="item-icon">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <circle cx="10" cy="10" r="4" fill="url(#grad1)" />
                                            <defs>
                                                <linearGradient id="grad1" x1="0" y1="0" x2="20" y2="20">
                                                    <stop stopColor="#6366f1" />
                                                    <stop offset="1" stopColor="#a855f7" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div className="item-text">
                                        <h4>Autonomous Mobile Robots (AMR)</h4>
                                        <p>Intelligent material handling and logistics automation with our AMR fleet.</p>
                                    </div>
                                </div>
                                <div className="content-item">
                                    <div className="item-icon">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <circle cx="10" cy="10" r="4" fill="url(#grad1)" />
                                        </svg>
                                    </div>
                                    <div className="item-text">
                                        <h4>Custom Industrial Automation</h4>
                                        <p>Tailored automation to improve productivity, efficiency, and safety.</p>
                                    </div>
                                </div>
                                <div className="content-item">
                                    <div className="item-icon">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <circle cx="10" cy="10" r="4" fill="url(#grad1)" />
                                        </svg>
                                    </div>
                                    <div className="item-text">
                                        <h4>AI & Sensor Integration</h4>
                                        <p>Robotics, sensors, and AI to optimize manufacturing operations.</p>
                                    </div>
                                </div>
                                <div className="content-item">
                                    <div className="item-icon">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <circle cx="10" cy="10" r="4" fill="url(#grad1)" />
                                        </svg>
                                    </div>
                                    <div className="item-text">
                                        <h4>Smart Factory Deployment</h4>
                                        <p>End-to-end design, development and deployment of robotic systems.</p>
                                    </div>
                                </div>
                            </div>
                            <Link to="/solutions" className="btn btn-primary btn-sm" style={{ marginTop: '30px' }}>
                                View All Solutions
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginLeft: '8px' }}>
                                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ====== PRODUCTS SECTION ====== */}
            <section id="products" className="section snap-section">
                <div className="container">
                    <div className="split-section">

                        <div className="split-content" style={{ order: 1 }} data-aos="fade-right">
                            <span className="section-tag">Our Products</span>
                            <h2 className="section-title">Flagship <span className="gradient-text">Robotics</span>
                                Hardware</h2>
                            <p className="split-desc">Precision-engineered products built for real industry and real
                                learning.</p>
                            <div className="content-list">
                                <div className="content-item">
                                    <div className="item-icon">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <circle cx="10" cy="10" r="4" fill="url(#gradProd)" />
                                            <defs>
                                                <linearGradient id="gradProd" x1="0" y1="0" x2="20" y2="20">
                                                    <stop stopColor="#3b82f6" />
                                                    <stop offset="1" stopColor="#06b6d4" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div className="item-text">
                                        <h4>Trace Lite</h4>
                                        <p>Compact, versatile AMR platform for research, rapid mapping and indoor
                                            logistics.</p>
                                    </div>
                                </div>
                            </div>
                            <Link to="/products" className="btn btn-primary btn-sm" style={{ marginTop: '30px' }}>
                                See Products
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginLeft: '8px' }}>
                                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>

                        <div className="split-image" style={{ order: 2 }} data-aos="fade-left">
                            <div className="image-frame">
                                <img
                                    src="/images/Screenshot 2026-04-04 185735.png"
                                    alt="Trace Lite AMR"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }}
                                />
                                <div className="image-overlay"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ====== SUPPORT SECTION ====== */}
            <section id="support" className="section section-dark snap-section">
                <div className="container">
                    <div className="split-section">
                        <div className="split-image" data-aos="fade-right">
                            <div className="image-frame">
                                <video src="/images/cobot.mp4" autoPlay muted loop playsInline
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }}
                                    aria-label="Workshops and training by Trace Robotics"></video>
                                <div className="image-overlay"></div>
                            </div>
                        </div>
                        <div className="split-content" data-aos="fade-left">
                            <span className="section-tag">Support & Education</span>
                            <h2 className="section-title">Workshops & Courses for <span className="gradient-text">STEM
                                    Excellence</span></h2>
                            <div className="content-list">
                                <div className="content-item">
                                    <div className="item-icon">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <circle cx="10" cy="10" r="4" fill="url(#gradSupHome)" />
                                            <defs>
                                                <linearGradient id="gradSupHome" x1="0" y1="0" x2="20" y2="20">
                                                    <stop stopColor="#6366f1" />
                                                    <stop offset="1" stopColor="#a855f7" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div className="item-text">
                                        <h4>Robotics Workshops</h4>
                                        <p>Hands-on workshops delivering robotics education to schools and colleges.</p>
                                    </div>
                                </div>
                                <div className="content-item">
                                    <div className="item-icon">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <circle cx="10" cy="10" r="4" fill="url(#gradSupHome)" />
                                        </svg>
                                    </div>
                                    <div className="item-text">
                                        <h4>AI & Robotics Courses</h4>
                                        <p>Structured modules from embedded programming to AI-driven vision systems.</p>
                                    </div>
                                </div>
                                <div className="content-item">
                                    <div className="item-icon">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <circle cx="10" cy="10" r="4" fill="url(#gradSupHome)" />
                                        </svg>
                                    </div>
                                    <div className="item-text">
                                        <h4>Electronics Training</h4>
                                        <p>Circuit design, PCB fabrication and microcontroller firmware training.</p>
                                    </div>
                                </div>
                            </div>
                            <Link to="/support" className="btn btn-primary btn-sm" style={{ marginTop: '30px' }}>
                                Explore Training
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginLeft: '8px' }}>
                                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
