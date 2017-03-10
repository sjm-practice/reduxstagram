// @flow
import {
  INCREMENT_LIKES,
  ADD_COMMENT,
  REMOVE_COMMENT,
} from "./actionTypes";

// post / likes actions
export type ILikesAction = {
  type: string,
  index: string,
};

export function increment(index: string): ILikesAction {
  console.log("got to increment with:", index);
  return {
    type: INCREMENT_LIKES,
    index,
  };
}

// comments actions
export type ICommentsAction = {
  type: string,
  postId: string,
  index?: string,
  author?: string,
  comment?: string,
};

export function addComment(postId: string, author: string, comment: string): ICommentsAction {
  return {
    type: ADD_COMMENT,
    postId,
    author,
    comment,
  };
}

export function removeComment(postId: string, index: string): ICommentsAction {
  return {
    type: REMOVE_COMMENT,
    postId,
    index,
  };
}
