import React from "react";
import ReactStars from "react-rating-stars-component";

function Comment(props) {
  return (
    <div>
      <h1>Comments</h1>
      <div>
        {props.comments.length === 0 ? (
          <h4>No comments yet.</h4>
        ) : (
          props.comments.map((comment) => (
            <h3>
              {comment.text} <ReactStars value={comment.vote} classNames="star"></ReactStars>
            </h3>
          ))
        )}
      </div>
      <br></br>
    </div>
  );
}

export default Comment;
