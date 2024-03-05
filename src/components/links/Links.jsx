import React from "react";
import { Link } from "react-router-dom";
import "./Links.css";
function Links() {
  return (
    <div className="links">
      <div className="container">
        <ul>
          <li>
            <Link className="link" to="/">Men haqimda</Link>
          </li>
          <li>
            <Link className="link" to="/aboutFamily">Oilam haqida</Link>
          </li>
          <li>
            <Link className="link" to="/myHobby">Qiziqishlarim</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Links;
