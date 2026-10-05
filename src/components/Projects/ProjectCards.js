import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt={props.title}
        className="project-card-image"
      />

      <Card.Body>
        <Card.Title>{props.title}</Card.Title>

        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* Tech Stack */}
        {props.techStack && (
          <div className="project-tech-stack">
            <strong>Tech Stack:</strong>

            <div className="tech-badges">
              {props.techStack.map((tech, index) => (
                <span className="tech-badge" key={index}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* GitHub Client Button */}
        {props.clientLink && (
          <Button
            variant="primary"
            href={props.clientLink}
            target="_blank"
            rel="noreferrer"
            style={{
              position: "relative",
              zIndex: 100,
            }}
          >
            <BsGithub /> &nbsp; Client
          </Button>
        )}

        {/* GitHub Server Button */}
        {props.serverLink && (
          <Button
            variant="primary"
            href={props.serverLink}
            target="_blank"
            rel="noreferrer"
            style={{
              marginLeft: "10px",
              position: "relative",
              zIndex: 100,
            }}
          >
            <BsGithub /> &nbsp; Server
          </Button>
        )}

        {/* GitHub Button */}
        {props.ghLink && (
          <Button
            variant="primary"
            href={props.ghLink}
            target="_blank"
            rel="noreferrer"
            style={{
              marginLeft: props.clientLink || props.serverLink ? "10px" : "0",
              position: "relative",
              zIndex: 100,
            }}
          >
            <BsGithub /> &nbsp; GitHub
          </Button>
        )}

        {/* Demo Button */}
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            rel="noreferrer"
            style={{
              marginLeft: "10px",
              position: "relative",
              zIndex: 100,
            }}
          >
            <CgWebsite /> &nbsp; Demo
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
