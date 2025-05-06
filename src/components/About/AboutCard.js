import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abdellah Rahmouni </span>
            from <span className="purple"> Marrakech, Morocco.</span>
            <br />
            I am currently a 4th-year engineering student specializing in Embedded Electonic Systems and Systems Control at ENSA Marrakech.
            <br />
            I am passionate about building smart, efficient systems that bridge the gap between hardware and software.
            <br />
            <br />
            Apart from engineering, here are some things I love to do :
            </p>
          <ul>
            <li className="about-activity">
               📚 Reading
            </li>
            <li className="about-activity">
               ⛰️ Mountain Hiking
            </li>
            <li className="about-activity">
               🥊 Practicing Martial Arts (Muay Thai)
            </li>
          </ul>

          {/* <p style={{ color: "rgb(126, 142, 230)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Rh Abdellah</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
