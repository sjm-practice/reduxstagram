// @flow
import React, {
  Component,
} from "react";
import type { IPosts } from "../../config/state/reducers/posts";

type IProps = {
  posts: IPosts,
};

// eslint-disable-next-line react/prefer-stateless-function
class PhotoGrid extends Component {
  static defaultProps = {
    posts: [],
  };

  props: IProps;

  render() {
    return (
      <div className="photo-grid">
        <pre>
          {JSON.stringify(this.props.posts, null, " ")}
        </pre>
      </div>
    );
  }
}

export default PhotoGrid;
