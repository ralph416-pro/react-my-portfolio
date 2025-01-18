import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi I am <span className="purple">Iryna kniazheya </span>
            <br />
            I am a Full-Stack Web Developer and Data Scientist with over 15 years of experience in building robust, scalable web applications and leveraging AI for innovative solutions.
            <br />
            I excel in both front-end and back-end development, creating seamless, dynamic web experiences.
            <br />
            Passionate about integrating data science into practical applications,
            <br />
            I deliver AI-driven tools that enhance user engagement and optimize business workflows.
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
