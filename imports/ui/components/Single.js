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
class Single extends Component {
  props: IProps;

  render() {
    const i = this.props.posts.findIndex(post => post.code === this.props.params.postId);
    const post = this.props.posts[i];

    return (
      <div className="single-photo">
        <Photo index={i} post={post} {...this.props} />
      </div>
    );
  }
}

export default Single;
