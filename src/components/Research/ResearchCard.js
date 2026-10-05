import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ResearchCard({
  title,
  conference,
  paperId,
  date,
  venue,
  description,
  image,
  link,
}) {
  return (
    <Card className="h-100 research-card">
      {image && (
        <Card.Img
          variant="top"
          src={image}
          alt={`${title} research paper`}
        />
      )}

      <Card.Body className="d-flex flex-column">
        <Card.Title className="purple">
          {title}
        </Card.Title>

        <Card.Text>
          <strong>{conference}</strong>
          <br />

          {paperId && (
            <>
              <strong>Paper ID:</strong> {paperId}
              <br />
            </>
          )}

          <strong>Presented:</strong> {date}
          <br />

          <strong>Venue:</strong> {venue}
          <br />
          <br />

          {description}
        </Card.Text>

        {link && (
          <div className="mt-auto">
            <Button
              variant="outline-primary"
              size="sm"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View IEEE Paper
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default ResearchCard;