import React, { useState } from "react";
import initialPosts from "../../../components/body/contents/post_components/PostData"; // Import the initialPosts array
import "./PostPage.css";
import PostModal from "./post_components/PostModal";

function PostPage() {
  const [posts, setPosts] = useState(initialPosts);

  return (
    <div id="postComponent">
      <div className="postpage">
        <div className="postmodal-container">
          {posts.map((post, index) => (
            <PostModal key={index} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PostPage;
