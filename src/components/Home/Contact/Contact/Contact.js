import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import Location from "../Location/Location";
import ContactDetails from "../ContactDetails/ContactDetails";

const Contact = () => {
  return (
    <section
      style={{
        padding: "1rem 0",
        backgroundColor: "rgba(43, 43, 47, 1)",
        color: "rgba(255, 255, 255, 0.7)",
      }}
      id="contact"
    >
      <h2 className="text-center text-white mb-5">Contact Us</h2>

      <div id="contactBaseDiv" className="w-75 row mx-auto">
        <div className="col-md-6">
          <ContactForm></ContactForm>
        </div>
        <div
          style={{
            padding: "1rem",
          }}
          className="col-md-6"
        >
          <ContactDetails></ContactDetails>
          <Location></Location>
        </div>
      </div>
    </section>
  );
};

export default Contact;
