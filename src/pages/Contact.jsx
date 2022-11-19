// Contact me page

import ContactForm from "../components/Form";
import Subheader from "../components/Subheader";

const Contact = ({ title }) => {
  return (
    <>
      <Subheader title={"Contact me"} />      
      <ContactForm />
    </>
  );
};

export default Contact;
