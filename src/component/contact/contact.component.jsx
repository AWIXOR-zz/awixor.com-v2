import React from "react";

import "./contact.styles.scss";

const Contact = () => (
  <section id="contact" className="contact">
    <div className="title">Contact Me</div>
    <div className="contact-content">
      <form name="contact" method="POST" data-netlify="true">
        <div className="row">
          <label htmlFor="name">
            Name <span>*</span>
          </label>
          <input
            name="name"
            type="text"
            id="name"
            placeholder="Awixor"
            required
          />
        </div>
        <div className="row">
          <label htmlFor="email">
            Email <span>*</span>
          </label>
          <input
            name="email"
            type="text"
            id="email"
            placeholder="me@awixor.com"
            required
          />
        </div>
        <div className="row">
          <label htmlFor="Message">
            Message <span>*</span>
          </label>
          <textarea
            name="Message"
            type="text"
            id="Message"
            rows="10"
            cols="75"
            placeholder="Write your message here."
            required
          />
        </div>
        <div className="row">
          <input type="submit" id="contact-submit" value="Envoyer" />
          <span id="status"></span>
        </div>
      </form>
    </div>
  </section>
);
export default Contact;
