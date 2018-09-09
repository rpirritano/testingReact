import React from 'react';
import { mount } from 'enzyme';
import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapped;

beforeEach(() => {
  //use this to get some initial data from the store, since the apps initial state is empty
  //also changed the Root.js to allow this - added props.initialState....
  const initialState = {
    comments: ['Comment 1', 'Comment 2']
  };

  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

it('creates one li per comment', () => {
  //console.log(wrapped.find('li').length);
  expect(wrapped.find('li').length).toEqual(2);
});

it('shows the text for each comment', () => {
  //console.log(wrapped.render().text());
  expect(wrapped.render().text()).toContain('Comment 1');
  expect(wrapped.render().text()).toContain('Comment 2');
});
