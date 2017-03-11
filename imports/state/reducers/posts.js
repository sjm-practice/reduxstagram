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
  const i = action.index;

  switch (action.type) {
    case INCREMENT_LIKES:
      console.log("incrementing!");
      return [
        ...state.slice(0, i), // keep all elements before the one we update
        { ...state[i], likes: state[i].likes + 1 },
        ...state.slice(i + 1), // keep all elements after the one we update
      ];

    default:
      console.log("got something else mofo.", action);
      return state;
  }
}

export default posts;
