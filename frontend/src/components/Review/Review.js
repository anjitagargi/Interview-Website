import React from 'react'
import './Review.css';
import review from '../../assets/review.png'
import Card from '../Card/Card';
import person from '../../assets/person.png';

// Import Swiper styles
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';


const Review = () => {
  return (
    <div className="review">

      <div className="review_top">
        <div className="review_left">
          <div className="review_img">
            <img src={review} alt="" height={70} width={70} />
          </div>
          <div className="review_title">
            <h5>What Student Says</h5>
            <h2>Recent Reviews</h2>
          </div>
        </div>
        <div className="review_right">
          <button className='btn-1'><i className="uis uis-angle-left-b"></i></button>
          <button className="btn-2">
            <i className="uis uis-angle-right-b"></i>
          </button>
        </div>
      </div>
      <div className="review_bottom">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}        
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}        >
          <SwiperSlide>
            <Card img={person} review="Lorem Ipsum has been the industry's standard from dummy text ever since the unknown printer to galley of type and make a type specimen book." name="Yash Sharma" desc="Software Engineer at Google" />
          </SwiperSlide>
          <SwiperSlide>
            <Card img={person} review="Lorem Ipsum has been the industry's standard from dummy text ever since the unknown printer to galley of type and make a type specimen book." name="Yash Sharma" desc="Software Engineer at Google" />
          </SwiperSlide>
          <SwiperSlide>
            <Card img={person} review="Lorem Ipsum has been the industry's standard from dummy text ever since the unknown printer to galley of type and make a type specimen book." name="Yash Sharma" desc="Software Engineer at Google" />
          </SwiperSlide>
          <SwiperSlide>
            <Card img={person} review="Lorem Ipsum has been the industry's standard from dummy text ever since the unknown printer to galley of type and make a type specimen book." name="Yash Sharma" desc="Software Engineer at Google" />
          </SwiperSlide>
          ...
        </Swiper>

      </div>

    </div>
  )
}

export default Review