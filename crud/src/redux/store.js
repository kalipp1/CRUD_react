import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import { composeWithDevTools } from '@redux-devtools/extension';
import postsReducer from './postsRedux';

const subreducers = {
  posts: postsReducer,
}

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools()
);

export default store;