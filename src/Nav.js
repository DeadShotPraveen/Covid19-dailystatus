import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link style={{ color: "white", textDecoration: "none" }} to="/">
        <span role="img" style={{ fontSize: "30px" }} className = "globe" aria-label = "globe">🌏</span>
      </Link>
      <ul className="nav-links">
        
        <Link
          style={{
            color: "white",
            textDecoration: "none",
            marginTop: "10px",
            marginRight: "40px",
          }}
          to="/graph"
        >
          <li>Graph</li>
        </Link>
        
      </ul>
    </nav>
  );
}

export default Nav;
