import React, { useState } from "react";
import "./Login.css";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { UseLogin } from "../../hooks/useLogin";

function Login({ setUser }) {
  const [icon, seticon] = useState(true);
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const { loader, error, login } = UseLogin();
  const changeIcon = () => {
    seticon(!icon);
    setVisible(!visible);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password, setUser);
  };
  return (
    <div className="login">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Emailingizni kiriting..."
          />
          <div className="password">
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type={visible ? "text" : "password"}
              placeholder="Parolingizni kiriting..."
            />
            {icon ? (
              <FaEyeSlash onClick={() => changeIcon()} className="icon" />
            ) : (
              <IoEyeSharp onClick={() => changeIcon()} className="icon" />
            )}
          </div>
          {loader ? <button>Yuklanmoqda...</button> : <button>Kirish</button>}
          {error && <p className="Error">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default Login;
