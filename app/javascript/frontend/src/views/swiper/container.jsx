import React from 'react';

const Container = () => {
  return(
    <div className="swiper">
      <div className="header">
        <img className="home-logo" src={"https://res.cloudinary.com/kristynadierstein/image/upload/v1563034342/Group_zxzqyn.svg"} alt=""/>
      </div>
      <div className="profile-img">
        <img src={"https://res.cloudinary.com/kristynadierstein/image/upload/v1560617163/GElias/36003103_10217137032079942_3558751743313444864_o_itsue7.jpg"} alt="" className="avatar-pic"/>
        <h1> Bobbie, 58 </h1>
        <p> Bobbie lives in Mile End, Montreal</p>
        <i>1.7km far away</i>
      </div>
      <div className="dropdowns">
        <div className="skills">
          <i>Skills I offer to teach</i>
          <ul>
            <li>Tooling</li>
            <li>Gardening</li>
            <li>Carpentry</li>
          </ul>
        </div>

        <div className="competencies">
          <i>I am interested in learning</i>
          <ul>
            <li>Computer basics</li>
            <li>Internet browsing</li>
            <li>Open email account</li>
          </ul>
        </div>
      </div>
      <div className="footer">
        <i className="fas fa-times"></i>
        <i className="fas fa-check"></i>

      </div>
    </div>
  )
}

export default Container;
