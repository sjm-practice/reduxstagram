// @flow
import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";

/* global document */

import Main from "../imports/ui/components/Main";

Meteor.startup(() => {
  render(<Main />, document.getElementById("render-target"));
});
