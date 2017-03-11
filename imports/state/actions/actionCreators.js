// @flow
import {
  INCREMENT_LIKES,
  ADD_COMMENT,
  REMOVE_COMMENT,
} from "./actionTypes";

// post / likes actions
export type ILikesAction = {
  type: string,
  index: number,
};

export function increment(index: number): ILikesAction {
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
  index?: number,
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

export function removeComment(postId: string, index: number): ICommentsAction {
  return {
    type: REMOVE_COMMENT,
    postId,
    index,
  };
}
