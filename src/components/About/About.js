import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";



function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
              position: "relative", // Added to control the z-index context
              zIndex: 1, // Ensure it's above other content
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{
              paddingTop: "120px",
              paddingBottom: "50px",
              zIndex: 1, // Ensure it's above other content
            }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <h1 className="project-heading">
          Professional <strong className="purple">Skillset</strong>
        </h1>
        <Techstack />

        

        {/* <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack /> */}

        {/* Online Judge Handles Section */}
        <h1 className="project-heading">
          <strong className="purple">Online Judge</strong> Handles
        </h1>
        <Row className="justify-content-center mt-5">
          <Col
            md={12}
            className="d-flex flex-column align-items-center"
            style={{ position: "relative", zIndex: 2 }} // Ensuring the buttons are on top
          >
            {/* Codeforces Handle */}
            <a
              href="https://codeforces.com/profile/anwar9437"
              target="_blank"
              rel="noopener noreferrer"
              style={{ zIndex: 2 }} // Ensuring anchor is clickable
            >
              <Button
                variant="outline-primary "
                className="mb-3"
                style={{ zIndex: 2 }}
              >
                Codeforces: anwar9437
              </Button>
            </a>

            {/* ICPC Handle */}
            <a
              href="https://icpc.global/ICPCID/PZG7862IDRGJ"
              target="_blank"
              rel="noopener noreferrer"
              style={{ zIndex: 2 }} // Ensuring anchor is clickable
            >
              <Button
                variant="outline-info"
                className="mb-3"
                style={{ zIndex: 2 }}
              >
                ICPC ID: PZG7862IDRGJ
              </Button>
            </a>

            {/* HackerRank Handle */}
            <a
              href="https://www.hackerrank.com/profile/anwar200110"
              target="_blank"
              rel="noopener noreferrer"
              style={{ zIndex: 2 }} // Ensuring anchor is clickable
            >
              <Button
                variant="outline-success"
                className="mb-3"
                style={{ zIndex: 2 }}
              >
                HackerRank: anwar200110
              </Button>
            </a>
          </Col>
        </Row>

        <h1 className="project-heading mt-5">
          Competitive Programming{" "}
          <strong className="purple">Achievements</strong>
        </h1>
        <Row className="justify-content-center mt-5">
          <Col md={12}>
            <p>
              {" "}
              <span className="purple">ICPC</span> 2021, 2022, and 2023
              participant
            </p>
            <p>
              Solved over 180+ problems on Codeforces and{" "}
              <span className="purple">rating max 802</span>{" "}
            </p>
            <p>
              {" "}
              <span className="purple">Bronze </span> level badge in Python on
              HackerRank
            </p>
          </Col>
        </Row>

        <Github />
      </Container>
    </Container>
  );
}

export default About;
