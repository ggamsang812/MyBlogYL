import { Link } from "react-scroll";

import "./Skills.css";
import SkillsIcon from "../../../assets/skills.svg";

function Skills() {
  return (
    <Link to="skillsComponent" smooth={true} duration={500}>
      <div className="skills">
        <img className="image" alt="skills" src={SkillsIcon} />
      </div>
    </Link>
  );
}

export default Skills;
