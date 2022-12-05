// * A single `Project` component that will be used multiple times in the Portfolio section

import { Container, Button, Card, Row } from "react-bootstrap";
import projectData from "./data/projectData.json";

function Project() {
  return (
    <Container>
      <Row xs={1} md={2} style={{ justifyContent: "center" }}>
        {projectData.map((project) => (
          <Card
            style={{
              width: "18rem",
              margin: 20,
              padding: 0,
              borderColor: "#F0966A",
            }}
          >
            <Card.Img
              variant="top"
              src={process.env.PUBLIC_URL + project.img}
            />
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>{project.text}</Card.Text>
              <center>
              <Button
                className="button"
                variant="outline-primary"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  borderColor: "#F0966A",
                  backgroundColor: "#F0966A",
                  color: "white",
                }}
              >
                view repo
              </Button>
              </center>
            </Card.Body>
          </Card>
        ))}        
      </Row>
    </Container>
  );
}

export default Project;
