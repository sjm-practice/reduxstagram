// @flow
import type { ICommentsAction } from "../actions/actionCreators";

type IComment = {
  text: string,
  user: string,
};

type IPostComments = {
  [postKey: string]: Array<IComment>,
};

function comments(
  state: IPostComments = {},
  action: ICommentsAction,
): IPostComments {
  console.log(state, action);  // eslint-disable-line no-console
  return state;
}

export default comments;
