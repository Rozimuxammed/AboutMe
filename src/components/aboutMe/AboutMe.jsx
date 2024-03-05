import React from "react";
import "./AboutMe.css";
import Links from "../links/Links";

function AboutMe() {
  return (
    <div className="aboutMe">
      <div className="container">
        <Links />
        <div className="myName">
          <p className="paragraph">
            Salom mening ismim Ro'zimuhammad 2004 - yil Oktabr oyining 30 -
            sanasida Farg'ona viloyati Marg'ilon shahrida tug'ilganman yoshim 19 da.
          </p>
          <p className="paragraph">
            Men Farg'ona viloyati Marg'ilon shahar 29 - umumiy o'rta ta'lim
            maktabida o'qiganman.{" "}
          </p>
          <div className="mySchool">
            <div className="img_school"></div>
            <div className="img_mySchool"></div>
          </div>
          <p className="paragraph">
            Maktabni bitirgach Farg'ona Polixtika Institutiga talaba bo'lish
            baxtiga sazovor bo'ldim va hozirda 2 - bosqich talabasiman.
          </p>
          <div className="institut">
            <div className="myInstitut_first_img"></div>
            <div className="myInstitut_second_img"></div>
            <div className="myInstitut_threeth_img"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
