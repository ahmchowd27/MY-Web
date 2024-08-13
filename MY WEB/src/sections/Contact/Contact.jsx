import React from 'react';
import emailjs from 'emailjs-com';
import styles from './ContactStyles.module.css';

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    // Log form data for debugging
    console.log("Form Data:", new FormData(e.target));

    emailjs.sendForm(
      'service_lma4p32',  // Replace with your service ID
      'template_q8hytvq', // Replace with your template ID
      e.target,
      'l7N2UnUSTUtjUYs0T'      // Replace with your user ID
    ).then(
      (result) => {
        console.log("EmailJS Result:", result); // Log result for debugging
        alert('Message sent successfully!');
      },
      (error) => {
        console.error("EmailJS Error:", error); // Log error for debugging
        alert('Failed to send the message, please try again.');
      }
    );

    e.target.reset(); // Optional: Reset the form after submission
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form onSubmit={sendEmail}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"  // Ensure this matches {{name}} in the template
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            name="email"  // Ensure this matches {{email}} in the template
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"  // Ensure this matches {{message}} in the template
            id="message"
            placeholder="Message"
            required></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
