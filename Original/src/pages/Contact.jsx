import React, { useEffect } from 'react';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-container page-transition" style={{ paddingTop: '80px', minHeight: '100vh', background: 'var(--bg-primary)' }}>
            <section className="section section-dark">
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
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{marginLeft: '8px'}}>
                                    <path d="M14 2L7 9M14 2l-5 12-2-5-5-2 12-5z" stroke="currentColor" strokeWidth="1.5"
                                        strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
