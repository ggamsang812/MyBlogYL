import "./AboutPage.css";
import fullstackimage from "../../../assets/aboutpage_assets/fullstack.svg";
import rockclimbingimage from "../../../assets/aboutpage_assets/rockc2.svg";
import ironmanimage from "../../../assets/aboutpage_assets/ironman.svg";
import mcdimage from "../../../assets/aboutpage_assets/mcd.svg";

function AboutPage() {
  return (
    <div className="aboutpage">
      <div className="text-container">
        <h1>Who I am :) </h1>

        <p>
          <span className="rainbow-text">Software Developer</span> who wants to
          make the world a better place. Make changes in people’s lives. Bring
          technologies to people who need them. Most importantly,{" "}
          <span className="rainbow-text">Fix Problems</span>!
        </p>
      </div>

      {/* <div className="fullstack-wrapper"></div> */}

      <div className="text-container">
        <h1>Things I Like</h1>
        <p>
          <span className="blue-gradient-text">Rock Climbing</span> <br />
          <span className="red-gradient-text">Iron Man</span> <br />
          <span className="red-gradient-text">McDonald's</span> <br />
        </p>
      </div>

      <div className="image-container">
        <div className="fullstack-wrapper">
          <img src={fullstackimage} width={250} alt="fullstackimage"></img>
        </div>
        <div className="rockclimb-wrapper">
          <img
            src={rockclimbingimage}
            width={204}
            alt="rockclimbingimage"
          ></img>
        </div>
        <div className="ironman-wrapper">
          <img src={ironmanimage} width={176} alt="ironmanimage"></img>
        </div>
        <div className="mcd-wrapper">
          <img src={mcdimage} width={153} alt="mcdimage"></img>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
