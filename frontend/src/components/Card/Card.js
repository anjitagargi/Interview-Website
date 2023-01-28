import React from 'react'
import './Card.css'
const card = (props) => {
  return (
    <div className="review_card">
      <div className="review_card_desc">
        <p>{props.review}</p>
      </div>

      <div className="review_details">
        <div className="review_details_left">
          <div className="review_first">
            <img src={props.img} alt="" height={50}  width={50}/>
          </div>
          <div className="review_second">
             <h4>
              {props.name}
             </h4>
             <p>{props.desc}</p>
          </div>          
        </div>
        <div className="review_details_right">
        <i className="uis uis-star"></i>
        <i className="uis uis-star"></i>
        <i className="uis uis-star"></i>
        <i className="uis uis-star"></i>
        <i className="uis uis-star-half-alt"></i>
        </div>

      </div>
    </div>
  )
}

export default card