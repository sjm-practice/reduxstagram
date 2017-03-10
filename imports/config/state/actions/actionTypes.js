// @flow

// Likes actions
export const INCREMENT_LIKES: string = "INCREMENT_LIKES";

export type ILikesAction = {
  type: string,
  index: string,
};

// Comments actions
export const ADD_COMMENT: string = "ADD_COMMENT";
export const REMOVE_COMMENT: string = "REMOVE_COMMENT";

export type ICommentsAction = {
  type: string,
  postId: string,
  index?: string,
  author?: string,
  comment?: string,
};
