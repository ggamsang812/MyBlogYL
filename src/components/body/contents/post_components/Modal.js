import React from "react";

function Modal({ post, closeModal }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{post.title}</h2>
        <p>{post.date}</p>
        <p>{post.description}</p>        
        {/* <img src={post.image} alt="Post Image" /> */}
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
}

export default Modal;