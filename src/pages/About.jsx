// About me page

import { Container, Row, Col, Accordion } from "react-bootstrap";
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
                  <Accordion.Header>{about.title}</Accordion.Header>
                  <Accordion.Body>{about.text}</Accordion.Body>
                </Accordion.Item>
              </Col>
            </Accordion>
          ))}
          ;
        </Row>
      </Container>
    </>
  );
}

export default About;
