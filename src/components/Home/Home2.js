import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profile.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            <p className="home-about-body">
              I am a passionate <b className="purple">Software Developer</b>{" "}
              with a strong interest in building modern, scalable, and
              user-friendly web applications.
              <br />
              <br />I work with programming languages like{" "}
              <i>
                <b className="purple">C, C++, JavaScript, and Python.</b>
              </i>
              <br />
              <br />
              My primary area of interest is{" "}
              <i>
                <b className="purple">Full-Stack Web Development</b>
              </i>
              , where I build applications using{" "}
              <i>
                <b className="purple">
                  React.js, Next.js, Node.js, Express.js, and MongoDB.
                </b>
              </i>
              <br />
              <br />
              Alongside software development, I am also interested in{" "}
              <i>
                <b className="purple">
                  Artificial Intelligence, Machine Learning, Deep Learning, and
                  Computer Vision.
                </b>
              </i>
              <br />
              <br />I have worked on{" "}
              <b className="purple">
                medical image analysis and classification
              </b>{" "}
              using{" "}
              <i>
                <b className="purple">
                  CNNs, Transfer Learning, TensorFlow, Keras, and Vision
                  Transformers.
                </b>
              </i>
              <br />
              <br />I also enjoy{" "}
              <b className="purple">
                research and experimenting with AI models
              </b>{" "}
              to solve real-world problems, particularly in the field of{" "}
              <b className="purple">medical imaging.</b>
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple">EDUCATION 🎓</span>
            </h1>

            <div className="home-about-body">
              <h3>
                <b>
                  <ul>
                    <li>
                      <span>Daffodil Institute of IT</span>
                    </li>
                  </ul>
                </b>
              </h3>

              <h4>
                Bachelor of Science (B.Sc.) in{" "}
                <span className="purple">Computer Science</span>
              </h4>

              <p>
                Completed: <span className="purple">December 2025</span>
                <br />
                Result Published: <span className="purple">February 2026</span>
                <br />
                CGPA: <span className="purple">3.35 / 4.00</span>
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> LEADERSHIP </span> EXPERIENCE
            </h1>
            <p className="home-about-body">
              <h3>
                <b>
                  <ul>
                    <li>
                      <span className="purple">Vice President</span>
                    </li>
                  </ul>
                </b>
              </h3>
              <h4> Daffodil Institute of IT Programming Club - DPC</h4>
              <p>August 2023 - June 2024 Kalabagan, Dhaka-1205</p>
            </p>
            <p className="home-about-body">
              <h3>
                <b>
                  <ul>
                    <li>
                      <span className="purple">Cadet Corporal</span>
                    </li>
                  </ul>
                </b>
              </h3>
              <h4>Bangladesh National Cadet Corps (BNCC)</h4>
              <p>January 2012 - December 2015</p>
            </p>
          </Col>
        </Row>
        {/* Add the Projects component here */}
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/anwar-opu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/anwar9437"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mdanwarhossainopu/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://scholar.google.com/citations?user=sYAjQFYAAAAJ"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="Google Scholar"
                >
                  <SiGooglescholar />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
