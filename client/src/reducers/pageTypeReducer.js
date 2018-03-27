//get pageID (page number)
import { GET_PAGE_TYPE } from '../actions/types'; //import the action type

export default function(state = 'top', action) {
  switch (action.type) {
    case GET_PAGE_TYPE:
      return action.payload;
    default:
      return state;
  }
}
