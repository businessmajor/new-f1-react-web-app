import React, { useState } from 'react';
import RaceStandings from "../components/standings/standings";
import Teams from '../components/teams/Teams';
import "./index.css";

function ExploreScreen() {
  const [activeTab, setActiveTab] = useState('Standings');

  return (
    <div style={{ marginBottom: '50px' }}>
      <h1 className="fw-bold" style={{ fontFamily: "Helvetica" }}>
        <span className="text-danger">Explore</span>
        <span style={{ fontStyle: "italic" }}> Formula 1</span>
      </h1>

      <ul className="nav nav-pills mb-2 mt-2">
        <li className="nav-item me-2 text-danger">
          <a
            className={`nav-link ${activeTab === 'Standings' ? 'active bg-danger text-white fw-bold' : ''}`}
            onClick={() => setActiveTab('Standings')}
            
          >
            Standings
          </a>
        </li>
        <li className="nav-item me-2 inactive">
          <a
            className={`nav-link ${activeTab === 'Races' ? 'active bg-danger text-white fw-bold' : ''}`}
            onClick={() => setActiveTab('Races')}
            style={{ pointerEvents: "none", opacity: "0.5" }}
          >
            Races
          </a>
        </li>
        <li className="nav-item me-2">
          <a
            className={`nav-link ${activeTab === 'Drivers' ? 'active bg-danger text-white fw-bold' : ''}`}
            onClick={() => setActiveTab('Drivers')}
            style={{ pointerEvents: "none", opacity: "0.5" }}
          >
            Drivers
          </a>
        </li>
        <li className="nav-item me-2">
          <a
            className={`nav-link ${activeTab === 'Teams' ? 'active bg-danger text-white fw-bold' : ''}`}
            onClick={() => setActiveTab('Teams')}
          >
            Teams
          </a>
        </li>
      </ul>
      <div className="position-relative mb-2">
        <img src="/images/monaco.jpeg" className="w-100" alt='Pretty background!' />
        <h1 className="position-absolute wd-nudge-up text-white">
          F1 2023 Season
        </h1>
      </div>
      {activeTab === 'Standings' && <RaceStandings />}
      {/* {activeTab === 'Races' && <RaceList />} */}
      {activeTab === 'Teams' && <Teams />}
    </div>
  );
}

export default ExploreScreen;
