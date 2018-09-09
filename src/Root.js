import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'reducers';


//changed since other component tests dont need inital state, only CommentList does
//added default for initialState to make it compatible with other tests 
export default ({ children, initialState = {} }) => {
  return(
    <Provider store={createStore(reducers, initialState)}>
      {children}
    </Provider>
  )
}
