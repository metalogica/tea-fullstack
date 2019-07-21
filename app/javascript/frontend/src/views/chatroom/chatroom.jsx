 // Core React and style
import React, { Component } from 'react';
import './style.scss';
//Components
import NavBar from '../../components/navbar/navbar.jsx';
import MessageList from './message_list.jsx';
// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
// Actions
import { fetchAllUsers } from '../../actions/index.js';

class ChatRoom extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="chatroom">
        <NavBar/>
        <h1>Chatroom</h1>
        <MessageList matchedUsers={this.props.users.filter(user => user.matched === true)}/>
      </div>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom);
