// Homepage

import Header from "../components/Header";
import { Container, Stack } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Header />
      <Container style={{ display: "flex", justifyContent: "center" }}>
        <Stack>
          <center>
            <p>Hi there 👋</p>
            <p style={{ marginBottom: "25px" }}>Welcome to my portfolio, I'm happy you're here!</p>
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

export default Home;
