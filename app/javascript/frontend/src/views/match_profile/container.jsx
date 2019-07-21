import React from 'react';

const Container = () => {
  return(
    <div className="match_profile">
      <div className="header">
        <img className="home-logo" src="https://res.cloudinary.com/kristynadierstein/image/upload/v1563034342/Group_zxzqyn.svg" alt=""/>
      </div>

        <div className="profile-img">
          <img src="https://res.cloudinary.com/kristynadierstein/image/upload/v1560617163/GElias/36003103_10217137032079942_3558751743313444864_o_itsue7.jpg" alt="" className="avatar-pic"/>
          <h1> Gertruda, 58 </h1>
          <p> Gertruda lives in Mile End, Montreal</p>
          <i>1.7km far away</i>
        </div>

          <p className="match-about-me">Hello, I am Gertruda. I am 58 years old, I have a big family with kids and 13 grand-children. I enjoy my time at our lake cottage near White Lake and I love cooking and gardening. </p>

    <div className="match-skill-set">
      <div className="skills">
        <i>Skills I offer to teach</i>
        <ul className="skills-list">
          <li>Carpentry</li>
          <li>Gardening</li>
          <li>Tooling</li>
          <li>Creative Writing</li>
          <li>Painting</li>
        </ul>
      </div>

      <div className="competencies">
        <i>I am interested in learning</i>
        <ul className="competencies-list">
          <li>Use my tablet</li>
          <li>Online shopping</li>
          <li>Open email account</li>
        </ul>
      </div>
    </div>

    <div className="send-message">
      <input className="message-field" type="text" placeholder="Type your message here"/>
      <button className="btn-swiper">Send message</button>
      <button className="btn-swiper">Keep swiping</button>
    </div>

    </div>
  )
}
export default Container;
