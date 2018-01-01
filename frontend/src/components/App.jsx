import React from 'react';
import PropTypes from 'prop-types';

import Header from './common/Header.jsx';

/**
 * This component is the parent component into which all other component goes
 * @param {object} props
 * @returns {jsx} - an xml/html -like syntax extension to javascript
 */
const App = props => (
  <div>
    <Header />
    { props.children }
    <div className="container" />
  </div>
);

App.propTypes = {
  children: PropTypes.node.isRequired
};

export default App;
