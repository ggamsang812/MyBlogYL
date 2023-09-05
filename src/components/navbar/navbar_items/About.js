import { Link } from "react-scroll";

import "./About.css";
import AboutIcon from "../../../assets/about.svg";

function About() {
  return (
    <>
      <Link to="aboutComponent" smooth={true} duration={500}>
        <div className="about">
          <img className="image" alt="about" src={AboutIcon} />
        </div>
      </Link>
    </>
  );
}

export default About;
