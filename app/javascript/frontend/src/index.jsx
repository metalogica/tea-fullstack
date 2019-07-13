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
//import '../assets/stylesheets/application.scss';

// Reducers
import usersReducer from './reducers/users_reducer.js';
import postsReducer from './reducers/posts_reducer';

// Temporary Database
import { currentUser } from './data.js'
console.log(currentUser)

const root = document.querySelector('#root')
const initialState = {
  posts: JSON.parse(root.dataset.posts),
  currentUser: currentUser,
  unmatchedUsers: undefined,
  matchedUsers: undefined
};

// Redux state init
const reducers = combineReducers({
  posts: postsReducer,
  form: formReducer,
  allUsers: usersReducer,
  currentUser: usersReducer
});

//Middleware
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(logger, reduxPromise))

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <Router history={history}>
      <div className="thin-container">
        <Switch>
          <Route path="/posts" exact component={PostsIndex} />
          <Route path="/posts/new" exact component={PostsNew} />
          <Route path="/posts/chatroom" component={ChatRoom} />
          <Route path="/posts/login" component={Login} />
          <Route path="/posts/swiper" component={Swiper} />
          <Route path="/posts/match_profile" component={MatchProfile} />
          <Route path="/posts/user_profile" component={UserProfile} />
          <Route path="/posts/:id" component={PostsShow} />
          <Redirect from='/' to='posts'/>
        </Switch>
      </div>
    </Router>
  </Provider>,
  root
);
