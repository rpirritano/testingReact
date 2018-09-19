import { combineReducers } from 'redux';
import commentsReducer from 'reducers/comments';
import authReducer from 'reducers/auth';

export default combineReducers({
  comments: commentsReducer, //comments is the key
  auth: authReducer
});
