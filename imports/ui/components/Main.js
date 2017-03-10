// @flow
import React, {
  Component,
} from "react";
import { Link } from "react-router";

type IProps = {
  children: React.Element<*>,
};

// eslint-disable-next-line react/prefer-stateless-function
class Main extends Component {
  props: IProps;

  render() {
    const { children, ...otherProps } = this.props;
    const newChild = React.cloneElement(children, otherProps);

    return (
      <div>
        <h1>
          <Link to="/">
            Reduxstagram
          </Link>
        </h1>
        {newChild}
      </div>
    );
  }
}

export default Main;
