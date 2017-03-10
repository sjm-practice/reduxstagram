// @flow
import type { ICommentsAction } from "../actions/actionCreators";

export type IComment = {
  text: string,
  user: string,
};

export type IPostComments = {
  [postKey: string]: Array<IComment>,
};

function comments(
  state: IPostComments = {},
  action: ICommentsAction,
): IPostComments {
  switch (action) {
    default:
      return state;
  }
}

export default comments;
