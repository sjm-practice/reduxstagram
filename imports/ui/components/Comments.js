import React, {
  Component,
} from "react";

class Comments extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const { postId } = this.props.params;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    this.props.addComment(postId, author, comment);
    this.refs.commentForm.reset();
  }

  renderComment(comment, i) {
    return (
      <div className="comment" key={i}>
        <strong>{comment.user}</strong>
        {comment.text}
        <button
          className="remove-comment"
          onClick={() => this.props.removeComment(this.props.params.postId, i)}
        >
          &times;
        </button>
      </div>
    );
  }

  render() {
    return (
      <div className="comments">
        { this.props.postComments.map((comment, i) => this.renderComment(comment, i))}
        <form
          className="comment-form"
          ref="commentForm"
          onSubmit={e => this.handleSubmit(e)}
        >
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
}

export default Comments;
