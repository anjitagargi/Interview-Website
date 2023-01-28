import React from 'react'
import './Detail.css'
const Detail = () => {
    return (
        <div className='details'>
            <div className="details_one">
                <div className="one_left">
                    <h3><i className="uil uil-phone"></i> Get in touch with</h3>
                    <div className="phone">
                        <h3>+91-8920304337</h3>
                    </div>
                    <p className='my-3'>yashsharma06033@gmail.com</p>
                </div>
                <div className="one_right">
                    <h3><i className="uil uil-location-point"></i> Location</h3>
                    <p className="my-3">10 Suna House
                        65 Rivington Street
                        London
                        EC2A 3QQ</p>
                    <a href="/">Location</a>
                </div>
            </div>
            <hr />
            <div className="details_two">
                <div className="two_1">
                    <div className="1_title">
                        <h4><i class="uil uil-layers"></i> Pages</h4>
                    </div>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Blog</a></li>
                        <li><a href="/">Contact</a></li>
                        <li><a href="/">Services</a></li>
                    </ul>

                </div>
                <div className="two_2">
                    <div className="2_title">
                        <h4><i class="uil uil-edit-alt"></i> Utilities</h4>
                    </div>
                    <ul>
                        <li><a href="/">Features</a></li>
                        <li><a href="/">Pricing</a></li>
                        <li><a href="/">Privacy Policy</a></li>
                        <li><a href="/">Help</a></li>
                    </ul>

                </div>
                <div className="two_3">
                    <div className="3_title">
                        <h4><i className="uil uil-megaphone"></i> Follows</h4>
                    </div>
                    <ul>
                        <li><a href="/">Facebook</a></li>
                        <li><a href="/">LinkedIn</a></li>
                        <li><a href="/">Instagram</a></li>
                        <li><a href="/">Discord</a></li>
                    </ul>

                </div>

            </div>
            <hr />
            <div className="details_three">
                <h4>Copyright @ Yash Sharma & Anjita  | Designed by Yash Sharma</h4>
            </div>
        </div>
    )
}

export default Detail