// @flow
import React from "react";
import {
  Router,
  Route,
  IndexRoute,
  browserHistory,
} from "react-router";
import Main from "../ui/components/Main";
import Single from "../ui/components/Single";
import PhotoGrid from "../ui/components/PhotoGrid";

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Main} >
      <IndexRoute component={PhotoGrid} />
      <Route path="/view/:postId" component={Single} />
    </Route>
  </Router>
);

export default router;
