// @flow
import {
  INCREMENT_LIKES,
  ADD_COMMENT,
  REMOVE_COMMENT,
} from "./actionTypes";

type ILikesAction = {
  type: string,
  index: string,
};

// increment likes
export function increment(index: string): ILikesAction {
  return {
    type: INCREMENT_LIKES,
    index,
  };
}

type ICommentsAction = {
  type: string,
  postId: string,
  index?: string,
  author?: string,
  comment?: string,
};

// add comment
export function addComment(postId: string, author: string, comment: string): ICommentsAction {
  return {
    type: ADD_COMMENT,
    postId,
    author,
    comment,
  };
}

// remove comment
export function removeComment(postId: string, index: string): ICommentsAction {
  return {
    type: REMOVE_COMMENT,
    postId,
    index,
  };
}
