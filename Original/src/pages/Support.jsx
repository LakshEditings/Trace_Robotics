import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const supportModules = [
    {
        title: 'Robotics Workshops',
        description: 'Intensive workshops delivered at schools and college campuses. Participants assemble and program our custom modular robot kits, learning actuator mechanics, sensor integration, and basic ROS navigation.',
    },
    {
        title: 'AI & Robotics Courses',
        description: 'Structured online modules from foundational embedded programming (Arduino, ESP32) to advanced AI-driven machine vision systems. Completion earns an industry-recognized certificate.',
    },
    {
        title: 'Electronics Training',
        description: 'Comprehensive deep-dive training covering analog/digital circuit design, PCB fabrication workflows using EasyEDA and KiCad, and microcontroller firmware in C/C++.',
    }
];

const Support = () => {
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
                                    aria-label="Training by Trace Robotics"></video>
                                <div className="image-overlay"></div>
                            </div>
                        </div>
                        <div className="split-content" data-aos="fade-left">
                            <span className="section-tag">Support & Training</span>
                            <h2 className="section-title">Workshops & Courses for <span className="gradient-text">STEM
                                    Excellence</span></h2>
                            
                            <div className="content-list">
                                {supportModules.map((mod, i) => (
                                    <div key={i} className="content-item">
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
                                            <h4>{mod.title}</h4>
                                            <p>{mod.description}</p>
                                        </div>
                                    </div>
                                ))}
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

export default Support;
