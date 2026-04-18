import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

const productsData = [
    {
        id: 'trace-lite',
        name: 'Trace Lite',
        badge: 'New Arrival',
        description: 'A compact and versatile lightweight AMR platform designed for rapid laboratory mapping, research, and indoor logistics prototyping.',
        specs: ['Compact SLAM', 'ROS 2 Support', 'Custom Modular', '8kg Payload'],
        image: '/images/Screenshot 2026-04-04 185735.png'
    }
];

const Products = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        
        <div className="page-transition">
            {/* ====== HERO ====== */}
            <section className="products-hero">
                <div className="grid-overlay"></div>
                <div className="products-hero-inner">
                    <span className="section-tag" style={{display:'inline-block', marginBottom:'20px'}}>Our Products</span>
                    <h1>Flagship <span className="gradient-text">Hardware</span></h1>
                    <p>Precision-engineered products built for real industry and real learning.</p>
                </div>
            </section>

            {/* ====== PRODUCTS GRID ====== */}
            <section className="products-section section section-dark">
                <div className="container">
                    <div className="products-full-grid" style={{justifyContent: 'center', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 450px))'}}>
                        {productsData.map((product) => (
                            <div key={product.id} className="product-card-full">
                                <div className="product-img-wrap">
                                    <img src={product.image} alt={product.name} />
                                    <span className="product-badge">{product.badge}</span>
                                </div>
                                <div className="product-body">
                                    <h3>{product.name}</h3>
                                    <p>{product.description}</p>
                                    <div className="product-specs">
                                        {product.specs.map((spec, i) => (
                                            <span key={i} className="spec-tag">{spec}</span>
                                        ))}
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
                        ))}
                    </div>

                    {/* CTA Banner */}
                    <div className="products-cta-banner">
                        <div>
                            <h3>Need a <span className="gradient-text">custom solution?</span></h3>
                            <p>We build bespoke robotics hardware and kits tailored to your specific requirements.</p>
                        </div>
                        <Link to="/#contact" className="btn btn-primary btn-lg">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Products;
