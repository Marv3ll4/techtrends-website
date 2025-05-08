import React from 'react';

function Home() {
  return (
    <div className="container text-center">
      <h1 className="mb-4">Welcome to TechTrends Ltd</h1>
      <p className="lead">Discover cutting-edge electronic gadgets tailored for your needs. Based in the heart of Kigali City, we bring the future of technology to you.</p>
      <img
        src="https://th.bing.com/th/id/R.bd1ecac8db7fc4d21dd206ec485485e7?rik=LJmdIeIwRJjWvQ&pid=ImgRaw&r=0"
        alt="Gadgets"
        className="img-fluid rounded mt-4"
        style={{ maxHeight: '400px' }}
      />
    </div>
  );
}

export default Home;
