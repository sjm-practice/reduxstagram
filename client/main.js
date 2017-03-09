// @flow
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";

/* global document */

import router from "../imports/config/routes";

Meteor.startup(() => {
  render(router, document.getElementById("render-target"));
});
