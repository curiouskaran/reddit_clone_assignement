import {
  SHOW_INITIAL_POSTS,
  REQUEST_POSTS,
  RECEIVE_POSTS,
  SELECT_SUBREDDIT
} from "./actionTypes";
import fetch from "isomorphic-fetch";
// ACTIONS
export const serverRenderedPosts = posts => dispatch => {
  return dispatch({ type: SHOW_INITIAL_POSTS, payload: posts });
};

export const selectSubreddit = (subreddit) => {
  return {
    type: SELECT_SUBREDDIT,
    subreddit
  }
}

export const invalidateSubreddit = subreddit => {
  return {
    type: INVALIDATE_SUBREDDIT,
    subreddit
  };
};

export const requestPosts = subreddit => {
  return {
    type: REQUEST_POSTS,
    subreddit
  };
};

export const receivePosts = (subreddit, json) => {
  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data && Array.isArray(json.data.children) ? json.data.children.map(child => child.data) : [],
    receivedAt: Date.now()
  };
};

export const fetchPosts = subreddit => {
  return dispatch => {
    dispatch(requestPosts(subreddit));
    return fetch(`https://www.reddit.com/r/${subreddit}.json`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(json => dispatch(receivePosts(subreddit, json)))
      .catch(err => dispatch(receivePosts(subreddit, err)))
  };
};

export const shouldFetchPosts = (state, subreddit) => {
  const posts = state.postsBySubreddit[subreddit];
  if (!posts) {
    return true;
  } else if (posts.isFetching) {
    return false;
  }
};

export const fetchPostsIfNeeded = subreddit => {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), subreddit)) {
      return dispatch(fetchPosts(subreddit));
    }
  };
};
