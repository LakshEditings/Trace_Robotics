import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

const Home = () => {
    return (
        <>
            {/* ====== HERO ====== */}
            <section id="home" className="hero">
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
                        <button className="carousel-nav prev-slide" aria-label="Previous Slide">❮</button>
                        <Swiper
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={'auto'}
                            loop={true}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            coverflowEffect={{
                                rotate: 20,
                                stretch: 0,
                                depth: 150,
                                modifier: 1,
                                slideShadows: false,
                            }}
                            pagination={{
                                el: '.slider-dots',
                                clickable: true,
                                bulletClass: 'dot',
                                bulletActiveClass: 'active',
                            }}
                            navigation={{
                                nextEl: '.next-slide',
                                prevEl: '.prev-slide',
                            }}
                            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                            className="hero-slider"
                            style={{ 
                                padding: '50px 0', 
                                perspective: '1200px'
                            }}
                        >
                            {/* Slide 1: Cobot Video */}
                            <SwiperSlide className="slide slide-video" style={{ width: '70%' }}>
                                <div className="slide-video-bg">
                                    <video src="/images/cobot.mp4" autoPlay muted loop playsInline
                                        className="slide-bg-video"></video>
                                    <div className="slide-video-overlay"></div>
                                </div>
                                <div className="slide-content slide-content-video">
                                    <div className="hero-badge" style={{color:'#f59e0b', borderColor:'rgba(245,158,11,0.4)'}}>
                                        Collaborative Robot</div>
                                    <h2 className="hero-title slide-title-forced">Intelligent Cobot Solutions</h2>
                                    <p className="hero-description">Precise, adaptable, and built for modern industry.</p>
                                    <div className="hero-actions">
                                        <Link to="/solutions" className="btn btn-primary"
                                            style={{background:'linear-gradient(135deg,#f59e0b,#ef4444)'}}>View Solutions</Link>
                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* Slide 2: Human-Robot Collaboration */}
                            <SwiperSlide className="slide slide-video" style={{ width: '70%' }}>
                                <div className="slide-video-bg">
                                    <video src="/images/QuantumRobot_2mins.mp4" autoPlay muted loop playsInline
                                        className="slide-bg-video"></video>
                                    <div className="slide-video-overlay"></div>
                                </div>
                                <div className="slide-content slide-content-video">
                                    <div className="hero-badge" style={{color:'#10b981', borderColor:'rgba(16,185,129,0.4)'}}>
                                        Future of Tech</div>
                                    <h2 className="hero-title slide-title-forced">Human-Robot Collaboration</h2>
                                    <p className="hero-description">Robotic precision for the factory of tomorrow.</p>
                                    <div className="hero-actions">
                                        <Link to="/solutions" className="btn btn-primary"
                                            style={{background:'linear-gradient(135deg,#10b981,#06b6d4)'}}>Learn More</Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            
                            {/* Slide 3: Duplicate for Coverflow Depth */}
                            <SwiperSlide className="slide slide-video" style={{ width: '70%' }}>
                                <div className="slide-video-bg">
                                    <video src="/images/cobot.mp4" autoPlay muted loop playsInline
                                        className="slide-bg-video"></video>
                                    <div className="slide-video-overlay"></div>
                                </div>
                                <div className="slide-content slide-content-video">
                                    <div className="hero-badge" style={{color:'#f59e0b', borderColor:'rgba(245,158,11,0.4)'}}>
                                        Collaborative Robot</div>
                                    <h2 className="hero-title slide-title-forced">Intelligent Cobot Solutions</h2>
                                    <p className="hero-description">Precise, adaptable, and built for modern industry.</p>
                                    <div className="hero-actions">
                                        <Link to="/solutions" className="btn btn-primary"
                                            style={{background:'linear-gradient(135deg,#f59e0b,#ef4444)'}}>View Solutions</Link>
                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* Slide 4: Duplicate for Coverflow Depth */}
                            <SwiperSlide className="slide slide-video" style={{ width: '70%' }}>
                                <div className="slide-video-bg">
                                    <video src="/images/QuantumRobot_2mins.mp4" autoPlay muted loop playsInline
                                        className="slide-bg-video"></video>
                                    <div className="slide-video-overlay"></div>
                                </div>
                                <div className="slide-content slide-content-video">
                                    <div className="hero-badge" style={{color:'#10b981', borderColor:'rgba(16,185,129,0.4)'}}>
                                        Future of Tech</div>
                                    <h2 className="hero-title slide-title-forced">Human-Robot Collaboration</h2>
                                    <p className="hero-description">Robotic precision for the factory of tomorrow.</p>
                                    <div className="hero-actions">
                                        <Link to="/solutions" className="btn btn-primary"
                                            style={{background:'linear-gradient(135deg,#10b981,#06b6d4)'}}>Learn More</Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <button className="carousel-nav next-slide" aria-label="Next Slide">❯</button>

                        {/* Navigation Dots */}
                        <div className="slider-dots"></div>
                    </div>
                </div>
            </section>

            {/* ====== ABOUT SECTION ====== */}
            <section id="about" className="about-section">
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
                            <h3>Collaborative Robot Solutions</h3>
                            <p>Safe and flexible human-robot collaboration for modern industries.</p>
                        </div>

                        <div className="feature-card">
                            <h3>PLC, HMI, and Control Systems</h3>
                            <p>Advanced automation using PLC programming, HMI interfaces, and control systems.</p>
                        </div>

                        <div className="feature-card">
                            <h3>Vision-Based Inspection Systems</h3>
                            <p>High-precision quality inspection using machine vision and AI.</p>
                        </div>

                        <div className="feature-card">
                            <h3>End-of-Line Automation & Material Handling</h3>
                            <p>Automation solutions for packaging, sorting, and material movement.</p>
                        </div>

                        <div className="feature-card">
                            <h3>Smart Manufacturing & Industry 4.0</h3>
                            <p>Digital transformation with IoT, data analytics, and smart factory solutions.</p>
                        </div>
                    </div>

                    {/* Vision Statement */}
                    <div className="about-vision">
                        <div className="vision-icon">
                            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                strokeWidth="1.5">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 8v4l3 3" />
                            </svg>
                        </div>
                        <div className="vision-text">
                            <h3>Our Vision</h3>
                            <p>Build <strong>indigenous robotics products and
                                    automation platforms</strong> that are affordable, effective, and designed for
                                real-world
                                industrial use — making advanced automation accessible to Indian manufacturing at scale.</p>
                        </div>
                    </div>

                </div>
            </section>

            {/* ====== INDUSTRY SECTION ====== */}
            <section id="industry" className="section section-dark">
                <div className="container">
                    <div className="split-section">
                        <div className="split-image" data-aos="fade-right">
                            <div className="image-frame">
                                <video src="/images/cobot.mp4" autoPlay muted loop playsInline
                                    style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:'inherit'}}
                                    aria-label="Collaborative Robot Solutions by Trace Robotics"></video>
                                <div className="image-overlay"></div>
                            </div>
                        </div>
                        <div className="split-content" data-aos="fade-left">
                            <span className="section-tag">Industry</span>
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
                                        <p>Intelligent material handling and internal logistics automation with our
                                            cutting-edge
                                            AMR fleet.</p>
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
                                        <p>We develop tailored automation solutions to improve productivity, efficiency, and
                                            safety across your operations.</p>
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
                                        <p>Our solutions integrate robotics, sensors, and AI technologies to optimize
                                            manufacturing and warehouse operations.</p>
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
                                        <p>End-to-end design, development, and deployment of advanced robotic systems for
                                            smart
                                            factories.</p>
                                    </div>
                                </div>
                            </div>
                            <Link to="/#contact" className="btn btn-primary btn-sm">
                                Learn More
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ====== PRODUCTS SECTION ====== */}
            <section id="products" className="section">
                <div className="container">
                    <div className="split-section">

                        {/* Image */}
                        <div className="split-image" data-aos="fade-left">
                            <div className="image-frame">
                                <video src="images/cobot.mp4" autoPlay muted loop playsInline
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }}>
                                </video>
                                <div className="image-overlay"></div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="split-content" data-aos="fade-right">
                            <span className="section-tag">Products</span>
                            <h2 className="section-title">
                                Our Flagship <span className="gradient-text">Hardware</span>
                            </h2>

                            <div className="content-list">

                                <div className="content-item">
                                    <div className="item-icon">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <circle cx="10" cy="10" r="4" fill="url(#grad1)" />
                                        </svg>
                                    </div>
                                    <div className="item-text">
                                        <h4>Trace AMR</h4>
                                        <p>Autonomous mobile robot for smart material handling and logistics automation.</p>
                                    </div>
                                </div>

                                <div className="content-item">
                                    <div className="item-icon">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <circle cx="10" cy="10" r="4" fill="url(#grad1)" />
                                        </svg>
                                    </div>
                                    <div className="item-text">
                                        <h4>AMR Control System</h4>
                                        <p>Advanced navigation, SLAM, and control systems for industrial deployment.</p>
                                    </div>
                                </div>

                                <div className="content-item">
                                    <div className="item-icon">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <circle cx="10" cy="10" r="4" fill="url(#grad1)" />
                                        </svg>
                                    </div>
                                    <div className="item-text">
                                        <h4>Custom Robotics Platforms</h4>
                                        <p>Modular robotic platforms tailored for industrial and research applications.</p>
                                    </div>
                                </div>

                            </div>

                            <Link to="/products" className="btn btn-primary btn-sm">
                                Explore Products
                            </Link>
                        </div>

                    </div>
                </div>
            </section>

            {/* ====== SUPPORT SECTION ====== */}
            <section id="support" className="section section-dark">
                <div className="container">
                    <div className="split-section">
                        <div className="split-image" data-aos="fade-right">
                            <div className="image-frame">
                                <img src="/images/support-workshop.png"
                                    alt="Robotics Workshops and Training by Trace Robotics" />
                                <div className="image-overlay"></div>
                            </div>
                        </div>
                        <div className="split-content" data-aos="fade-left">
                            <span className="section-tag">Support & Training</span>
                            <h2 className="section-title">Workshops & Courses for <span className="gradient-text">STEM
                                    Excellence</span>
                            </h2>
                            <div className="content-list">
                                <div className="content-item">
                                    <div className="item-icon">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <circle cx="10" cy="10" r="4" fill="url(#grad1)" />
                                        </svg>
                                    </div>
                                    <div className="item-text">
                                        <h4>Robotics Workshops</h4>
                                        <p>Hands-on robotics workshops for school and college students to develop practical
                                            STEM
                                            skills.</p>
                                    </div>
                                </div>
                                <div className="content-item">
                                    <div className="item-icon">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <circle cx="10" cy="10" r="4" fill="url(#grad1)" />
                                        </svg>
                                    </div>
                                    <div className="item-text">
                                        <h4>Robotics & AI Courses</h4>
                                        <p>Online courses to help students learn design, programming, and robot development
                                            with
                                            real-world applications.</p>
                                    </div>
                                </div>
                                <div className="content-item">
                                    <div className="item-icon">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <circle cx="10" cy="10" r="4" fill="url(#grad1)" />
                                        </svg>
                                    </div>
                                    <div className="item-text">
                                        <h4>Electronics Training</h4>
                                        <p>Comprehensive electronics training courses covering circuit design, embedded
                                            systems,
                                            and PCB design.</p>
                                    </div>
                                </div>
                                <div className="content-item">
                                    <div className="item-icon">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <circle cx="10" cy="10" r="4" fill="url(#grad1)" />
                                        </svg>
                                    </div>
                                    <div className="item-text">
                                        <h4>Programming Courses</h4>
                                        <p>Build strong foundations in coding for robotics and technology — from Python and
                                            C++
                                            to ROS.</p>
                                    </div>
                                </div>
                            </div>
                            <Link to="/#contact" className="btn btn-primary btn-sm">
                                Explore Courses
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>


            {/* ====== CONTACT SECTION ====== */}
            <section id="contact" className="section section-dark">
                <div className="container">
                    <div className="section-header">
                        <span className="section-tag">Contact</span>
                        <h2 className="section-title">Let's Build Something <span className="gradient-text">Amazing</span></h2>
                    </div>
                    <div className="contact-grid">
                        <div className="contact-info">
                            <div className="contact-card">
                                <div className="contact-icon">📞</div>
                                <div>
                                    <h4>Phone</h4>
                                    <a href="tel:+917010776537">+91 7010776537</a>
                                </div>
                            </div>
                            <div className="contact-card">
                                <div className="contact-icon">📧</div>
                                <div>
                                    <h4>Email</h4>
                                    <a href="mailto:info.tracerobotics@gmail.com">info.tracerobotics@gmail.com</a>
                                </div>
                            </div>
                            <div className="contact-card">
                                <div className="contact-icon">🌐</div>
                                <div>
                                    <h4>Website</h4>
                                    <a href="https://www.tracerobotics.in" target="_blank" rel="noopener noreferrer">www.tracerobotics.in</a>
                                </div>
                            </div>
                            <div className="contact-card">
                                <div className="contact-icon">📍</div>
                                <div>
                                    <h4>Location</h4>
                                    <p>Punjai Puliampatti, Erode</p>
                                </div>
                            </div>
                        </div>
                        <form className="contact-form" id="contactForm"
                            action="https://formsubmit.co/info.tracerobotics@gmail.com" method="POST">
                            <input type="hidden" name="_subject" defaultValue="New Inquiry from Trace Robotics Website!" />
                            <input type="hidden" name="_template" defaultValue="table" />
                            <input type="hidden" name="_captcha" defaultValue="false" />

                            <div className="form-group">
                                <input type="text" id="name" name="name" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <input type="email" id="email" name="email" placeholder="Your Email" required />
                            </div>
                            <div className="form-group">
                                <select id="subject" name="subject" required defaultValue="">
                                    <option value="" disabled>What are you interested in?</option>
                                    <option value="industry">Industry — AMR & Automation</option>
                                    <option value="support">Support — Workshops & Courses</option>
                                    <option value="other">Other Inquiry</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <textarea id="message" name="message" rows="4"
                                    placeholder="Tell us about your requirements..." required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-full">
                                Send Message
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M14 2L7 9M14 2l-5 12-2-5-5-2 12-5z" stroke="currentColor" strokeWidth="1.5"
                                        strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
