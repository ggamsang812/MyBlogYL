import "./Landing.css";
import hiimage from "../../../assets/hi.svg";
import clickmeimage from "../../../assets/clickme.svg";
import stickimage from "../../../assets/stick.svg";

function Landing() {
  return (
    <div className="landing">
      <img src={hiimage} className="hi-image" alt="hiimage"></img>
      <img src={stickimage} className="stick-image" alt="stickimage"></img>
      <div className="clickme-button">
        <img src={clickmeimage} alt="clickmeimage"></img>
      </div>
    </div>
  );
}

export default Landing;
