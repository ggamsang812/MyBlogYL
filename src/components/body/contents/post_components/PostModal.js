import React, { useState } from "react";

import "./PostModal.css";

function PostModal({ post }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="postmodal">
      <div className="postmodal-preview" onClick={openModal}>
        <div className="postmodal-content">
          <h2>{post.title}</h2>
          {/* <p>{post.description}</p> */}
          <p>{post.date}</p>
          {/* <img src={post.image} alt="Post Image" /> */}
        </div>
        <div onClick={openModal} className="open-button">
          Read More
        </div>
      </div>

      {isOpen && (
        // TODO: Make this a separate component and pass in the post data
        // TODO: Complete the styling of the modal
        <div className="modal">
          <div className="modal-content">
            <h2>Mini Pop-up</h2>
            <p>This is the content of the mini pop-up.</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
      {isOpen && <div className="overlay" onClick={closeModal}></div>}
    </div>
  );
}

export default PostModal;
