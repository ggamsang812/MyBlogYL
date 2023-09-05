import "./CalendarPage.css";
import GitHubCalendar from "react-github-calendar";

function CalendarPage() {
  return (
    <div className="calendarpage" id="calendarComponent">
      <h1>GitHub Contribution Calendar</h1>
      <GitHubCalendar
        username="ggamsang812"
        blockMargin={5}
        blockRadius={7}
        blockSize={14}
        fontSize={16}
        theme={{
          light: ["#f0f0f0", "#c4edde", "#7ac7c4", "#f73859", "#384259"],
          dark: ["#383838", "#4D455D", "#7DB9B6", "#F5E9CF", "#E96479"],
        }}
      />
    </div>
  );
}

export default CalendarPage;
