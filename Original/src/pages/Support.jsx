import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Support = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-container page-transition" style={{ paddingTop: '80px', minHeight: '100vh', background: 'var(--bg-primary)' }}>
            <section className="section section-dark">
                <div className="container">
                    <div className="split-section">
                        <div className="split-image" data-aos="fade-right">
                            <div className="image-frame" style={{ borderRadius: 'var(--radius-lg)' }}>
                                <img src="/images/support-workshop.png"
                                    alt="Robotics Workshops and Training by Trace Robotics" 
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
                                <div className="image-overlay"></div>
                            </div>
                        </div>
                        <div className="split-content" data-aos="fade-left">
                            <span className="section-tag">Support & Training</span>
                            <h2 className="section-title">Training Courses for <span className="gradient-text">STEM
                                    Excellence</span></h2>
                            
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '30px', fontSize: '1.1rem', lineHeight: '1.6'}}>
                                At Trace Robotics, we believe in bridging the gap between theoretical knowledge and real-world industrial application. Our comprehensive training programs empower students and professionals with hands-on experience in robotics, embedded systems, and automation architecture.
                            </p>

                            <div className="content-list">
                                <div className="content-item">
                                    <div className="item-icon">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <circle cx="10" cy="10" r="4" fill="url(#gradSupport)" />
                                            <defs>
                                                <linearGradient id="gradSupport" x1="0" y1="0" x2="20" y2="20">
                                                    <stop stopColor="#6366f1" />
                                                    <stop offset="1" stopColor="#a855f7" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div className="item-text">
                                        <h4>Intensive Robotics Workshops</h4>
                                        <p>Hands-on intensive workshops delivered at schools and college campuses. Participants learn actuator mechanics, kinematics, and basic ROS (Robot Operating System) navigation protocols using our custom modular robot kits.</p>
                                    </div>
                                </div>
                                <div className="content-item">
                                    <div className="item-icon">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <circle cx="10" cy="10" r="4" fill="url(#gradSupport)" />
                                        </svg>
                                    </div>
                                    <div className="item-text">
                                        <h4>Advanced AI & Robotics Courses</h4>
                                        <p>Comprehensive structured modules ranging from foundational programming to advanced AI-driven machine vision, designed for aspiring automation engineers seeking industry-ready certification.</p>
                                    </div>
                                </div>
                                <div className="content-item">
                                    <div className="item-icon">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <circle cx="10" cy="10" r="4" fill="url(#gradSupport)" />
                                        </svg>
                                    </div>
                                    <div className="item-text">
                                        <h4>Industrial Electronics Training</h4>
                                        <p>Deep-dive training covering complex circuit design, PCB fabrication processes, microcontroller firmware development (ESP32/STM32), and IoT integration techniques.</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div style={{ marginTop: '40px', display: 'flex', gap: '15px' }}>
                                <Link to="/contact" className="btn btn-primary">
                                    ENROLL NOW
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{marginLeft: '8px'}}>
                                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2"
                                            strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Link>
                                <a href="/Trace_Robotics_Brochure.pdf" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                                    DOWNLOAD SYLLABUS
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Support;
