import React from 'react';
import './Hero.css';
import hero from "../../assets/hero.png"
const Hero = () => {
    return (
        <div className="hero-section">
            <div className="hero_left">
                <div className="hero_heading">
                    <h1>Virtual face-to-face <br /> mock <span className=""> interviews</span> with <br /> industry experts</h1>
                </div>
                <div className="hero_desc my-3">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa consectetur laudantium saepe, eos maiores voluptas officiis provident esse placeat voluptatum facere laborum recusandae enim.</p>
                </div>
                <div className="hero_button ">
                       <button className='btn btn-dark fs-5'>Learn more</button>
                       <button className='btn btn-outline-dark mx-4 fs-5'>Get Started</button>
                </div>
            </div>
            <div className="hero-right">
               <img src={hero} alt="" height={300} width={550} />
            </div>
        </div>
    )
}

export default Hero