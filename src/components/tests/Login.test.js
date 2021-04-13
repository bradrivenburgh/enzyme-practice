import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow, mount, render, simulate } from 'enzyme';

import Login from '../Login';

describe('Login Test Suite', () => {
  it('renders correctly', () => {
    const tree = shallow(<Login />);
    const snapshot = toJson(tree);
    expect(snapshot).toMatchSnapshot();
  });

  it('should render the form', () => {
    const wrapper = shallow(<Login />);
    // renders form element
    expect(wrapper.find('.login').exists()).toBe(true);
    // renders an email input and a password input
    expect(wrapper.find('#email')).toHaveLength(1);
    expect(wrapper.find('#password')).toHaveLength(1);
  });
});

describe('Email Test Suite', () => {
  it('should change the state of the Login component', () => {
    const wrapper = shallow(<Login />);
    // Find 'email' input
    const email = wrapper.find('#email');
    // Simulate blur event and pass mock data
    email.simulate('blur', {
      target: { name: 'email', value: 'brad.rivenburgh@gmail.com' },
    });
    // Assert that state of the email property will update correctly
    expect(wrapper.state('email')).toEqual('brad.rivenburgh@gmail.com');
  });
});

describe('Password Test Suite', () => {
  const wrapper = mount(<Login />);
  const password = wrapper.find('#password');
  password.simulate('blur', {
    target: { name: 'password', value: 'my_log_is_rocket' },
  });
  expect(wrapper.state('password')).toEqual('my_log_is_rocket');
  wrapper.unmount();
});
