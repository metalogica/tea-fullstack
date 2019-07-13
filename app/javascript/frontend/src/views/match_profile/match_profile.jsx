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

class MatchProfile extends Component {
  constructor(props) {
    super(props)
  }

  renderCurrentMatch() {
    return(
      TEMP
    )
  }

  render() {
    const { match } = this.props;

    return(
      <div className="matchprofile">
        <NavBar/>
        <Link to="/">Back</Link>
        <h1>Match profile page</h1>
        <ul>
          <li>{match.first_name}</li>
          <li>{match.last_name}</li>
          <li>{match.age}</li>
          <li>{match.about_me}</li>
          <ul>
            {match.skills.map((skill, index) => {
              return <li><span>{skill.icon}</span><span>{skill.name}</span></li>
            })}
          </ul>
          <div>
            {match.images.map(url => <img src={url}/>)}
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
