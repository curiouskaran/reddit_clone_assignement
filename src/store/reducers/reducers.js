import {
  RECEIVE_POSTS,
  REQUEST_POSTS,
  SHOW_INITIAL_POSTS,
} from "../actions/actionTypes";


const initialState = {
  posts: []
};

const posts = (
  state = {
    isFetching: false,
    items: []
  },
  action
) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_POSTS:
      return {
        ...state,
        isFetching: false,
        items: action.posts
      }
    default:
      return state;
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_INITIAL_POSTS:
      return {
        ...state,
        posts: action.payload
      };
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

export default reducer;
