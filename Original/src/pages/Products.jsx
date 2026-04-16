import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

const Products = () => {
    return (
        <>
            {/* ====== HERO ====== */}
            <section className="products-hero">
                <div className="grid-overlay"></div>
                <div className="products-hero-inner">
                    <span className="section-tag" style={{display:'inline-block', marginBottom:'20px'}}>Our Products</span>
                    <h1>Flagship <span className="gradient-text">Hardware</span> by Trace Robotics</h1>
                    <p>From autonomous mobile robots to hands-on educational kits — precision-engineered products built for real
                        industry and real learning.</p>
                </div>
            </section>

            {/* ====== PRODUCTS GRID ====== */}
            <section className="products-section section section-dark">
                <div className="container">
                    <div className="products-full-grid">

                        {/* Product 1 */}
                        <div className="product-card-full">
                            <div className="product-img-wrap">
                                <img src="/images/Screenshot 2026-04-04 185735.png" alt="Trace AMR with LiDAR" />
                                <span className="product-badge">Industry</span>
                            </div>
                            <div className="product-body">
                                <h3>Trace AMR</h3>
                                <p>Advanced Autonomous Mobile Robot equipped with Ouster LiDAR for high-precision mapping,
                                    localization, and smart factory internal logistics.</p>
                                <div className="product-specs">
                                    <span className="spec-tag">Ouster LiDAR</span>
                                    <span className="spec-tag">SLAM Navigation</span>
                                    <span className="spec-tag">Fleet Ready</span>
                                    <span className="spec-tag">ROS 2</span>
                                </div>
                                <Link to="/#contact" className="product-cta">
                                    Enquire Now
                                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2"
                                            strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        {/* Product 2 */}
                        <div className="product-card-full">
                            <div className="product-img-wrap">
                                <img src="/images/Screenshot 2026-04-06 230023.png" alt="Trace Robotics Educational Kit" />
                                <span className="product-badge">Education</span>
                            </div>
                            <div className="product-body">
                                <h3>Educational ESP32 Kit</h3>
                                <p>Comprehensive, hands-on learning platform for students and hobbyists to master IoT,
                                    programming, and foundational robotics concepts.</p>
                                <div className="product-specs">
                                    <span className="spec-tag">ESP32</span>
                                    <span className="spec-tag">IoT Ready</span>
                                    <span className="spec-tag">Curriculum Included</span>
                                    <span className="spec-tag">STEM</span>
                                </div>
                                <Link to="/#contact" className="product-cta">
                                    Enquire Now
                                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2"
                                            strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        {/* Product 3 */}
                        <div className="product-card-full">
                            <div className="product-img-wrap" style={{background: 'rgba(10,10,30,.9)'}}>
                                <img src="/images/product-amr-ouster.png" alt="Trace Robotics AMR Ouster" />
                                <span className="product-badge">Flagship</span>
                            </div>
                            <div className="product-body">
                                <h3>AMR with Ouster OS1</h3>
                                <p>Our flagship robot featuring the Ouster OS1 LiDAR sensor for industrial-grade 3D mapping,
                                    obstacle detection, and autonomous navigation.</p>
                                <div className="product-specs">
                                    <span className="spec-tag">360° LiDAR</span>
                                    <span className="spec-tag">3D Mapping</span>
                                    <span className="spec-tag">Industrial Grade</span>
                                </div>
                                <Link to="/#contact" className="product-cta">
                                    Enquire Now
                                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2"
                                            strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        {/* Product 4 */}
                        <div className="product-card-full">
                            <div className="product-img-wrap" style={{background: 'rgba(10,10,30,.9)'}}>
                                <img src="/images/tracelab.png" alt="TraceLab Training Kit" />
                                <span className="product-badge">Education</span>
                            </div>
                            <div className="product-body">
                                <h3>TraceLab Training Kit</h3>
                                <p>Bridge the gap between academic theory and real-world industrial applications with our
                                    comprehensive robotics training kits and curriculum.</p>
                                <div className="product-specs">
                                    <span className="spec-tag">Hands-On</span>
                                    <span className="spec-tag">College Level</span>
                                    <span className="spec-tag">Project-Based</span>
                                </div>
                                <Link to="/#contact" className="product-cta">
                                    Enquire Now
                                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2"
                                            strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                    </div>

                    {/* CTA Banner */}
                    <div className="products-cta-banner">
                        <div>
                            <h3>Need a <span className="gradient-text">custom solution?</span></h3>
                            <p>We build bespoke robotics hardware and kits tailored to your specific requirements.</p>
                        </div>
                        <Link to="/#contact" className="btn btn-primary btn-lg">
                            Contact Us
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

export default Products;
