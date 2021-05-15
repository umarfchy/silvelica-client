import React from "react";
import { Form, Button } from "react-bootstrap";

const ContactForm = () => {
  return (
    <Form>
      <Form.Group controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          style={{
            borderRadius: "0",
          }}
          name="name"
          type="text"
          placeholder="Enter name"
        />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          style={{
            borderRadius: "0",
          }}
          name="email"
          type="email"
          placeholder="Enter email"
        />
      </Form.Group>

      <Form.Group controlId="formBasicSubject">
        <Form.Label>Subject</Form.Label>
        <Form.Control
          style={{
            borderRadius: "0",
          }}
          name="subject"
          type="text"
          placeholder="Enter Subject"
        />
      </Form.Group>

      <Form.Group controlId="formBasicDetails">
        <Form.Label>Details</Form.Label>
        <Form.Control
          style={{
            borderRadius: "0",
          }}
          name="message"
          as="textarea"
          rows={3}
        />
      </Form.Group>
      <Button
        style={{
          borderRadius: "0",
          margin: "0 auto",
          width: "100%",
        }}
        variant="info"
        type="submit"
      >
        Submit
      </Button>
    </Form>
  );
};

export default ContactForm;
