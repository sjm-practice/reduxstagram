// @flow
/* eslint-env jest */
/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */

import {
  INCREMENT_LIKES,
  ADD_COMMENT,
  REMOVE_COMMENT,
} from "../actionTypes";
import * as actionCreators from "../actionCreators";

describe("actions", function () {
  describe("increment", function () {
    it("should have action type of INCREMENT_LIKES", function () {
      expect(actionCreators.increment(1).type).toEqual(INCREMENT_LIKES);
    });

    it("should return the index we pass it", function () {
      expect(actionCreators.increment(1).index).toEqual(1);
    });
  });

  describe("addComment", function () {
    it("should have action type of ADD_COMMENT", function () {
      expect(actionCreators.addComment("id", "author", "comment").type).toEqual(ADD_COMMENT);
    });

    it("should return the author and comment we pass it", function () {
      const addCommentAction = actionCreators.addComment("123", "Mark Twain", "Cold Summers.");
      expect(addCommentAction.postId).toEqual("123");
      expect(addCommentAction.author).toEqual("Mark Twain");
      expect(addCommentAction.comment).toEqual("Cold Summers.");
    });
  });

  describe("removeComment", function () {
    it("should have action type of REMOVE_COMMENT", function () {
      expect(actionCreators.removeComment("id", 1).type).toEqual(REMOVE_COMMENT);
    });

    it("should return the postId and comment index we pass it", function () {
      const removeCommentAction = actionCreators.removeComment("123", 5);
      expect(removeCommentAction.postId).toEqual("123");
      expect(removeCommentAction.index).toEqual(5);
    });
  });
});
