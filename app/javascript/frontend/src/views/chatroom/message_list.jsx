// Core React and style
import React, { Component } from 'react';
import './style.scss';
// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { fetchAllUsers } from '../../actions/index.js';

class MessageList extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchAllUsers()
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

function mapStateToProps(state) {
  return {
    conversations: state.conversations,
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchAllUsers }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);

