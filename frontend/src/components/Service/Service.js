import React from 'react'
import './Service.css'
import vector from '../../assets/vector.png';
import GlassCard from '../Glasscard/GlassCard';
import icon from '../../assets/Icon.png';

const Service = () => {
    return (
        <div className="services">
            <div className="services_heading">
                <div className="heading">
                    <div className="head">
                        <div className="heading_logo">
                            <img src={vector} className='vector' alt="" height={80} width={80} />
                        </div>
                        <div className="heading_title">
                            <h3>Features of Interview <br /> Target</h3>
                        </div>
                    </div>
                    <div className="services-btn">
                        <button className="btn btn-light fs-5 p-2">Our Services <i className="fa-solid fa-angle-right"></i> </button>
                    </div>
                </div>

                <div className="services_content">
                    <div className="content_one">
                        <GlassCard image={icon} title="Social Media Marketing" desc="Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret reprehendunt. " />
                        <GlassCard image={icon} title="Social Media Marketing" desc="Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret reprehendunt. " />
                        <GlassCard image={icon} title="Social Media Marketing" desc="Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret reprehendunt. " />
                    </div>
                    <div className="content_two">
                        <GlassCard image={icon} title="Social Media Marketing" desc="Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret reprehendunt. " />
                        <GlassCard image={icon} title="Social Media Marketing" desc="Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret reprehendunt. " />
                        <GlassCard image={icon} title="Social Media Marketing" desc="Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret reprehendunt. " />
                    </div>

                </div>


            </div>
        </div>

    )
}

export default Service