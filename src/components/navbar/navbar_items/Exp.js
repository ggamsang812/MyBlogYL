import { Link } from "react-scroll";

import "./Exp.css";
import ExpIcon from "../../../assets/exp.svg";

function Exp() {
  return (
    <Link to="expComponent" smooth={true} duration={500}>
      <div className="exp">
        <img className="image" alt="exp" src={ExpIcon} />
      </div>
    </Link>
  );
}

export default Exp;
