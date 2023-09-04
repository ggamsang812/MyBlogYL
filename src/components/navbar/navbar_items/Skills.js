import "./Skills.css"
import SkillsIcon from "../../../assets/skills.svg"

function Skills () {
    return (
        <div className="skills">
          <img
            className="image"
            alt="skills"
            src={SkillsIcon}
          />
        </div>
    )
}

export default Skills;
