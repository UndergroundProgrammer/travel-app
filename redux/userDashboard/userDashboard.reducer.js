import Router from "next/router";
import actionTypes from "./userDashboard.actionTypes";
export const initState = {
  draftPosts: [],
  searchPosts: null,
};
function FreelancerReducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.SAVE_POST_DRAFT: {
      console.log(action.payload);
      state.draftPosts.push(action.payload);
      const drafts = state.draftPosts;
      return {
        ...state,
        ...{ draftPosts: drafts },
      };
    }
    case actionTypes.REMOVE_FROM_DRAFT: {
      state.draftPosts.splice(action.index, 1);
      const drafts = state.draftPosts;
      Router.push("/activitys");
      return {
        ...state,
        ...{ draftPosts: drafts },
      };
    }
    case actionTypes.SEARCH_POSTS_SUCCESS: {
      return {
        ...state,
        ...{ searchPosts: action.payload },
      };
    }
    case actionTypes.CLEAR_POSTS: {
      return {
        ...state,
        ...{ searchPosts: null },
      };
    }
    default:
      return state;
  }
}
export default FreelancerReducer;
