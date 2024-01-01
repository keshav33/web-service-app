import React from "react";
import {
  Form,
  FormField,
  FormGroup,
  FormTextArea,
  Input,
  TextArea,
} from "semantic-ui-react";
import "../../style/contactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-us-container justifyCenter alignCenter">
      <div>
        <h1 className="contact-us-heading">Get in touch with us</h1>
        <Form className="contact-us-form">
          <FormGroup widths="equal">
            <FormField
              control={Input}
              label="First name"
              placeholder="First name"
            />
            <FormField
              control={Input}
              label="Last name"
              placeholder="Last name"
            />
          </FormGroup>
          <FormField
            control={TextArea}
            label="About"
            placeholder="Tell us more about you..."
          />
          <FormField
            control={Input}
            label="Email"
            placeholder="joe@schmoe.com"
          />
        </Form>
        <button className="contact-us-button">Contact us</button>
      </div>
      <div className="contact-us-gradient-splash" />
    </div>
  );
};

export default ContactUs;
