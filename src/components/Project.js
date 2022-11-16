// * A single `Project` component that will be used multiple times in the Portfolio section

// TODO: Center repo buttons, change button outline and click colors, add photos, add project descriptions

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Project() {
  return (
    <Container style={{ display: "flex", justifyContent: "center" }}>
      <Card style={{ width: "18rem", margin: 20 }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>social network api</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button
            variant="outline-primary"
            href="https://github.com/justkayla/18-social-network-api"
            target="_blank"
            rel="noopener noreferrer"
          >
            view repo
          </Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem", margin: 20 }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>GOSSIPPYY</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button
            variant="outline-primary"
            href="https://github.com/JoePShoulak/gossippyy"
            target="_blank"
            rel="noopener noreferrer"
          >
            view repo
          </Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem", margin: 20 }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>employee tracker</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button
            variant="outline-primary"            
            href="https://github.com/justkayla/12-employee-tracker"
            target="_blank"
            rel="noopener noreferrer"
          >
            view repo
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Project;
