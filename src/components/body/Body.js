import "./Body.css";
import Landing from "./contents/Landing";
import AboutPage from "./contents/AboutPage";
import PostPage from "./contents/PostPage";
import ProjPage from "./contents/ProjPage";
import CalendarPage from "./contents/CalendarPage";

function Body() {
  return (
    <div className="body-container">
      <Landing></Landing>
      <AboutPage></AboutPage>
      <PostPage></PostPage>
      <ProjPage></ProjPage>
      <CalendarPage></CalendarPage>
    </div>
  );
}

export default Body;
