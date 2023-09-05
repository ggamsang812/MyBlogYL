import "./Header.css";
import Home from "./navbar_items/Home";
import About from "./navbar_items/About";
import Calendar from "./navbar_items/Calendar";
import Exp from "./navbar_items/Exp";
import Skills from "./navbar_items/Skills";


function Header() {
  return (
    <div className="box">
      <div className="rectangle">
        <div className="navbar-container">
          <Home></Home>
          <About></About>
          <Exp></Exp>
          <Skills></Skills>
          <Calendar></Calendar>
        </div>
      </div>
    </div>
  );
}

export default Header;
