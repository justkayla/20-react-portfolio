// * A single `Project` component that will be used multiple times in the Portfolio section

// TODO: Center repo buttons, change button outline and click colors, add photos, add project descriptions

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Project() {
  return (
    <Container style={{ display: "flex", justifyContent: "center", wrap: "wrap" }}>
      <Card class="row row-cols-sm-1" style={{ width: "18rem", margin: 20, borderColor: "#F0966A" }}>
        <Card.Img variant="top" src={require('')} style={{ width: '170px' }} />
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
            style={{ borderColor: "#F0966A", backgroundColor: "#F0966A", color: "white" }}
          >
            view repo
          </Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem", margin: 20, borderColor: "#F0966A" }}>
        <Card.Img variant="top" src={require("../assets/images/gossippyy.png")} />
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
            style={{ borderColor: "#F0966A", backgroundColor: "#F0966A", color: "white" }}
          >
            view repo
          </Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem", margin: 20, borderColor: "#F0966A" }}>
        <Card.Img variant="top" src={require('../assets/images/employee-tracker.png')} style={{ width: '175px' }}/>
        <Card.Body>
          <Card.Title style={{ marginTop: '0px'}}>employee tracker</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button
            variant="outline-primary"
            href="https://github.com/justkayla/12-employee-tracker"
            target="_blank"
            rel="noopener noreferrer"
            style={{ borderColor: "#F0966A", backgroundColor: "#F0966A", color: "white" }}
          >
            view repo
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Project;
