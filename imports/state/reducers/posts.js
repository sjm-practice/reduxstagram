// @flow
import {
  INCREMENT_LIKES,
} from "../actions/actionTypes";

import type { ILikesAction } from "../actions/actionCreators";

export type IPost = {
  code: string,
  caption: string,
  likes: number,
  id: string,
  display_src: string,
};

export type IPosts = Array<IPost>;

function posts(
  state: IPosts = [],
  action: ILikesAction,
): IPosts {
  switch (action.type) {
    case INCREMENT_LIKES:
      console.log("incrementing!");
      return state;

    default:
      console.log("got something else mofo.", action);
      return state;
  }
}

export default posts;
