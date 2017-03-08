// @flow
import React, {
  Component,
} from "react";
import { Link } from "react-router";

// eslint-disable-next-line react/prefer-stateless-function
class Main extends Component {
  render() {
    return (
      <div>
        <h1>
          <Link to="/">
            Reduxstagram
          </Link>
        </h1>
      </div>
    );
  }
}

export default Main;
