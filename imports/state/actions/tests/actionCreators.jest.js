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
  });

});
