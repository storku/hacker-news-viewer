//get all comments for a post
import axios from 'axios'; //used to make AJAX requests
import { GET_COMMENTS_TREE, GET_COMMENTS_NUMBER } from './types';
import _ from 'lodash';

export const getCommentsTree = postID => async dispatch => {
  //const uri = '16613345';
  const uri = postID;
  const url = 'https://hacker-news.firebaseio.com/v0/item/' + uri + '.json';
  const story = await axios(url);
  const storyKids = await story.data.kids;

  let commentsTree = {};
  async function getComments(kids) {
    kids.map(async kid => {
      commentsTree[kid] = {};
      const url = 'https://hacker-news.firebaseio.com/v0/item/' + kid + '.json';
      const comment = await axios(url);
      if (!comment.data) {
        return;
      }
      const commentParent = comment.data.parent;
      const commentID = comment.data.id;
      const commentText = comment.data.text;
      const commentBy = comment.data.by;
      const commentTime = comment.data.time;
      const commentKids = comment.data.kids;
      commentsTree[kid] = {
        parent: commentParent,
        id: commentID,
        text: commentText,
        by: commentBy,
        time: commentTime
      };
      if (commentKids) {
        //console.log(commentParent, commentKids);
        //commentsTree[kid]['kids'] = commentKids;
        getComments(commentKids);
      } else {
      }
    });
  }

  getComments(storyKids);

  //make postID a number so it can be matched!
  postID = Number(postID);

  let roots = [];
  function searchTree(tree) {
    _.map(tree, (value, key) => {
      let item = tree[key];
      //console.log(item);
      if (item.parent === postID) {
        return roots.push(item);
      } else if (item.parent in tree) {
        let p = tree[item.parent];
        if (!('children' in p)) {
          p.children = [];
        }
        //console.log(p);
        p.children.push(item);
      }
    });

    console.log(JSON.stringify(roots));
  }

  setTimeout(() => {
    //count number of comments
    const numberOfComments = Object.keys(commentsTree).length;
    //convert the comments from flat to hierarchical
    searchTree(commentsTree);
    dispatch({ type: GET_COMMENTS_TREE, payload: roots });
    dispatch({ type: GET_COMMENTS_NUMBER, payload: numberOfComments });
  }, 1500);
};
