import React from "react";
import { Container, Row, Col, Card ,Button} from "react-bootstrap";




function Certifications() {
  return (
    <Container fluid className="certification-section py-5">
      <Container>
        <h1
          className="certification-heading text-center text-white mb-4"
          style={{ marginTop: "100px" }}
        >
          My <strong className="purple">Certifications</strong>
        </h1>
        <p className="text-center text-light mb-5">
          Below are some of the certifications I have earned recently.
        </p>

        <Row className="justify-content-center">
          
          {/* Machine Learning Certificate Card */}
          <Col md={6} lg={4} sm={12} className="mb-4">
            <Card className="h-100">
              <Card.Img
                variant="top"
                src="/certifications/Machine_Learning_Certificate.png"  // Make sure this matches your actual image filename
                alt="Machine Learning Certificate from DeepLearning.AI"
              />
              <Card.Body>
                <Card.Title className="purple">Supervised Machine Learning</Card.Title>
                <Card.Text>
                  <strong>DeepLearning.AI & Stanford University</strong>
                  <br />
                  Completed the non-credit course in Regression and Classification
                  <br />
                  <strong>Issued:</strong> April 7, 2025
                  <br />
                  <Button 
                    variant="outline-primary" 
                    size="sm"
                    href="https://www.coursera.org/account/accomplishments/verify/D5C418BFQ8P7" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Verify Certificate
                  </Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Second Certification Card */}
          <Col md={6} lg={4} sm={12} className="mb-4">
            <Card className="h-100">
              <Card.Img
                variant="top"
                src="/certifications/ICPC_2024.png"
                alt="ICPC 2024 Certificate"
              />
              <Card.Body>
                <Card.Title className="purple">ICPC 2024 Participation</Card.Title>
                <Card.Text>
                  Participated in The 2024 ICPC Asia Dhaka Regional Site Online Preliminary Contest
                  <br />
                  <strong>03 October - 09 November 2024</strong>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* 3rd Certification Card */}
          <Col md={6} lg={4} sm={12} className="mb-4">
            <Card className="h-100">
              <Card.Img
                variant="top"
                src="/certifications/ICPC_2023.png"
                alt="ICPC 2023 Certificate"
              />
              <Card.Body>
                <Card.Title className="purple">ICPC 2023 Participation</Card.Title>
                <Card.Text>
                Participated in The 2023 ICPC Asia Dhaka Regional Site Online Preliminary Contest
                <br />
                  <strong>13 October 2023</strong>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* 4th Certification Card */}
          <Col md={6} lg={4} sm={12} className="mb-4">
            <Card className="h-100">
              <Card.Img
                variant="top"
                src="/certifications/ICPC_2021.png"
                alt="ICPC 2023 Certificate"
              />
              <Card.Body>
                <Card.Title className="purple">ICPC 2021 Participation</Card.Title>
                <Card.Text>
                Participated in The 2021 ICPC Asia Dhaka Regional Site Online Preliminary Contest
                <br />
                  <strong>03 September 2022</strong>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Computer Networking Certificate Card */}
          <Col md={6} lg={4} sm={12} className="mb-4">
            <Card className="h-100">
              <Card.Img
                variant="top"
                src="/certifications/Computer_Networking_DIIT.png"
                alt="Computer Networking Certificate from DIIT"
              />
              <Card.Body>
                <Card.Title className="purple">Unlock Your Computer Networking Career With CCNA Basics</Card.Title>
                <Card.Text>
                  <strong>Daffodil Institute of IT (DIIT)</strong>
                  <br />
                  Completed non-credit course on CCNA Basics
                  <br />
                  <strong>Issued:</strong> October 21, 2024
                  <br />
                  <Button 
                    variant="outline-primary" 
                    size="sm"
                    href="https://rcdc.ac/certificate/verify/010724076024917" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Verify Certificate
                  </Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Embedded Systems & Robotics Certificate Card */}
          <Col md={6} lg={4} sm={12} className="mb-4">
            <Card className="h-100">
              <Card.Img
                variant="top"
                src="/certifications/Embedded_System_DIIT.png"
                alt="Embedded Systems & Robotics Certificate from DIIT"
              />
              <Card.Body>
                <Card.Title className="purple">Explore Robotics with Embedded Systems</Card.Title>
                <Card.Text>
                  <strong>Daffodil Institute of IT (DIIT)</strong>
                  <br />
                  Completed non-credit course on Embedded Systems & Robotics
                  <br />
                  <strong>Issued:</strong> October 21, 2024
                  <br />
                  <Button 
                    variant="outline-primary" 
                    size="sm"
                    href="https://rcdc.ac/certificate/verify/010724076034917" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Verify Certificate
                  </Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Web Development Certificate Card */}
          <Col md={6} lg={4} sm={12} className="mb-4">
            <Card className="h-100">
              <Card.Img
                variant="top"
                src="/certifications/Web_Development_DIIT.png"
                alt="Responsive and Interactive Web Development Certificate from DIIT"
              />
              <Card.Body>
                <Card.Title className="purple">Responsive & Interactive Web Development</Card.Title>
                <Card.Text>
                  <strong>Daffodil Institute of IT (DIIT)</strong>
                  <br />
                  Completed the non-credit course in web development from scratch
                  <br />
                  <strong>Issued:</strong> October 21, 2024
                  <br />
                  <Button 
                    variant="outline-primary" 
                    size="sm"
                    href="https://rcdc.ac/certificate/verify/010724076014917" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Verify Certificate
                  </Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Phiton Certification Card */}
          <Col md={6} lg={4} sm={12} className="mb-4">
            <Card className="h-100">
              <Card.Img
                variant="top"
                src="certifications/Phitron_programming_contest.png"
                alt="Phitron 2022 Certificate"
              />
              <Card.Body>
                <Card.Title className="purple">Phitron 2022</Card.Title>
                <Card.Text>
                  For Programming Contest 2022 organized by Phitron, an online programming competition held on August 12, 2022.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

           {/* Meta Certification Card */}
           <Col md={6} lg={4} sm={12} className="mb-4">
            <Card className="h-100">
              <Card.Img
                variant="top"
                src="certifications/meta_round_1.png"
                alt="Meta Hacker Cup 2023 Certificate"
              />
              <Card.Body>
                <Card.Title className="purple">META Hacker Cup 2023</Card.Title>
                <Card.Text>
                    The 2023 Meta Hacker Cup Site Online Preliminary Contest
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Certifications;