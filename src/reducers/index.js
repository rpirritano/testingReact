import { combineReducers } from 'redux';
import commentsReducer from 'reducers/comments';

export default combineReducers({
  comments: commentsReducer //comments is the key
});
