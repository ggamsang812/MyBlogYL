import "./Body.css";
import Landing from "./contents/Landing";
import AboutPage from "./contents/AboutPage";
import ExpPage from "./contents/ExpPage";
import SkillsPage from "./contents/SkillsPage";
import CalendarPage from "./contents/CalendarPage";

function Body() {
  return (
    <div className="body-container">
      <Landing></Landing>
      <AboutPage></AboutPage>
      <ExpPage></ExpPage>
      <SkillsPage></SkillsPage>
      <CalendarPage></CalendarPage>
    </div>
  );
}

export default Body;
