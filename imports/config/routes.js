// @flow
import React from "react";
import {
  Router,
  Route,
  IndexRoute,
} from "react-router";
import { Provider } from "react-redux";
import store, { history } from "./state/stores/store";

import Main from "../ui/components/Main";
import Single from "../ui/components/Single";
import PhotoGrid from "../ui/components/PhotoGrid";

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Main}>
        <IndexRoute component={PhotoGrid} />
        <Route path="/view/:postId" component={Single} />
      </Route>
    </Router>
  </Provider>
);

export default router;
