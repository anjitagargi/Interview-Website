import React from 'react'
import "./Contricard.css";
const Contricard = (props) => {
    return (
        <div className="contri_card">
            <div className="content">
                <div className="img_bx">
                    <img src={props.img} alt="" height={200}  width={200}/>
                </div>
                <div className="content_bx">
                    <h3>{props.name} <br /> <span>{props.desc}</span></h3>
                </div>
            </div>
            <ul className="sci">
                <li><a href="/"><i className="uil uil-facebook-f"></i></a></li>
                <li><a href="/"><i className="uil uil-instagram"></i></a></li>
                <li><a href="/"><i className="uil uil-linkedin"></i></a></li>
            </ul>
        </div>
    )
}

export default Contricard