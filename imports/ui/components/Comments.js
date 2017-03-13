import React, {
  Component,
} from "react";

class Comments extends Component {
  renderComment(comment, i) {
    return (
      <div className="comment" key={i}>
        <strong>{comment.user}</strong>
        {comment.text}
        <button className="remove-comment">&times;</button>
      </div>
    );
  }

  render() {
    return (
      <div className="comments">
        { this.props.postComments.map(this.renderComment)}
        <form className="comment-form" ref="commentForm">
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
}

export default Comments;
