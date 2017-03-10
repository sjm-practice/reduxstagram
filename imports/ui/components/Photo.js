// @flow
import React, {
  Component,
} from "react";
import { Link } from "react-router";
import CSSTransitionGroup from "react-addons-css-transition-group";
import type { IPost } from "../../state/reducers/posts";
import type { IPostComments } from "../../state/reducers/comments";

type IProps = {
  index: number,
  post: IPost,
  comments: IPostComments,
  increment(index: number): void,
};

// eslint-disable-next-line react/prefer-stateless-function
class Photo extends Component {
  props: IProps;

  render() {
    // eslint-disable-next-line react/prop-types
    const { post, index, comments, increment } = this.props;

    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`/view/${post.code}`}>
            <img
              className="grid-photo"
              src={post.display_src}
              alt={post.caption}
            />
          </Link>

          <CSSTransitionGroup
            transitionName="like"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            <span className="likes-heart" key={post.likes}>{post.likes}</span>
          </CSSTransitionGroup>

          <figcaption>
            <p>{post.caption}</p>
            <div className="control-buttons">
              <button
                className="likes"
                onClick={() => increment(index)}
              >
                &hearts; {post.likes}
              </button>
            </div>
            <Link to={`/view/${post.code}`} className="button">
              <span className="comment-count">
                <span className="speech-bubble" />
                {comments[post.code] ? comments[post.code].length : 0}
              </span>
            </Link>
          </figcaption>
        </div>
      </figure>
    );
  }
}

export default Photo;
