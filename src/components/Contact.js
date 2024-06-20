import React from 'react';

const Contact = () => {
    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <p>
                We would love to hear from you! Whether you have a question about our services, need assistance, or just want to provide feedback, our team is here to help.
            </p>
            <h2>Get in Touch</h2>
            <p>
                You can reach us via email, phone, or by filling out the contact form below. We aim to respond to all inquiries within 24 hours.
            </p>
            <div className="contact-details">
                <div className="contact-detail">
                    <h3>Email</h3>
                    <p>
                        <a href="mailto:support@digressappointments.com">support@digressappointments.com</a>
                    </p>
                </div>
                <div className="contact-detail">
                    <h3>Phone</h3>
                    <p>
                        +1 (123) 456-7890
                    </p>
                </div>
                <div className="contact-detail">
                    <h3>Address</h3>
                    <p>
                        Digress Appointments Inc.<br />
                        123 Healthcare Blvd.<br />
                        Suite 100<br />
                        San Francisco, CA 94107
                    </p>
                </div>
            </div>
            <h2>Contact Form</h2>
            <form className="contact-form">
                <label>
                    Name:
                    <input type="text" name="name" required />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" required />
                </label>
                <label>
                    Message:
                    <textarea name="message" required></textarea>
                </label>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;
