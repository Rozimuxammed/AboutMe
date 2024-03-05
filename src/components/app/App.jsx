import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import "./App.css";
import Login from "../login/Login";
import SignUp from "../signUp/SignUp";
import { useEffect, useState } from "react";
import { Auth } from "../../firebase/config";
import AboutMe from "../aboutMe/AboutMe";
import AboutFamily from "../aboutFamily/AboutFamily";
import MyHobby from "../myHobby/MyHobby";
import Footer from "../footer/Footer";

function App() {
  const [user, setUser] = useState(null);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    Auth.onAuthStateChanged((person) => {
      setUser(person);
      setRefresh(true);
    });
  }, []);
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar user={user} setUser={setUser} />
        {refresh && (
          <Routes>
            {!user && <Route path="/" element={<Navigate to={"/signup"} />} />}
            {user && <Route path="/" element={<AboutMe />} />}
            {!user && (
              <Route path="/login" element={<Login setUser={setUser} />} />
            )}
            {user && <Route path="/login" element={<Navigate to={"/"} />} />}
            {user && <Route path="/signup" element={<Navigate to={"/"} />} />}
            {!user && (
              <Route path="/signup" element={<SignUp setUser={setUser} />} />
            )}
            {user && <Route path="/" element={<AboutMe />} />}
            {!user && (
              <Route path="/aboutMe" element={<Navigate to="/signup" />} />
            )}
            {user && <Route path="/aboutFamily" element={<AboutFamily />} />}
            {!user && (
              <Route
                path="/aboutFamily"
                element={<Navigate to={"/signup"} />}
              />
            )}
            {user && <Route path="/myHobby" element={<MyHobby />} />}
            {!user && (
              <Route path="/myHobby" element={<Navigate to="/signup" />} />
            )}
          </Routes>
        )}
        {user && <Footer />}
      </BrowserRouter>
    </div>
  );
}

export default App;
