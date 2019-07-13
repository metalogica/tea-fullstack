// Core React and style
import React, { Component } from 'react';
import './style.scss';
// Redux
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory as history } from 'history';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { fetchAllUsers } from '../../actions/index.js';

class Message extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // this.props.fetchAllUsers()
  }

  render() {
    return(
      <div className="message-container">
        <p>MESSAGES</p>
        <Link to="/chat_room">Back</Link>
        { this.props.messages.map( (message, index) => {
          if (message.sender_id == this.props.userId) {
            return (
              <div key={index+1}>{message.content}</div>
            )
          } else {
            return <p>No Messages</p>
          }
        })}
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

export default connect(mapStateToProps, mapDispatchToProps)(Message);

