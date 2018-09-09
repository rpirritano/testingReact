import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
inport reduxPromise from 'redux-promise'
import reducers from 'reducers';


//changed since other component tests dont need inital state, only CommentList does
//added default for initialState to make it compatible with other tests
export default ({ children, initialState = {} }) => {
  const store = createStore(reducers, initialState, applyMiddleware(reduxPromise));

  return(
    <Provider store={store}>{children}</Provider>
  )
}
