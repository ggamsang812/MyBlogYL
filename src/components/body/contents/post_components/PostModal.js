import React, { useState } from "react";

import Modal from "./Modal";
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

      {isOpen && <Modal post={post} closeModal={closeModal} />}
      {isOpen && <div className="overlay" onClick={closeModal}></div>}
    </div>
  );
}

export default PostModal;
