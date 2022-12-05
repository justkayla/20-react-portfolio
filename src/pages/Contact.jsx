// Contact me page

// import ContactForm from "../components/Form";
import { Container, Stack } from "react-bootstrap";
import Subheader from "../components/Subheader";

const Contact = ({ title }) => {
  return (
    <>
      <Subheader title={"Contact me"} />
      {/* <ContactForm /> */}
      <Container style={{ display: "flex", justifyContent: "center" }}>        
        <Stack>
          <center>
          <p style={{ marginTop: "20px" }}>
            <a mailto="kaylarjustice@gmail.com">
              <strong>Email:</strong> kaylarjustice@gmail.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong> 713-203-9870
          </p>
          <img
            src={require("../assets/images/profilepic1.jpg")}
            style={{ width: "350px", borderRadius: "10%", marginTop: "0px" }}
          ></img>          
          </center>
        </Stack>        
      </Container>
    </>
  );
};

export default Contact;
