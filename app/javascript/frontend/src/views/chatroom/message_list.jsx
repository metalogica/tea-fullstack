// Core React and style
import React, { Component } from 'react';
import './style.scss';
// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class MessageList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.matchedUsers.length >= 1) {
      return(
        this.props.matchedUsers.map((user,index) => {
          return(
            <div className="message-list" key={index+1}>
              <p>Info on the person like their image</p>
              <p>{user.about_me}</p>
              <Link to={`/chat_room/${user.id}`}>ChatRoom</Link>
            </div>
          )
        })
    )} else {
        return <p>NO MESSAGE</p>
      }
  }
}

export default MessageList;

