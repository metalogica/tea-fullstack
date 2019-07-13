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

  componentDidMount() {
    this.props.fetchAllUsers();
  }

  renderUsers() {
    return _.map(this.props.users, (user) => {
      return(
      <div className="match-container">
        <Link to={`/match_profile/${user.id-1}`} key={user.id}>
          <div className='userpic'>
            {user.images.map((url,index) => <img src={url} alt=""/>)}
          </div>
          <div className="user-item">
            <h3>{user.first_name}</h3>
            <p>{user.last_name}</p>
          </div>
          <p>Click Me To See More</p>
        </Link>
      </div>
      )
    })
  }

  toggleMatch() {

  }

  render() {
    return(
      <div className='swiper'>
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

