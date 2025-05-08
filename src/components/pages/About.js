import React from 'react';

function About() {
  return (
    <div className="container mt-4">
      <h1>About Us</h1>
      <p>TechTrends Ltd is located in Kigali City, offering a wide range of electronic gadgets.</p>
      <h5 className="mt-3">Our Location:</h5>
      <div style={{ width: '100%', height: '400px' }}>
        <iframe
          title="Kigali Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.052170279084!2d30.0587!3d-1.9441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6c75f4a3f3f%3A0x9fd6f5825f02034e!2sKigali%2C%20Rwanda!5e0!3m2!1sen!2s!4v1641555178692!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default About;
