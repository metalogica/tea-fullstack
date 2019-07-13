// Core React and style
import React, { Component } from 'react';
import './style.scss';
// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class NavBar extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div className="navbar">
        <Link to='/'>Swiper</Link>
        <Link to='/chat_room'>ChatRoom</Link>
        <Link to='/user_profile'>UserProfile</Link>
      </div>
    )
  }
}

export default (NavBar);

