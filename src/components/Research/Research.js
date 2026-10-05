import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ResearchCard from "./ResearchCard";

function Research() {
  const researchPapers = [
    {
      title: "End-to-End CNNs for Radiographic Bone Injury Diagnosis",

      conference:
        "2026 IEEE 2nd International Conference on Quantum Photonics, Artificial Intelligence and Networking (QPAIN 2026)",

      paperId: "311",

      date: "April 16–18, 2026",

      venue:
        "IT Business Incubator, Chittagong University of Engineering and Technology (CUET), Chattogram, Bangladesh",

      description:
        "A deep learning-based study for automated radiographic bone injury diagnosis using CNN architectures and transfer learning.",

      image: "/research/Qpain-certificate-2026.png",

      link: "https://doi.org/10.1109/QPAIN69676.2026.11545806",
    },

    {
      title:
        "Precision-Vision: A Deep Learning Approach to Ocular Disease Detection and Classification",

      conference:
        "2025 IEEE 4th International Conference on Biomedical Engineering, Computer and Information Technology for Health (BECITHCON)",

      paperId: "262",
      date: "November 29–30, 2025",

      venue: "Eastern University, Dhaka, Bangladesh",

      description:
        "A deep learning-based approach for ocular disease detection and classification using CNN and transfer learning architectures.",

      image: "/research/IEEE-BECITHCON-2025.jpg",

      link: "https://ieeexplore.ieee.org/document/11504153",
    },
  ];

  return (
    <Container fluid className="research-section py-6">
      <Container>
        <h1 className="project-heading">
          <strong className="purple">RESEARCH & PUBLICATIONS</strong>
        </h1>

        <p className="text-center research-intro text-white">
          Research publications in Deep Learning, Computer Vision, and Medical
          Image Analysis.
        </p>

        <Row className="justify-content-center">
          {researchPapers.map((paper, index) => (
            <Col md={6} lg={5} sm={12} className="mb-4" key={index}>
              <ResearchCard {...paper} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Research;
