import React from 'react';
import { Link } from 'react-router-dom';

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
      <h1 className="btn-large center welcome-message col push-s3 push-m4.5 push-l5">
       Connect
      </h1>
    </div>
  </div>
);


export default HomePage;

