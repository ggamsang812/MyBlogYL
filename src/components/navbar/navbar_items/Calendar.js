import "./Calendar.css"
import CalendarIcon from "../../../assets/calendar.svg"

function Calendar () {
    return (
        <div className="calendar">
          <img
            className="image"
            alt="calendar"
            src={CalendarIcon}
          />
        </div>
    )
}

export default Calendar;