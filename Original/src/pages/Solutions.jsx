import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Solutions = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-container page-transition" style={{ paddingTop: '80px', minHeight: '100vh', background: 'var(--bg-primary)' }}>
            <section className="section">
                <div className="container">
                    <div className="split-section">
                        <div className="split-image" data-aos="fade-right">
                            <div className="image-frame" style={{ borderRadius: 'var(--radius-lg)' }}>
                                <video src="/images/cobot.mp4" autoPlay muted loop playsInline
                                    style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:'inherit'}}
                                    aria-label="Collaborative Robot Solutions by Trace Robotics"></video>
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
                            <Link to="/contact" className="btn btn-primary btn-sm" style={{marginTop: '30px'}}>
                                REQUEST A DEMO
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{marginLeft: '8px'}}>
                                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Solutions;
