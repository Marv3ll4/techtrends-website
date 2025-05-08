import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
  };

  return (
    <div className="container mt-4">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name</label>
          <input name="name" type="text" className="form-control" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input name="email" type="email" className="form-control" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Message</label>
          <textarea name="message" className="form-control" rows="5" onChange={handleChange}></textarea>
        </div>
        <button className="btn btn-primary" type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
