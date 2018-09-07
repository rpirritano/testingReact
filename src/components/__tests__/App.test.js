import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

it ('shows the comment box', () => {
  const wrapped = shallow(<App />); //can call wrapped, component

  expect(wrapped.find(CommentBox).length).toEqual(1); //find returns an array - should be 1 or 0 since used length
});

it('shows the comment list', () => {
  const wrapped = shallow(<App />);

  expect(wrapped.find(CommentList).length).toEqual(1);
});
