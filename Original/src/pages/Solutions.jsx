import React from 'react';
import { Link } from 'react-router-dom';
import './Solutions.css';

const Solutions = () => {
    return (
        <>
            {/* ====== SOLUTIONS HERO ====== */}
            <section className="solutions-hero">
                <div className="grid-overlay"></div>
                <div className="solutions-hero-inner">
                    <span className="section-tag">Industry Solutions</span>
                    <h1>Autonomous Solutions for <span className="gradient-text">Smart Factories</span></h1>
                    <p>We design, develop, and deploy cutting-edge robotic and automation systems that transform manufacturing,
                        logistics, and warehouse operations for the modern era.</p>
                    <Link to="/#contact" className="btn btn-primary btn-lg">Request a Demo</Link>
                </div>

                {/* Video Showcase */}
                <div className="video-showcase">
                    <div className="container">
                        <div className="video-wrapper">
                            <span className="video-badge">Live Demo</span>
                            <video src="/images/cobot.mp4"
                                autoPlay muted loop playsInline
                                aria-label="Collaborative Robot Industrial Solutions Demo"></video>
                        </div>
                    </div>
                </div>
            </section>

            {/* ====== OFFERINGS ====== */}
            <section className="offerings-section section section-dark">
                <div className="container">
                    <div className="section-header">
                        <span className="section-tag">What We Offer</span>
                        <h2 className="section-title">Our Industrial <span className="gradient-text">Capabilities</span></h2>
                    </div>

                    <div className="offerings-grid">
                        <div className="offering-card">
                            <div className="offering-icon">🤖</div>
                            <h3>Autonomous Mobile Robots (AMR)</h3>
                            <p>Intelligent material handling and internal logistics automation with our cutting-edge AMR fleet
                                equipped with LiDAR, SLAM, and multi-sensor fusion.</p>
                        </div>
                        <div className="offering-card">
                            <div className="offering-icon">⚙️</div>
                            <h3>Custom Industrial Automation</h3>
                            <p>We develop tailored automation solutions to improve productivity, efficiency, and safety across
                                your operations — from assembly lines to packaging.</p>
                        </div>
                        <div className="offering-card">
                            <div className="offering-icon">🧠</div>
                            <h3>AI & Sensor Integration</h3>
                            <p>Our solutions integrate robotics, computer vision, and AI technologies to optimize manufacturing
                                and warehouse operations in real time.</p>
                        </div>
                        <div className="offering-card">
                            <div className="offering-icon">🏭</div>
                            <h3>Smart Factory Deployment</h3>
                            <p>End-to-end design, development, and deployment of advanced robotic systems — turning your factory
                                into a connected, intelligent operation.</p>
                        </div>
                        <div className="offering-card">
                            <div className="offering-icon">📡</div>
                            <h3>Fleet Management & SCADA</h3>
                            <p>Custom SCADA, HMI, and fleet management software built for smart environments — monitor and
                                control all systems from a unified dashboard.</p>
                        </div>
                        <div className="offering-card">
                            <div className="offering-icon">🔧</div>
                            <h3>After-Sales Support</h3>
                            <p>From installation and commissioning to ongoing maintenance and upgrades — we partner with you
                                for the full lifecycle of your automation investment.</p>
                        </div>
                    </div>

                    {/* CTA Banner */}
                    <div className="solutions-cta" style={{marginTop: '60px'}}>
                        <div>
                            <h3>Ready to automate your <span className="gradient-text">operations?</span></h3>
                            <p>Tell us about your challenge and we'll design the right solution for you.</p>
                        </div>
                        <Link to="/#contact" className="btn btn-primary btn-lg">
                            Get in Touch
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Solutions;
