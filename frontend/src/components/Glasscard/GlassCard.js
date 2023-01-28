import React from 'react'
import './GlassCard.css'
const GlassCard = (props) => {
    return (
        <div className="container">
            <div className="card">
                <div className="content">
                    <div className="content_img">
                        <img src={props.image} alt="" />
                    </div>
                    <div className="content_title">
                        <h4>{props.title}</h4>
                    </div>
                    <div className="content_desc">
                        <p>{props.desc}</p>
                    </div>
                    <div className="content_btn">
                        <button className='btn btn-light'>Read More <i className="fa-solid fa-angle-right"></i> </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default GlassCard