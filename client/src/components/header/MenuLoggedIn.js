import React, { Component } from 'react';
//import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Menu, Button } from 'semantic-ui-react';

class MenuLoggedIn extends Component {
  constructor(props) {
    super(props);
  }

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
        <Menu.Item>Search</Menu.Item>
        <Menu.Item>Write</Menu.Item>
        <Menu.Item>
          <a href="/api/logout">Logout</a>
        </Menu.Item>
      </Menu>
    );
  }
}

export default MenuLoggedIn;
