import RaceStandings from "../components/standings/standings";
import "./index.css";

function ExploreScreen() {
  return (
    <div style={{ marginBottom: '50px' }}>
      <h1 className="fw-bold" style={{ fontFamily: "Helvetica" }}><span className="text-danger">Explore</span> <span style={{ fontStyle: "italic" }}>Formula 1</span></h1>

      <ul className="nav nav-pills mb-2 mt-2">
        <li className="nav-item me-2">
          <a className="nav-link active bg-danger text-white fw-bold">Standings</a>
        </li>
        <li className="nav-item me-2">
          <a className="nav-link" style={{ backgroundColor: 'white', color: '#dc3545' }}>Races</a>
        </li>
        <li className="nav-item me-2">
          <a className="nav-link" style={{ backgroundColor: 'white', color: '#dc3545' }}>Drivers</a>
        </li>
        <li className="nav-item me-2">
          <a className="nav-link" style={{ backgroundColor: 'white', color: '#dc3545' }}>Teams</a>
        </li>
      </ul>
      <div className="position-relative mb-2">
        <img src="/images/monaco.jpeg" className="w-100" alt='Pretty background!' />
        <h1 className="position-absolute wd-nudge-up text-white">
          Season Standings
        </h1>
      </div>
      <RaceStandings />
    </div>
  );
}

export default ExploreScreen;
