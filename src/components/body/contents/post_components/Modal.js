import React, { useEffect, useRef } from "react";
import "./Modal.css";
import Prism from "prismjs";
import "prismjs/themes/prism.css"; // Import Prism.js CSS file

require("prismjs/components/prism-javascript");
require("prismjs/components/prism-python");
require("prismjs/components/prism-css");
require("prismjs/components/prism-jsx");
require("prismjs/components/prism-powershell");

function Modal({ post, closeModal }) {
  // Replace newline characters with <br /> elements
  const formattedDescription = post.description.replace(/\n/g, "<br />");
  const descriptionRef = useRef(null);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

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
          ref={descriptionRef}
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
