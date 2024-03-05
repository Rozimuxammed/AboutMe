import React, { useState } from "react";
import "./SignUp.css";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { UseSignUp } from "../../hooks/useSignUp";
function SignUp({setUser}) {
  const { loader, error, signUp } = UseSignUp();
  const [icon, setIcon] = useState(true);
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    signUp({ name, email, password , setUser });
  };
  const changeIcon = () => {
    setIcon(!icon);
    setVisible(!visible);
  };
  return (
    <div className="signUp">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            placeholder="Ism kiriting..."
          />
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Email kiriting..."
          />
          <div className="password">
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type={visible ? "text" : "password"}
              placeholder="Parol kiriting..."
            />
            {icon ? (
              <FaEyeSlash onClick={() => changeIcon()} className="icon" />
            ) : (
              <IoEyeSharp onClick={() => changeIcon()} className="icon" />
            )}
          </div>
         {loader?  <button>Yuklanmoqda...</button>: <button>Ro'yxatdan o'tish</button>}
         {error && <p className="error">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default SignUp;
