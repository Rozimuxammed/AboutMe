import React from "react";
import "./MyHobby.css";
import Links from "../links/Links";
function MyHobby() {
  return (
    <div className="aboutHobby">
      <div className="container">
        <Links />
        <div className="myHobby">
          <p>
            Man oldinlari hich dasturlashga qiziqmasidim. Bir kuni sinfdoshim
            bilan Informatika darsida o'tirgandik o'rtog'im qanaqadir rasmlarni
            photoshop qilib o'tirganini ko'rib qoldim. Undan so'rasam Grafik
            dizaynerlik bo'yicha o'qiyotganini aytti. Qilayotgan ishini ko'rib
            mandayam qiziqish uyg'ondi va manam shu bahona o'rtog'im bilan
            <span>Codial IT</span> akademiyasiga kelib Frontend yo'nalishi
            bo'yicha ro'yxatdan o'tib kursga yozildim.{" "}
          </p>{" "}
          <br />
          <br />
          <p>
            Nega aynan Frontend yo'nalishi bo'yichaligini aytsam, qilayotgan
            ishimi natijasini ko'rib turishim mumkinakan. Backend, Android va
            Grafik Dizayn bo'yicha ochiq darslariga ham kirib ko'rdim lekin
            Frontendchali hech qaysi biri manda qiziqish uyg'otmadi!{" "}
          </p>
          <h1>
            <span>Codial</span> akademiyasi
          </h1>
          <div className="imgs">
            <img src="./public/imgs/codial.webp" alt="" />
            <img src="./public/imgs/codial2.webp" alt="" />
            <img src="./public/imgs/codialnetworking.webp" alt="" />
            <img src="./public/imgs/codialTeam.webp" alt="" />
          </div>
          <div className="maps">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d772749.0162023166!2d70.87100712856667!3d40.837828385365746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb83d394a3a5c9%3A0xaa21a6bf41cf03e!2sCodial%20ta&#39;lim%20markazi!5e0!3m2!1sru!2s!4v1709658171511!5m2!1sru!2s"
              width="100%"
              height="450"
              style={{border:"0"}}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <p>Bundan tashqari Basketbol, Futbol sporti bilan shug'illanishga ham qiziqaman. Odatda musiqa tinglashni yoqtiraman. </p>
        </div>
      </div>
    </div>
  );
}

export default MyHobby;
