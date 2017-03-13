// @flow
/* eslint-env jest */
/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import renderer from "react-test-renderer";
import PhotoGrid from "../PhotoGrid";

describe("<PhotoGrid />", function () {
  it("matches render snapshot", function () {
    const tree = renderer.create(<PhotoGrid />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

