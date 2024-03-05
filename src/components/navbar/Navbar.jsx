import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Auth } from "../../firebase/config";
function Navbar({ user, setUser }) {
  const removeUser = () => {
    Auth.signOut();
    setUser(null);
  };
  return (
    <nav>
      <div className="container">
        <div className="logo">
          <Link to="/">
            {" "}
            <img src="./public/imgs/me.jpg" alt="" />{" "}
          </Link>
        </div>
        <div className="registration">
          {user && <p className="text">Assalomu aleykum {user.displayName} </p>}
          {user ? (
            <button onClick={removeUser} className="btn">Chiqish →</button>
          ) : (
            <>
              <button className="btn">
                <Link to="/login" className="link">
                  Kirish
                </Link>
              </button>
              <button className="btn">
                <Link to="/signup" className="link">
                  Ro'yxatdan o'tish
                </Link>
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
