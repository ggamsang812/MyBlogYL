import "./ProjPage.css";
import initialProjs from "./proj_components/ProjData.js";

function ProjPage() {
  return (
    <>
      <div id="projComponent" className="proj-placeholder"></div>
      <div className="proj-container">
        {initialProjs.map((proj) => (
          <div key={proj.index} className="proj-card">
            {proj.link && (
              <a href={proj.link} target="_blank" rel="noreferrer">
                <img src={`${proj.filename}`} alt={proj.title} />
              </a>
            )}
            {!proj.link && <img src={proj.filename} alt={proj.title} />}
          </div>
        ))}
      </div>
    </>
  );
}

export default ProjPage;
