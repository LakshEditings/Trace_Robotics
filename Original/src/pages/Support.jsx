import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const supportModules = [
    {
        icon: '🤖',
        title: 'Robotics Workshops',
        subtitle: 'Hands-On Campus Programs',
        description: 'Intensive workshops delivered at schools and college campuses. Participants assemble and program our custom modular robot kits, learning actuator mechanics, sensor integration, and basic ROS (Robot Operating System) navigation — bridging classroom theory with real-world robotics.',
        tags: ['Kinematics', 'ROS Navigation', 'Robot Programming'],
        color: '#6366f1'
    },
    {
        icon: '🧠',
        title: 'AI & Robotics Courses',
        subtitle: 'Industry-Ready Certification',
        description: 'Structured online modules from foundational embedded programming (Arduino, ESP32) to advanced AI-driven machine vision systems. Completion earns an industry-recognized certificate, preparing students for careers in automation and robotics engineering.',
        tags: ['Machine Vision', 'Embedded AI', 'ESP32 / STM32'],
        color: '#10b981'
    },
    {
        icon: '⚡',
        title: 'Electronics Training',
        subtitle: 'PCB Design & Firmware',
        description: 'Comprehensive deep-dive training covering analog/digital circuit design, PCB fabrication workflows using EasyEDA and KiCad, microcontroller firmware in C/C++, and full IoT integration — building engineers who can design hardware from schematic to silicon.',
        tags: ['PCB Design', 'Firmware Dev', 'IoT Systems'],
        color: '#f59e0b'
    }
];

const Support = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-container page-transition" style={{ paddingTop: '80px', minHeight: '100vh', background: 'var(--bg-primary)' }}>

            {/* ── Hero Header ── */}
            <section style={{ padding: '80px 0 40px', textAlign: 'center' }}>
                <div className="container">
                    <span className="section-tag">Support & Training</span>
                    <h1 className="section-title" style={{ marginTop: '16px', fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
                        Training Courses for <span className="gradient-text">STEM Excellence</span>
                    </h1>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '660px', margin: '20px auto 0', fontSize: '1.1rem', lineHeight: '1.7' }}>
                        At Trace Robotics, we empower students and engineers with hands-on programs that bridge theoretical knowledge with real-world industrial application.
                    </p>
                </div>
            </section>

            {/* ── Hero Image ── */}
            <section style={{ padding: '0 0 60px' }}>
                <div className="container">
                    <div style={{
                        borderRadius: '20px',
                        overflow: 'hidden',
                        height: '400px',
                        position: 'relative',
                        boxShadow: 'var(--shadow-lg)'
                    }}>
                        <img
                            src="/images/support-workshop.png"
                            alt="Trace Robotics Training Workshop"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                        />
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(to top, rgba(10,10,26,0.7) 0%, transparent 60%)'
                        }}></div>
                        <div style={{
                            position: 'absolute',
                            bottom: '32px',
                            left: '40px',
                            color: '#fff'
                        }}>
                            <p style={{ fontSize: '1.2rem', fontWeight: '600', opacity: 0.9 }}>Live Robotics Workshop — Trace Robotics Academy</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 3 Module Cards ── */}
            <section style={{ padding: '0 0 80px' }}>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '28px'
                    }}>
                        {supportModules.map((mod, i) => (
                            <div key={i} className="support-module-card" style={{
                                background: 'var(--bg-card)',
                                borderRadius: '20px',
                                padding: '36px 32px',
                                border: '1px solid var(--border-color)',
                                boxShadow: 'var(--shadow-md)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '16px'
                            }}
                            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; }}
                            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; }}
                            >
                                {/* Icon */}
                                <div style={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '16px',
                                    background: `linear-gradient(135deg, ${mod.color}33, ${mod.color}66)`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.8rem',
                                    border: `1px solid ${mod.color}44`,
                                    flexShrink: 0
                                }}>
                                    {mod.icon}
                                </div>

                                {/* Subtitle */}
                                <p style={{ fontSize: '0.75rem', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', color: mod.color, margin: 0 }}>
                                    {mod.subtitle}
                                </p>

                                {/* Title */}
                                <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#ffffff', margin: 0, lineHeight: '1.3' }}>
                                    {mod.title}
                                </h3>

                                {/* Description */}
                                <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.7', fontSize: '0.95rem', margin: 0, flexGrow: 1 }}>
                                    {mod.description}
                                </p>

                                {/* Tags */}
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                    {mod.tags.map((tag, j) => (
                                        <span key={j} style={{
                                            padding: '4px 12px',
                                            borderRadius: '50px',
                                            fontSize: '0.75rem',
                                            fontWeight: '600',
                                            background: `${mod.color}22`,
                                            color: mod.color,
                                            border: `1px solid ${mod.color}44`
                                        }}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div style={{ textAlign: 'center', marginTop: '56px', display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/contact" className="btn btn-primary" style={{ padding: '14px 36px', fontSize: '1rem' }}>
                            ENROLL NOW
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginLeft: '8px' }}>
                                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                        <a href="/Trace_Robotics_Brochure.pdf" className="btn btn-outline" target="_blank" rel="noopener noreferrer" style={{ padding: '14px 36px', fontSize: '1rem' }}>
                            DOWNLOAD SYLLABUS
                        </a>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Support;
