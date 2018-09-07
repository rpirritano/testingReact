import React from 'react';
import { mount } from 'enzyme'; //to use Full Dom
import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  wrapped.unmount();
});

it('has a text area and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});

it('has a text area that users can type in', () => {
  wrapped.find('textarea').simulate('change', {
    target: { value: 'new comment' } //how get the target.value
  }); //use HTML event name (change), not React name (onChange)
  wrapped.update();

  expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
});

it('when from is submitted text area gets emptied', () => {
  wrapped.find('textarea').simulate('change', {
    target: { value: 'new comment' }
  });
  wrapped.update();
  //if the above test did not exist, then would have to an expect to see if it will be setState
  //expect(wrapped.find('textarea').prop('value')).toEqual('');
  wrapped.find('form').simulate('submit');
  wrapped.update();
  expect(wrapped.find('textarea').prop('value')).toEqual('');
})
