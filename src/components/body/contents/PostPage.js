import React, { useState, useRef } from "react";
import initialPosts from "../../../components/body/contents/post_components/PostData";
import "./PostPage.css";
import PostModal from "./post_components/PostModal";

function PostPage() {
  const [posts, setPosts] = useState(initialPosts);
  const postPageRef = useRef(null);
  const scrollIntervalRef = useRef(null);

  const scrollLeft = () => {
    const container = postPageRef.current;
    container.scrollTo({
      left: container.scrollLeft - 290, // Adjust the scroll amount as needed
      behavior: "smooth", // Add smooth scrolling animation
    });
  };

  const scrollRight = () => {
    const container = postPageRef.current;
    container.scrollTo({
      left: container.scrollLeft + 290, // Adjust the scroll amount as needed
      behavior: "smooth", // Add smooth scrolling animation
    });
  };

  const handleScrollButtonPress = (scrollFunction) => {
    scrollFunction(); // Initial scroll when the button is pressed

    // Set up an interval to repeatedly scroll while the button is held down
    scrollIntervalRef.current = setInterval(() => {
      scrollFunction();
    }, 200); // Adjust the interval speed as needed
  };

  const handleScrollButtonRelease = () => {
    // Clear the interval when the button is released
    clearInterval(scrollIntervalRef.current);
  };

  return (
    <div id="postComponentStart">
      <div className="postpage-container">
        <button
          className="scroll-button left"
          onMouseDown={() => handleScrollButtonPress(scrollLeft)}
          onMouseUp={handleScrollButtonRelease}
        >
          &lt;
        </button>
        <div className="postpage" ref={postPageRef}>
          <div className="postmodal-container">
            {posts.map((post, index) => (
              <PostModal key={index} post={post} />
            ))}
          </div>
        </div>
        <button
          className="scroll-button right"
          onMouseDown={() => handleScrollButtonPress(scrollRight)}
          onMouseUp={handleScrollButtonRelease}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default PostPage;
