import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function ContactForm() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("You clicked submit.");
  }

  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Form style={{ width: "75%" }}>
        <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
          <Form.Label className="mb-0">full name</Form.Label>
          <Form.Control type="input" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="mb-0">email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-0" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="mb-0">send me a message!</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        {["radio"].map((type) => (
          <div key={`default-${type}`} className="mb-3 mt-0">
            <Form.Check
              type={type}
              id={`default-${type}`}
              label="email you a copy"
            />
          </div>
        ))}
        <Button
          variant="outline-primary"
          type="submit"
          style={{
            borderColor: "#F0966A",
            backgroundColor: "#F0966A",
            color: "white",
          }}
          onSubmit={handleSubmit}
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default ContactForm;
