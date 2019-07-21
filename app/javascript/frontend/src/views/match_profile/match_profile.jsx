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
import { fetchAllUsers } from '../../actions/index.js';
import Container from "./container.jsx";

class MatchProfile extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    let match = JSON.parse(root.dataset.users).filter(user => user.id == this.props.location.pathname.split('/').slice(-1))
    let user = match[0]
    return(
      <div className="match_profile">
      <NavBar />
      <div className="profile-img">
          {user.images.map((url,index) => <img key={index} src={url} alt="" className="avatar-pic"/>)}
          <li>{user.first_name} {user.last_name}, {user.age}</li>
          <li className="match-about-me">{user.about_me}</li>
      </div>

      <div className="match-skill-set">
        <div>
          <i>Skills I offer to teach</i>
          <ul>
            {user.skills.map((skill, index) => {
              return <li><span>{skill.icon}</span><span>{skill.name}</span></li>
            })}
          </ul>
        </div>
        <div>
          <i>I am interested in learning</i>
            <ul>
              {user.interests.map((interest, index) => {
                return <li><span>{interest.icon}</span><span>{interest.name}</span></li>
              })}
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
}


function mapStateToProps(state, ownProps) {
  return { match: state.users[ownProps.match.params.id] };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MatchProfile);
