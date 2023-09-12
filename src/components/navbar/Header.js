import "./Header.css";
import Home from "./navbar_items/Home";
import About from "./navbar_items/About";
import Post from "./navbar_items/Post"
import Proj from "./navbar_items/Proj"


function Header() {
  return (
    <div className="box">
      <div className="rectangle">
        <div className="navbar-container">
          <Home></Home>
          <About></About>
          <Post></Post>
          <Proj></Proj>
        </div>
      </div>
    </div>
  );
}

export default Header;
