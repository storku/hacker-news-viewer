import { combineReducers } from 'redux';
import authReducer from './authReducer';
import storiesReducer from './storiesReducer';
import storyReducer from './storyReducer';
import commentsReducer from './commentsReducer';

//combine all the reducers here
export default combineReducers({
  auth: authReducer,
  stories: storiesReducer,
  story: storyReducer,
  comments: commentsReducer
});
