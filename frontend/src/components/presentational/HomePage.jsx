import React from 'react';

/**
 * Welcome component
 *
 * @description - It renders a landing page
 *
 * @returns {component} - It returns a react component
 */
const HomePage = () => (
  <div className="landing-page row">
    <div className="overlay">
      <h1 className="center welcome"> Welcome to Connect</h1>
      <p className="center welcome-message"> Get started by signing up here </p>
    </div>
  </div>
);

export default HomePage;

