import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerThunk } from "./users-thunks";
import { useNavigate } from "react-router";
import ConstructorIcon from '../teams/constructor-icon';

const Register = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegister = async () => {
    try {
      await dispatch(registerThunk(user));
      navigate("/driver/profile");
    } catch (error) {
      console.error(error);
    }
  };

  const handlePrivilegeChange = (privilege) => {
    setUser({ ...user, role: privilege });
  };

  const handleTeamChange = (team) => {
    setUser({ ...user, team });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-10">
          <h1 className="d-flex justify-content-center text-danger fw-bold mb-4" style={{ fontFamily: "Helvetica" }}>
            Register
          </h1>
          <input
            placeholder="Username"
            className="form-control mb-3 border-danger"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
          <input
            placeholder="Password"
            type="password"
            className="form-control mb-3 border-danger"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <h3 className="d-flex justify-content-center text-danger mt-4" style={{ fontFamily: "Helvetica" }}>
            Privileges
          </h3>
          <div className="list-group list-group-horizontal d-flex justify-content-center">
            <button
              className={`list-group-item border-dark ${user.role === "Spectator" ? "active bg-danger fw-bold" : ""
                }`}
              onClick={() => handlePrivilegeChange("Spectator")}
            >
              Spectator
            </button>
            <button
              className={`list-group-item border-dark ${user.role === "Driver" ? "active bg-danger fw-bold" : ""
                }`}
              onClick={() => handlePrivilegeChange("Driver")}
            >
              Driver
            </button>
            <button
              className={`list-group-item border-dark ${user.role === "Admin" ? "active bg-danger fw-bold" : ""
                }`}
              onClick={() => handlePrivilegeChange("Admin")}
            >
              Admin
            </button>
          </div>


          <h3 className="d-flex justify-content-center text-danger mt-4" style={{ fontFamily: "Helvetica" }}>
            Select a Team
          </h3>
          <div className="d-flex justify-content-center list-group text-center mb-4">
            <button
              className={`list-group-item list-group-item-action border-dark ${user.team === "Mercedes AMG Motorsport" ? "active bg-danger fw-bold" : ""
                }`}
              onClick={() => handleTeamChange("Mercedes AMG Motorsport")}
            >
              <ConstructorIcon constructorName="Mercedes AMG Motorsport" /> Mercedes AMG Motorsport
            </button>
            <button
              className={`list-group-item list-group-item-action border-dark ${user.team === "Red Bull Racing" ? "active bg-danger fw-bold" : ""
                }`}
              onClick={() => handleTeamChange("Red Bull Racing")}
            >
              <ConstructorIcon constructorName="Red Bull Racing" /> Red Bull Racing
            </button>
            <button
              className={`list-group-item list-group-item-action border-dark ${user.team === "Aston Martin F1 Team" ? "active bg-danger fw-bold" : ""
                }`}
              onClick={() => handleTeamChange("Aston Martin F1 Team")}
            >
              <ConstructorIcon constructorName="Aston Martin F1 Team" /> Aston Martin F1 Team
            </button>
            <button
              className={`list-group-item list-group-item-action border-dark ${user.team === "McLaren" ? "active bg-danger fw-bold" : ""
                }`}
              onClick={() => handleTeamChange("McLaren")}
            >
              <ConstructorIcon constructorName="McLaren" /> McLaren
            </button>
            <button
              className={`list-group-item list-group-item-action border-dark ${user.team === "Ferrari" ? "active bg-danger fw-bold" : ""
                }`}
              onClick={() => handleTeamChange("Ferrari")}
            >
              <ConstructorIcon constructorName="Ferrari" /> Ferrari
            </button>
            <button
              className={`list-group-item list-group-item-action border-dark ${user.team === "Alpine F1 Team" ? "active bg-danger fw-bold" : ""
                }`}
              onClick={() => handleTeamChange("Alpine F1 Team")}
            >
              <ConstructorIcon constructorName="Alpine F1 Team" /> Alpine F1 Team
            </button>
            <button
              className={`list-group-item list-group-item-action border-dark ${user.team === "AlphaTauri" ? "active bg-danger fw-bold" : ""
                }`}
              onClick={() => handleTeamChange("AlphaTauri")}
            >
              <ConstructorIcon constructorName="AlphaTauri" /> AlphaTauri
            </button>
            <button
              className={`list-group-item list-group-item-action border-dark ${user.team === "Alfa Romeo Racing" ? "active bg-danger fw-bold" : ""
                }`}
              onClick={() => handleTeamChange("Alfa Romeo Racing")}
            >
              <ConstructorIcon constructorName="Alfa Romeo Racing" /> Alfa Romeo Racing
            </button>
            <button
              className={`list-group-item list-group-item-action border-dark ${user.team === "Williams" ? "active bg-danger fw-bold" : ""
                }`}
              onClick={() => handleTeamChange("Williams")}
            >
              <ConstructorIcon constructorName="Williams" /> Williams
            </button>
            <button
              className={`list-group-item list-group-item-action border-dark ${user.team === "Haas F1 Team" ? "active bg-danger fw-bold" : ""
                }`}
              onClick={() => handleTeamChange("Haas F1 Team")}
            >
              <ConstructorIcon constructorName="Haas F1 Team" /> Haas F1 Team
            </button>
          </div>

          <div className="d-flex justify-content-center">
            <button onClick={handleRegister} className="btn btn-success">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
