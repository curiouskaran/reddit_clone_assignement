import {
  RECEIVE_POSTS,
  REQUEST_POSTS,
  SHOW_INITIAL_POSTS,
  INVALIDATE_SUBREDDIT
} from "../actions/actionTypes";

const initialState = {
  posts: [],
  postsBySubreddit: {}
};

const posts = (
  state = {
    isFetching: false,
    didInvalidate: false,
    items: []
  },
  action
) => {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
      return Object.assign({}, state, {
        didInvalidate: true
      });
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
};

// REDUCERS
export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_INITIAL_POSTS:
      return {
        ...state,
        posts: action.payload
      };
    case INVALIDATE_SUBREDDIT:
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return {
        ...state,
        [action.subreddit]: posts(state[action.subreddit], action)
      };
    default:
      return state;
  }
};
