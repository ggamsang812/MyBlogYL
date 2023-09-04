import "./About.css"
import AboutIcon from "../../../assets/about.svg"

function About () {
    return (
        <div className="about">
          <img
            className="image"
            alt="about"
            src={AboutIcon}
          />
        </div>
    )
}

export default About;