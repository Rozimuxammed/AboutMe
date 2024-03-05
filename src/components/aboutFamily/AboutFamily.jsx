import React from "react";
import "./AboutFamily.css";
import Links from "../links/Links";
function AboutFamily() {
  return (
    <div className="aboutFamily">
      <div className="container">
        <Links />
        <div className="myFamily">
          <p>
            Mening oilam 5 kishidan iborat. Otam, Onam, Singlim, Ukam va Men.
          </p>
          <p>Otamning ismlari Zarifjon 1973-yil 17-avgustda tug'ilganlar. Otam hozirda tadbirkorlik bilan shug'ullanadilar. </p>
          <p>Onamning  ismlari Dildoraxon 1982-yil 24-iyunda tug'ilganlar. Onam uy bekasi va tikuvchilar.</p>
          <p>Singlimni  ismi Farangiz 2007-yil 19-aprelda tug'ilgan. Singlim men o'qigan maktabda 10-sinf o'quvchisi.</p>
          <p>Ukamni ismi esa Muhammadyusuf 2010-yil 29-dekabrda tug'ilgan. Ukam esa  men o'qigan maktabda 6-sinf o'quvchisi.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutFamily;
