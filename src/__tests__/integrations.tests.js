import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';


beforeEach(() => {
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'Fetched #1' }, { name: 'Fetched #2' }]
  });
});

afterEach(() => {
  moxios.uninstall();
});

  // Attempt to render the *entire* App
  //find the 'fetchComments' button and click it
  //add pause since need moxios to have time
 // Expect to find a list of comments
 //tell JEST to hold on for the setTimeout, use 'done'
 //tell wrapped to update components
it('can fetch a list of comments and display them', (done) => {
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  wrapped.find('.fetch-comments').simulate('click');

  setTimeout(() => {
    wrapped.update();

    expect(wrapped.find('li').length).toEqual(2);
    done();
    wrapped.unmount();

  }, 100);
});
