import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Md. Anwar Hossain</span>{" "}
            from <span className="purple">Dhaka, Bangladesh.</span>
            <br />
            <br />I have completed my{" "}
            <span className="purple">B.Sc. in Computer Science</span> from{" "}
            <span className="purple">Daffodil Institute of IT</span>, with a
            CGPA of <span className="purple">3.35 / 4.00</span>.
            <br />
            <br />I am passionate about{" "}
            <span className="purple">
              Software Development and Full-Stack Web Development
            </span>
            , with a strong interest in{" "}
            <span className="purple">
              Artificial Intelligence, Machine Learning, Deep Learning, and
              Computer Vision.
            </span>
            <br />
            <br />I am also a{" "}
            <span className="purple">
              single-author IEEE researcher
            </span> with{" "}
            <span className="purple">two published IEEE conference papers</span>{" "}
            focused on{" "}
            <span className="purple">
              Deep Learning and Medical Image Analysis.
            </span>
            <br />
            <br />
            Apart from coding and research, some activities that I enjoy:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Technologies
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
