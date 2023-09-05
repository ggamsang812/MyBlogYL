import { Link } from "react-scroll";

import "./Calendar.css";
import CalendarIcon from "../../../assets/calendar.svg";

function Calendar() {
  return (
    <Link to="calendarComponent" smooth={true} duration={500}>
      <div className="calendar">
        <img className="image" alt="calendar" src={CalendarIcon} />
      </div>
    </Link>
  );
}

export default Calendar;
