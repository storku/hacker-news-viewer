//front page of the app
import React, { Component } from 'react';
import FrontPageList from './FrontPageList';
import FrontPageBottom from './FrontPageBottom';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Message, Icon } from 'semantic-ui-react';

class FrontPage extends Component {
  componentDidMount() {
    //look at the url path to determine which type of stories to load
    let pageType = this.props.match.params.pageType;
    if (!pageType) {
      pageType = 'topstories';
    } else {
      if (pageType === 'top') {
        pageType = 'topstories';
      } else if (pageType === 'new') {
        pageType = 'newstories';
      } else if (pageType === 'best') {
        pageType = 'beststories';
      } else if (pageType === 'ask') {
        pageType = 'askstories';
      } else if (pageType === 'show') {
        pageType = 'showstories';
      } else if (pageType === 'job') {
        pageType = 'jobstories';
      }
    }
    this.props.getHackerNewsStories(this.props.match.params.pageID, pageType);
  }

  render() {
    return (
      <div>
        <Message>
          <Message.Header>Welcome to the Hacker News Viewer!</Message.Header>
          <Icon color="red" name="heart" /> Welcome everyone!
        </Message>
        <FrontPageList />
        <FrontPageBottom />
      </div>
    );
  }
}

export default connect(null, actions)(FrontPage);
