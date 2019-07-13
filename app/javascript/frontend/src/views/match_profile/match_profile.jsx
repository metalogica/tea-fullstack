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

class MatchProfile extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let match = JSON.parse(root.dataset.users).filter(user => user.id == this.props.location.pathname.split('/').slice(-1))
    let user = match[0]
    return(
      <div className="matchprofile">
        <NavBar/>
        <Link to="/">Back</Link>
        <h1>Match profile page</h1>
        <ul>
          <li>{user.first_name}</li>
          <li>{user.last_name}</li>
          <li>{user.age}</li>
          <li>{user.about_me}</li>
          <ul>
            {user.skills.map((skill, index) => {
              return <li><span>{skill.icon}</span><span>{skill.name}</span></li>
            })}
          </ul>
          <div>
            {user.images.map(url => <img src={url}/>)}
          </div>
        </ul>
      </div>
    )
  }
}


function mapStateToProps(state, ownProps) {
  return { match: state.users[ownProps.match.params.id] };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MatchProfile);
