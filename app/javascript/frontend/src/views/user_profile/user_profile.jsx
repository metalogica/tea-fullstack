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
// import { fetchAllUsers } from '../../actions/index.js';;

class UserProfile extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="userprofile">
        <NavBar/>
        <h1>User Profile</h1>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
