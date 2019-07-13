// Core React and style
import React, { Component } from 'react';
import './style.scss';
// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { fetchAllUsers } from '../../actions/index.js';

class PersonalConversation extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchAllUsers()
  }

  render() {
    return(
      <div>
        <p>MESSAGES</p>
        <Link to="/chat_room">Back</Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(PersonalConversation);

