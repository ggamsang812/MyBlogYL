import { Link } from "react-scroll";

import "./Landing.css";
import hiimage from "../../../assets/hi.svg";
import clickmeimage from "../../../assets/clickme3.svg";
import stickimage from "../../../assets/stick.svg";

function Landing() {
  return (
    <>
      <div className="placeholder-home" id="homeComponent"></div>
      <div className="landing">
        <img src={hiimage} className="hi-image" alt="hiimage"></img>
        <img src={stickimage} className="stick-image" alt="stickimage"></img>
        <Link to="aboutComponent" smooth={true} duration={500}>
          <div className="clickme-button">
            <img src={clickmeimage} width={270} alt="clickmeimage"></img>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Landing;
