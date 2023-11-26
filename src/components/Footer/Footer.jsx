import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container grid3">
                    <div className="box">
                        <h1>Arujjwal Negi</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, quia eius est sunt consectetur rem possimus officia minima reiciendis perspiciatis! Soluta corrupti nesciunt suscipit repellendus adipisci reiciendis veritatis, accusantium saepe?</p>
                        <div className="icon-footer d_flex">
                            <div className='img d_flex'>
                                <i className="fa-brands fa-google-play"></i>
                                <span>Google Play Store</span>
                            </div>
                            <div className='img d_flex'>
                                <i className='fa-brands fa-app-store-ios'></i>
                                <span>Apple App Store</span>
                            </div>
                        </div>
                    </div>
                    <div className='box'>
                        <h2>About Us</h2>
                        <ul>
                            <li>Careers</li>
                            <li>Our Stories</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className="box">
                        <h2>Customer Care</h2>
                        <ul>
                            <li>Help Center</li>
                            <li>How To Buy</li>
                            <li>Track Your Order</li>
                            <li>Corporate & Bulk Purchasing</li>
                            <li>Returns & Refunds</li>
                        </ul>
                    </div>
                    <div className="box">
                        <h2>Contact Us</h2>
                        <ul>
                            <li>Dehradun, Uttarakhand</li>
                            <li>Email : arujjwal73@gmail.com</li>
                            <li>Phone : +919999999999</li>

                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer