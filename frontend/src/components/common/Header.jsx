import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  /**
   *
   * @param {e} e - DOM event
   *
   * @returns {void}
   */
  function handleClick(e) {
    e.preventDefault();
    $(document).ready(() => {
      console.log('am working');
      $('.modal').modal();
    });
  }
  return (
    <nav className="my-header">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo logo"><i className="material-icons logo-icon">cloud</i>Conecta</Link>
        <ul className="right hide-on-med-and-down">
          <li><a href=""><i className="material-icons">search</i></a></li>
          <li><Link to="/signup">Sign Up</Link></li>
          <li>
            <Link to="/login">
              <i className="material-icons">person</i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
