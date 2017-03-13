// @flow
import React, {
  Component,
} from "react";
import Photo from "./Photo";
import Comments from "./Comments";
import type { IPosts } from "../../state/reducers/posts";

type IProps = {
  posts: IPosts,
};

// eslint-disable-next-line react/prefer-stateless-function
class Single extends Component {
  props: IProps;

  render() {
    const { postId } = this.props.params;

    const i = this.props.posts.findIndex(post => post.code === postId);
    const post = this.props.posts[i];
    const postComments = this.props.comments[postId] || [];

    return (
      <div className="single-photo">
        <Photo index={i} post={post} {...this.props} />
        <Comments postComments={postComments} {...this.props} />
      </div>
    );
  }
}

export default Single;
