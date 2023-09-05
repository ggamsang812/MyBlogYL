import { Link } from "react-scroll";

import "./Home.css";
import logo from "../../../assets/home.svg";

function Home() {
  return (
    <div className="home">
      <Link to="homeComponent" smooth={true} duration={500}>
        <img className="image" alt="home" src={logo} />
      </Link>
    </div>
  );
}

export default Home;
