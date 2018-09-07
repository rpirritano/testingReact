import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

let wrapped //define here so tests have it available. Use let since will reassign it many times

beforeEach(() => { //helper function from JEST
  wrapped = shallow(<App />);
});

it ('shows the comment box', () => {

  expect(wrapped.find(CommentBox).length).toEqual(1); //find returns an array - should be 1 or 0 since used length
});

it('shows the comment list', () => {

  expect(wrapped.find(CommentList).length).toEqual(1);
});
