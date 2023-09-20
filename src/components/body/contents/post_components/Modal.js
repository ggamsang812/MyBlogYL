import React from "react";
import "./Modal.css";

function Modal({ post, closeModal }) {
  // Replace newline characters with <br /> elements
  const formattedDescription = post.description.replace(/\n/g, "<br />");

  // Use dangerouslySetInnerHTML to render HTML with line breaks
  return (
    <div className="modal">
      <button className="modal-close-button" onClick={closeModal}>
        X
      </button>
      <div className="modal-content">
        <h2 className="modal-title">{post.title}</h2>
        <p>{post.date}</p>
        <p
          className="modal-description"
          dangerouslySetInnerHTML={{ __html: formattedDescription }}
        ></p>
        {post.image && (
          <img className="modal-image" src={post.image} alt="Post" />
        )}
      </div>
    </div>
  );
}

export default Modal;
