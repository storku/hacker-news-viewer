//front page of the app
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { List, Icon } from 'semantic-ui-react';
import moment from 'moment'; //momentjs is used to calculate how long ago an article was posted
import getWebsite from '../../utils/getWebsite'; //use it to get base domain name of a url

class FrontPageList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderStoriesList() {
    return this.props.stories
      .filter(story => {
        return story !== null;
      }) //filter stories so null stories dosen't get through
      .map(story => {
        return (
          <List.Item key={story.id}>
            <List.Icon
              name="star"
              size="large"
              verticalAlign="middle"
              color="yellow"
            />
            <List.Content>
              <List.Header as="a" href={story.url}>
                {story.title}
              </List.Header>
              <List.Description>
                {story.score} points by {story.by}{' '}
                <Link to={'/post/' + story.id}>
                  {moment(story.time * 1000).fromNow()}
                </Link>{' '}
                with {story.descendants}{' '}
                <Link to={'/post/' + story.id}>comments</Link> ({getWebsite(
                  story.url
                )})
              </List.Description>
            </List.Content>
          </List.Item>
        );
      });
  }

  render() {
    return (
      <div>
        <List divided relaxed>
          {this.renderStoriesList()}
        </List>
      </div>
    );
  }
}

function mapStateToProps({ stories }) {
  return { stories };
}

export default connect(mapStateToProps)(FrontPageList);
