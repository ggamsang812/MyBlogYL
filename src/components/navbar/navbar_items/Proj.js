import { Link } from "react-scroll";

import "./Proj.css";
import  ProjIcon from "../../../assets/proj_image.svg"

function Proj() {
  return (
    <Link to="projComponent" smooth={true} duration={500}>
      <div className="proj">
        <img className="image" alt="proj" src={ProjIcon} />
      </div>
    </Link>
  );
}

export default Proj;
