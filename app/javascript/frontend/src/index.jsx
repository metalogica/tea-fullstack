// Core react
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory as history } from 'history';
import { reducer as formReducer } from 'redux-form';
import '../assets/stylesheets/application.scss';

// boilerplate internal modules
import PostsIndex from './views/posts_index';
import PostsShow from './views/posts_show';
import PostsNew from './views/posts_new';

// Containers
import ChatRoom from './views/chatroom/chatroom.jsx';
import Login from './views/login/login.jsx';
import MatchProfile from './views/match_profile/match_profile.jsx';
import UserProfile from './views/user_profile/user_profile.jsx';
import Swiper from './views/swiper/swiper.jsx';

// Reducers
import usersReducer from './reducers/users_reducer.js';
import currentUserReducer from './reducers/current_user_reducer.js';
import postsReducer from './reducers/posts_reducer';

// Temporary Database
import { currentUser } from './data.js'
console.log('Current User', currentUser)

const root = document.querySelector('#root')
const initialState = {
  posts: JSON.parse(root.dataset.posts),
  users: JSON.parse(root.dataset.users),
  currentUser: currentUser
};

// Redux state init
const reducers = combineReducers({
  posts: postsReducer,
  form: formReducer,
  users: usersReducer,
  currentUser: currentUserReducer
});

//Middleware
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(logger, reduxPromise))

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <Router history={history}>
      <div className="global-container">
        <Switch>
          <Route path="/posts" exact component={PostsIndex} />
          <Route path="/posts/new" exact component={PostsNew} />
          <Route path="/posts/chatroom" exact component={ChatRoom} />
          <Route path="/posts/login" exact component={Login} />
          <Route path="/swiper" exact component={Swiper} />
          <Route path="/user_profile" exact component={UserProfile} />
          <Route path="/chat_room" exact component={ChatRoom} />
          <Route path="/match_profile/:id" exact component={MatchProfile} />
          <Route path="/posts/:id" component={PostsShow} />
          <Redirect from='/' to='swiper'/>
        </Switch>
      </div>
    </Router>
  </Provider>,
  root
);
