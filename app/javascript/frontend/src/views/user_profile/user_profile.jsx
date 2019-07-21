// Core React and style
import React, { Component } from 'react';
import './style.scss';
//Components
import NavBar from '../../components/navbar/navbar.jsx';
// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
// Actions
// import { fetchAllUsers } from '../../actions/index.js';;

class UserProfile extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="user_profile">
        <div className="header">
          <img className="home-logo" src="https://res.cloudinary.com/kristynadierstein/image/upload/v1563034342/Group_zxzqyn.svg" alt=""/>
          <h2 className="welcome-msg"> Welcome, Matilde</h2>
        </div>

        <div className="avatar-container">
          <div className="picture-upload">
            <img src="https://res.cloudinary.com/kristynadierstein/image/upload/v1560617163/GElias/36003103_10217137032079942_3558751743313444864_o_itsue7.jpg" alt="" className="avatar-pic"/>
            <div className="avatar-btn-upload">
              <i className="fas fa-edit"></i>
            </div>
          </div>
          <div className="input">
            <input id="username"type="text" placeholder="Matilde67"/>
            <input id="age"type="text" placeholder="67"/>
            <input id="zip-code"type="text" placeholder="H1W 3C4"/>
            <input id="email"type="text" placeholder="matilde@the.com"/>
            <input id="aboutme"type="text" placeholder="Info about Matilde...."/>
          </div>
        </div>

        <div className="dropdowns">
          <div className="skills">
            <i>Skills I offer to teach</i>
            <select name="" id="" select multiple="multiple" >
              <option value="">
                <span>manage email</span>
              </option>
              <option>
                <span>using tablet</span>
              </option>
              <option>
                <span>online banking</span>
              </option>
              <option>
                <span>vegan meals</span>
              </option>
              <option>
                <span>find transport deals</span>
              </option>
              <option>
                <span>promotional offers</span>
              </option>
              <option>
                <span>help with insurance deals</span>
              </option>
            </select>
          </div>

          <div className="competencies">
            <i>I am interested in learning</i>
            <select name="" id="" select multiple="multiple" >
              <option value="">
                <span>manage email</span>
              </option>
              <option>
                <span>using tablet</span>
              </option>
              <option>
                <span>online banking</span>
              </option>
              <option>
                <span>vegan meals</span>
              </option>
              <option>
                <span>find transport deals</span>
              </option>
              <option>
                <span>promotional offers</span>
              </option>
              <option>
                <span>help with insurance deals</span>
              </option>
            </select>
          </div>
        </div>
        <div className="user-profile-btn">
          <button className="user-save">Start swiping!</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
