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

class Swiper extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    users: this.props.users
  }

  componentDidMount() {
    this.props.fetchAllUsers();
  }

  renderUsers() {
    return _.map(this.props.users, (user) => {
      return(
      <div className="match-container">
        <h3>{user.first_name}</h3>
        <div className="image-container">
          <Link to={`/match_profile/${user.id-1}`} key={user.id}>
            {user.images.map((url,index) => <img src={url} alt=""/>)}
          </Link>
        </div>
        <div className="about-container">
          <p>{user.last_name}</p>
          <p>{user.age} years old</p>
        </div>
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
        <div className='buttons'>
          <button onClick={() => {console.log(this.state.users)}}>Don't Match</button>
          <button>More Info</button>
          <button>Match</button>
        </div>
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

