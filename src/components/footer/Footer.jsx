import React from "react";
import { IoCodeSlashOutline } from "react-icons/io5";
import "./Footer.css";
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="logo">
          <IoCodeSlashOutline className="footer_icon" />
          <p>Frontend Junior Developer</p>
        </div>
        <div className="contact">
            <ul>
                <li><b>Email:</b> <a target="blank" href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">rozimuhammadrozimurodov@gmail.com</a></li>
                <li><b>Phone:</b> +998 91 123-86-41</li>
            </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
