// @flow
/* eslint-env jest */
/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import renderer from "react-test-renderer";
import Single from "../Single";

describe("<Single />", function () {
  it("matches render snapshot", function () {
    const tree = renderer.create(<Single />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

