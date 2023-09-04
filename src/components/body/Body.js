import "./Body.css";
import Landing from "./contents/Landing";
import AboutPage from "./contents/AboutPage";
import CalendarPage from "./contents/CalendarPage";

function Body() {
  return (
    <div className="body-container">
      <Landing></Landing>
      <AboutPage></AboutPage>
      <CalendarPage></CalendarPage>
    </div>
  );
}

export default Body;
