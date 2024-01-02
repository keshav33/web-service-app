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
              icon="user"
              iconPosition="left"
              control={Input}
              placeholder="First name"
            />
            <FormField
              icon="user"
              iconPosition="left"
              control={Input}
              placeholder="Last name"
            />
          </FormGroup>
          <FormField
            icon="mail"
            iconPosition="left"
            control={Input}
            placeholder="joe@schmoe.com"
          />
          <FormField
            icon="edit"
            iconPosition="left"
            control={TextArea}
            placeholder="Tell us more about you..."
          />
        </Form>
        <button className="contact-us-button">Contact us</button>
      </div>
      <div className="contact-us-gradient-splash" />
    </div>
  );
};

export default ContactUs;
