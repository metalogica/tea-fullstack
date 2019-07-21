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
import Container from "./container.jsx";

class MatchProfile extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let match = JSON.parse(root.dataset.users).filter(user => user.id == this.props.location.pathname.split('/').slice(-1))
    let user = match[0]
    return(
      <div className="matchprofile">
        <Container />
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
