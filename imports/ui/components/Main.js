// @flow
import React, {
  Component,
} from "react";
import { Link } from "react-router";

type IProps = {
  children?: React.Element<*>,
};

// TODO make children required (not optional)
//    -note when it's required it throws a flow error (which shouldn't)
//     this may be a flow issue:  https://github.com/facebook/flow/issues/1964
//      the work around seems to be make children optional

// eslint-disable-next-line react/prefer-stateless-function
class Main extends Component {
  static defaultProps: IProps = {
    children: (<span>no children</span>),
  };

  props: IProps;

  // {React.cloneElement(this.props.children, this.props)}
  render() {
    return (
      <div>
        <h1>
          <Link to="/">
            Reduxstagram
          </Link>
          {this.props.children}
        </h1>
      </div>
    );
  }
}

export default Main;
