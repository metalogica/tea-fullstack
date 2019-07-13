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
// HTML
import TestComponent from './TestComponent.jsx';

class Swiper extends Component {
  constructor(props) {
    super(props)
  }

  // Not needed, just for reference
  // fetchAllUsers = () => {
  //   const endpoint = 'http://0.0.0.0:3000/api/v1/frontend/fetch_all_users';
  //   fetch(endpoint, {
  //     method: 'GET',
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     this.setState({users: data}, () => {console.log(this.state)})
  //   })
  // }

  componentDidMount() {
    this.props.fetchAllUsers();
  }

  renderUsers() {
    return _.map(this.props.users, (user) => {
      return(
        <Link to={`/match_profile/${user.id}`} key={user.id}>
          <div className="user-item">
            <h3>{user.first_name}</h3>
            <p>{user.last_name}</p>
          </div>
        </Link>
      )
    })
  }

  render() {
    return(
      <div>
        <NavBar/>
        {this.renderUsers()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
    currentUser: state.currentUser
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchAllUsers }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Swiper);

