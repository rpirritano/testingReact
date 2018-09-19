import React from 'react';
import { Route } from 'react-router-dom';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';


export default () => {
  return (
    <div>
      <Route path="/post" component={CommentBox} />
      <Route path="/" exact component={CommentList} />
    </div>
  )
};



/*
//Steps:
1. Create simple component to verify app is working
2. Do the same with other components

/*
export default () => {
  return <div>I'm the app components</div>
};
*/
