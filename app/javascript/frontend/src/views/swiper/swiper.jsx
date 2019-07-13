// Core React and style
import React, { Component } from 'react';
import './style.scss';
// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
// Actions
import { fetchAllUsers } from '../../actions/index.js';
// HTML
import TestComponent from './TestComponent.jsx';

class Swiper extends Component {
  constructor(props) {
    super(props)
  }

  fetchAllUsers = () => {
    const endpoint = 'http://0.0.0.0:3000/api/v1/frontend/fetch_all_users';
    fetch(endpoint, {
      method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
      this.setState({users: data}, () => {console.log(this.state)})
    })
  }

  componentWillMount() {
    this.props.fetchAllUsers();
  }

  render() {
    console.log('state', this.props.allUsers)

    return(
      <div>
        <TestComponent/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    allUsers: state.allUsers
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchAllUsers }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Swiper);

