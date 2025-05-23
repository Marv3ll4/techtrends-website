import React from 'react';

function About() {
  return (
    <div className="container">
      <h1 className="mb-4">About TechTrends Ltd</h1>
      <p className="lead">We are a top-tier electronic gadget provider located in Kigali City. Our mission is to offer innovative technology solutions that enhance everyday life.</p>
      
      <h5 className="mt-5">Our Location:</h5>
      <div className="ratio ratio-16x9 mt-3 shadow rounded">
        <iframe
          title="Kigali Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.052170279084!2d30.0587!3d-1.9441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6c75f4a3f3f%3A0x9fd6f5825f02034e!2sKigali%2C%20Rwanda!5e0!3m2!1sen!2s!4v1641555178692!5m2!1sen!2s"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default About;
