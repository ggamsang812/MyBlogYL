import { Link } from "react-scroll";

import "./Post.css";
import PostIcon from "../../../assets/post_image.svg"

function Post() {
  return (
    <Link to="postComponent" smooth={true} duration={500}>
      <div className="post">
        <img className="image" alt="post" height={60} src={PostIcon} />
      </div>
    </Link>
  );
}

export default Post;
