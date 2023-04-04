import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navegation = () => {

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/home">
            Home
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link active" to="/login">
                  Iniciar sesion
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/registrar">
                  Registro
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to='/control-personal'>
                  Control de personal
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navegation;
