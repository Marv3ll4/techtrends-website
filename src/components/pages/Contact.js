import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
  };

  return (
    <div className="container">
      <h1 className="mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit} className="shadow p-4 rounded bg-white">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input name="name" type="text" className="form-control" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input name="email" type="email" className="form-control" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea name="message" className="form-control" rows="5" onChange={handleChange} required></textarea>
        </div>
        <button className="btn btn-primary w-100" type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
