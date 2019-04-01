import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

const initialState = {
  posts: [],
  subreddits: []
};

export const actionTypes = {
  SHOW_INITIAL_POSTS: "SHOW_INITIAL_POSTS",
};

// REDUCERS
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_INITIAL_POSTS:
      return {
        ...state,
        posts: action.payload
      };
    case actionTypes.RESET:
      return Object.assign({}, state, {
        posts: initialState.posts
      });
    default:
      return state;
  }
};

// ACTIONS
export const serverRenderedPosts = posts => dispatch => {
  return dispatch({ type: actionTypes.SHOW_INITIAL_POSTS, payload: posts });
};

export const resetCount = () => dispatch => {
  return dispatch({ type: actionTypes.RESET });
};

export function initializeStore(initialState = initialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}
