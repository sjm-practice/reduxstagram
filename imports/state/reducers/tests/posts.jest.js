// @flow
/* eslint-env jest */
/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */
import posts from "../posts";
import { increment } from "../../actions/actionCreators";

describe("posts reducer", function () {
  it("should increment likes when receiving an INCREMENT_LIKES action", function () {
    const postsOldState = [
      {
        code: "abc123",
        caption: "Nice Pic.",
        likes: 0,
        id: "123",
        display_src: "www.this_picture.org",
      },
    ];

    const incrementAction = increment(0);
    const postsNewState = posts(postsOldState, incrementAction);

    expect(postsOldState[0].likes).toEqual(0); // do not mutate old state
    expect(postsNewState[0].likes).toEqual(1); // return new state with correct value
  });

  it("should return current state when receiving an unknown action", function () {
    const postsOldState = [
      {
        code: "abc123",
        caption: "Nice Pic.",
        likes: 0,
        id: "123",
        display_src: "www.this_picture.org",
      },
    ];

    const unknownAction = {
      type: "UNKNOWN_ACTION",
      index: 0,
    };

    const postsNewState = posts(postsOldState, unknownAction);
    expect(postsNewState).toEqual(postsOldState);
  });
});
