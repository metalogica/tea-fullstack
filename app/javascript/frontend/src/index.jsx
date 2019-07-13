// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory as history } from 'history';
import { reducer as formReducer } from 'redux-form';

// internal modules
import postsReducer from './reducers/posts_reducer';
import PostsIndex from './views/posts_index';
import PostsShow from './views/posts_show';
import PostsNew from './views/posts_new';

// new modules
import ChatRoom from './views/chatroom/chatroom.jsx';
import Login from './views/login/login.jsx';
import MatchProfile from './views/match_profile/match_profile.jsx';
import UserProfile from './views/user_profile/user_profile.jsx';
import Swiper from './views/swiper/swiper.jsx';
//import '../assets/stylesheets/application.scss';
const root = document.querySelector('#root')
const initialState = { posts: JSON.parse(root.dataset.posts) };

// State and reducers
const reducers = combineReducers({
  posts: postsReducer,
  form: formReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);

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
