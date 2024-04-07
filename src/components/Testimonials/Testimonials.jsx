import React from 'react';
import './Testimonials.css';
import timage1 from "../../assets/timage1.png";
import timage2 from "../../assets/timage2.jpg";
import timage3 from "../../assets/timage3.png";
import timage4 from "../../assets/timage4.png";
const Testimonials = () => {

  return (
    <div className="container">
      <h1 className="title">Our Experts</h1>
      <div className="image-container">
    <div className="image">
      <img src={timage1} alt="" />
      <span>Dr. Kumar</span>
    </div>
    <div className="image">
      <img src={timage2} alt="" />
      <span>Dr. Deepak</span>
    </div>
    <div className="image">
      <img src={timage3} alt="" />
      <span>Dr. Ravi</span>
    </div>
    <div className="image">
      <img src={timage4} alt="" />
      <span>Dr. Alice</span>
    </div>
  </div>
    </div>
  )
}

export default Testimonials