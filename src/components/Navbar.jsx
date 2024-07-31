import React from "react";
import menu from "../assets/menu.png";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="dropdown">
        <button>
          <img src={menu} alt="menu" />
        </button>
        <div className="dropdown-content">
          <NavLink className="link" to="/">
            Willkommen
          </NavLink>
          <NavLink className="link" to="/references">
            Referenzen
          </NavLink>
          <NavLink className="link" to="/social">
            Social Media
          </NavLink>
          <NavLink className="link" to="/contact">
            Kontakt
          </NavLink>
          <NavLink className="link" to="/impress">
            Impressum
          </NavLink>
        </div>
      </div>
      <h1>3D Artist aus Leidenschaft</h1>
    </>
  );
}

export default Navbar;
