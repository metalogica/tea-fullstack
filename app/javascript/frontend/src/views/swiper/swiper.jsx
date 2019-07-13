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
import { fetchAllUsers, toggleMatch } from '../../actions/index.js';

class Swiper extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    users: this.props.users,
    currentMatchId: 0
  }

  componentDidMount() {
    this.props.fetchAllUsers();
  }

  renderUsers() {
    return _.map(this.props.users, (user, index) => {
      if (user.new === true && this.props.users.indexOf(user) === this.state.currentMatchId) {
      return (
      <div className="match-container">
        <h3>{user.first_name}</h3>
        <div className="image-container">
          <Link to={`/match_profile/${user.id}`} key={user.id}>
            {user.images.map((url,index) => <img key={index} src={url} alt=""/>)}
          </Link>
        </div>

        <div className='buttons'>
          <button onClick={() => {this.declineMatch(user.id)}}>Don't Match</button>
          <Link to={`/match_profile/${user.id}`} key={user.id} user={user}>More Info</Link>
          <button onClick={()=> {this.acceptMatch(user.id)}}>Match</button>
        </div>

        <div className="about-container">
          <p id="bio"> {user.first_name}</p>
          <p>{user.last_name}</p>
          <p>{user.age} years old</p>
        </div>
      </div>
      )}
    })
  }

  declineMatch = (user_id) => {
    this.setState({currentMatchId: this.state.currentMatchId + 1})
    this.markUserAsSeen(user_id, false)
    // this.props.toggleMatch(user_id, false)
    // .then(this.props.history.push('/swiper'))
  }

  acceptMatch = (user_id) => {
    this.setState({currentMatchId: this.state.currentMatchId + 1})
    this.markUserAsSeen(user_id, true)
    // this.props.toggleMatch(user_id, true)
    // .then(this.props.history.push('/swiper'))
  }

  markUserAsSeen = (user_id, accepted) => {
    const csrf = document.querySelector("meta[name=csrf-token]").getAttribute("content");
    const endpoint = `http://0.0.0.0:3000/api/v1/frontend/mark_user_as_seen`;
    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-CSRF-Token': csrf
      },
      'body': JSON.stringify({
        user_id: user_id,
        accepted: accepted
      })
    })
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
  return bindActionCreators({ fetchAllUsers, toggleMatch }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Swiper);

