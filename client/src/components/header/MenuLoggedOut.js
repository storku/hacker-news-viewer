import React, { Component } from 'react';
//import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

class MenuLoggedIn extends Component {
  render() {
    return (
      <Menu>
        <Menu.Item>
          <a href="/front/top/1">Top</a>
        </Menu.Item>
        <Menu.Item>
          <a href="/front/new/1">New</a>
        </Menu.Item>
        <Menu.Item>
          <a href="/front/best/1">Best</a>
        </Menu.Item>
        <Menu.Item>
          <a href="/front/ask/1">Ask</a>
        </Menu.Item>
        <Menu.Item>
          <a href="/front/show/1">Show</a>
        </Menu.Item>
        <Menu.Item>
          <a href="/front/job/1">Jobs</a>
        </Menu.Item>
        <Menu.Item>
          <a href="/auth/google">Log In</a>
        </Menu.Item>
        <Menu.Item>
          <a href="/auth/google">Sign Up</a>
        </Menu.Item>
      </Menu>
    );
  }
}

export default MenuLoggedIn;
