// About me page

import { Container, Row, Col, Accordion, Button } from "react-bootstrap";
import KRJResume from "../assets/Justice_Kayla-Resume.pdf";
import Subheader from "../components/Subheader";
import aboutData from "../components/data/aboutData.json";

function About({ title }) {
  return (
    <>
      <Subheader title={"About me"} />
      <Container>        
        <Row style={{ display: "flex", justifyContent: "center" }}>
          {aboutData.map((about) => (
            <Accordion>
              <Col s={12}>
                <Accordion.Item eventKey="0">
                  <Accordion.Header style={{ color: "F0966A" }}>
                    {about.title}
                  </Accordion.Header>
                  <Accordion.Body>{about.text}</Accordion.Body>
                </Accordion.Item>
              </Col>
            </Accordion>
          ))}
        </Row>
        <center>
        <Button
          className="button"
          variant="outline-primary"
          style={{
            borderColor: "#F0966A",
            backgroundColor: "#F0966A",
            color: "white",
            margin: "30px"
          }}
          download
          href={KRJResume}
        >
          Download my resume!
        </Button>
        </center>
      </Container>
    </>
  );
}

export default About;
