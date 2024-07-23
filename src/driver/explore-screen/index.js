import React, { useState } from 'react';
// import { Link, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Search from '../components/search/search';
import Standings from "../components/standings/standings";
import "./index.css";

function ExploreScreen() {
  // const navigate = useNavigate();
  // const { search } = useParams();
  const [activeTab, setActiveTab] = useState('Standings');

  return (
    <div style={{ marginBottom: '50px' }}>
      <h1 className="d-flex justify-content-center fw-bold" style={{ fontFamily: "Helvetica" }}>
        <span className="text-danger">Explore</span>
        <span style={{ fontStyle: "italic" }}> Formula 1</span>
      </h1>

      <ul className="nav nav-pills mb-2 mt-2 position-relative">
        <li className="nav-item me-2 text-danger">
          <Link
            to="#"
            className={`nav-link ${activeTab === 'Standings' ? 'active bg-danger text-white fw-bold' : ''}`}
            onClick={() => setActiveTab('Standings')}
          >
            Standings
          </Link>
        </li>
        <li className="nav-item me-2">
          <Link
            to="#"
            className={`nav-link ${activeTab === 'Races' ? 'active bg-danger text-white fw-bold' : ''}`}
            onClick={() => setActiveTab('Races')}
            style={{ pointerEvents: "none", opacity: "0.5" }}
          >
            Races
          </Link>
        </li>
        <li className="nav-item me-2">
          <Link
            to="#"
            className={`nav-link ${activeTab === 'Drivers' ? 'active bg-danger text-white fw-bold' : ''}`}
            onClick={() => setActiveTab('Drivers')}
          >
            Drivers
          </Link>
        </li>
        <li className="nav-item me-2">
          <Link
            to="#"
            className={`nav-link ${activeTab === 'Teams' ? 'active bg-danger text-white fw-bold' : ''}`}
            onClick={() => setActiveTab('Teams')}
            style={{ pointerEvents: "none", opacity: "0.5" }}
          >
            Teams
          </Link>
        </li>
      </ul>

      <div className="position-relative">
        <img src="/images/monaco.jpeg" className="w-100" alt='Pretty background!' />
        <h1 className="position-absolute top-50 start-50 translate-middle text-white fw-bold" style={{ zIndex: 1 }}>
          {/* Content inside the image */}
        </h1>
      </div>

      {/* {activeTab === 'Standings' && <RaceStandings searchValue={search} />} */}
      {activeTab === 'Standings' && <Standings />}
      {activeTab === 'Drivers' && <Search />}
      {/* {activeTab === 'Teams' && <Teams />} */}
      {/* {activeTab === 'Races' && <Races />} */}
    </div>
  );
}

export default ExploreScreen;
