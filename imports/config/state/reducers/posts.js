// @flow
import type { ILikesAction } from "../actions/actionTypes";

type IPost = {
  code: string,
  caption: string,
  likes: number,
  id: string,
  display_src: string,
};

type IPosts = Array<IPost>;

function posts(
  state: IPosts = [],
  action: ILikesAction,
): IPosts {
  console.log(state, action);  // eslint-disable-line no-console
  return state;
}

export default posts;
