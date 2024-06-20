import React from 'react';

const Services = () => {
    return (
        <div className="services-container">
            <h1>Our Services</h1>
            <p>
                At Digress Appointments, we offer a comprehensive range of services designed to streamline the doctor-patient scheduling process. Our goal is to provide an efficient, user-friendly platform that meets the needs of both healthcare providers and patients.
            </p>
            <div className="service-list">
                <div className="service-item">
                    <h2>Appointment Scheduling</h2>
                    <p>
                        Our platform allows patients to easily book appointments with their preferred doctors. With real-time availability, patients can find and select the most convenient time slots.
                    </p>
                </div>
                <div className="service-item">
                    <h2>Doctor Profiles</h2>
                    <p>
                        Detailed doctor profiles help patients make informed decisions. Profiles include specialization, experience, patient reviews, and more, ensuring patients find the right doctor for their needs.
                    </p>
                </div>
                <div className="service-item">
                    <h2>Automated Reminders</h2>
                    <p>
                        Reduce no-shows with our automated reminder system. Patients and doctors receive timely notifications via email or SMS to remind them of upcoming appointments.
                    </p>
                </div>
                <div className="service-item">
                    <h2>Telehealth Integration</h2>
                    <p>
                        In addition to in-person visits, our platform supports telehealth appointments. This allows patients to consult with their doctors from the comfort of their homes, providing greater flexibility and convenience.
                    </p>
                </div>
                <div className="service-item">
                    <h2>Secure and Private</h2>
                    <p>
                        We prioritize your privacy and security. Our platform is built with robust security measures to protect your personal and medical information.
                    </p>
                </div>
                <div className="service-item">
                    <h2>Comprehensive Support</h2>
                    <p>
                        Our support team is always ready to assist you with any issues or questions you may have, ensuring a smooth experience for both healthcare providers and patients.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Services;
