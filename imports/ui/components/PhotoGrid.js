// @flow
import React, {
  Component,
} from "react";
import Photo from "./Photo";

import type { IPosts } from "../../state/reducers/posts";

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
        {this.props.posts.map((post, i) =>
          <Photo
            key={post.id}
            index={i}
            post={post}
            {...this.props}
          />)
        }
      </div>
    );
  }
}

export default PhotoGrid;
