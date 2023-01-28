import React from 'react'
import mic from '../../assets/mic.png'
import './Newsletter.css';
import news from '../../assets/news.png'
const Newsletter = () => {
  return (
    <div className="newsletter">
        <div className="title">
            <div className="title_logo">
                <img src={mic} alt="" height={50} width={50}/>
            </div>
            <div className="heading">
                <h3>Interview</h3>
            </div>
        </div>
        <div className="newsletter_img">
            <img src={news} alt=""  height={150} width={220}/>
        </div>
        <div className="newsletter_desc">
            <div className="desc_1">
                <h5>Subscribe now</h5>
                <p>Industry's Standard from dummy <br /> and make a type book.</p>
            </div>
        </div>
        <div className="newsletter_text">
            <input  type="email" placeholder="Enter Your Email..." />
            <button className="btn btn-warning">Subscribe...</button>
        </div>

    </div>
  )
}

export default Newsletter