// @flow
import {
  ADD_COMMENT,
  REMOVE_COMMENT,
} from "../../state/actions/actionTypes";
import type { ICommentsAction } from "../actions/actionCreators";

export type IComment = {
  text: string,
  user: string,
};

function postComments(
  state: Array<IComment> = [],
  action: ICommentsAction,
): Array<IComment> {
  switch (action.type) {
    case ADD_COMMENT:
      return [
        ...state,
        {
          user: action.author,
          text: action.comment,
        },
      ];

    case REMOVE_COMMENT:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1),
      ];

    default:
      return state;
  }
}

export type IPostComments = {
  [postKey: string]: Array<IComment>,
};

function comments(
  state: IPostComments = {},
  action: ICommentsAction,
): IPostComments {
  if (typeof action.postId !== "undefined") {
    return {
      ...state,
      [action.postId]: postComments(state[action.postId], action),
    };
  }

  return state;
}

export default comments;
