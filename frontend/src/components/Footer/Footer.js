import React from 'react'
import Newsletter from './../Newsletter/Newsletter';
import './Footer.css';
import Detail from '../Details/Detail';
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <Newsletter />
      </div>
      <div className="footer_right">
        <Detail />
      </div>

    </div>
  )
}

export default Footer