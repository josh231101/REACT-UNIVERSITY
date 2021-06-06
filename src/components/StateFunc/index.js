import React from "react";

class VideoSection extends React.Component {
  state = {
    video: {
      nombre: "Muppets",
      likes: 0
    },
    comments: [
      {
        id: 123412,
        text: "Great video!!!"
      }
    ],
    commentInput: ""
  };

  addLikes = () => {
    this.setState((state, props) => ({
      ...state,
      video: { ...state.video, likes: state.video.likes + 1 }
    }));
  };

  submitComment = (e) => {
    e.preventDefault();
    if (!this.state.commentInput) return null;
    this.setState((state, props) => ({
      ...state,
      comments: [
        ...state.comments,
        { id: Math.random(), text: state.commentInput }
      ],
      commentInput: ""
    }));
  };

  handleChange = (e) =>
    this.setState((state) => ({ ...state, commentInput: e.target.value }));

  render() {
    const { comments, video, commentInput } = this.state;
    return (
      <div>
        <iframe
          title="Yeah"
          width="420"
          height="315"
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
        ></iframe>
        <h3>{video.nombre}</h3>
        <button onClick={this.addLikes}>Likes ({video.likes})</button>
        <div style={{ padding: "48px" }}>
          <h2>COMMENTS SECTION</h2>
          {comments.length > 0 &&
            comments.map((comment, key) => (
              <div key={key}>Comment :{comment.text}</div>
            ))}
          <form onSubmit={this.submitComment}>
            <input
              type="text"
              onSubmit={this.submitComment}
              value={commentInput}
              onChange={this.handleChange}
            />
            <button action="submit">Add</button>
          </form>
        </div>
      </div>
    );
  }
}

export default VideoSection;
