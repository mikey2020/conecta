import React from 'react';
import PropTypes from 'prop-types';

const SignUpForm = (props) => {
  return (
    <div className="welcome-page">
      <div className="overlay">
        <div className="row">
          <div className="form-container col push-l1 push-s1 push-m1 s10 m10 l10">
            <center><h2 className="signup-header">Sign Up</h2></center>
            <form className="col s12">
              <div className="row">
                <div className="input-field ">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    className="validate"
                    onChange={props.onChange}
                    value={props.username}
                  />
                  <label htmlFor="username">Username</label>
                </div>
                <div className="input-field">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="validate"
                    onChange={props.onChange}
                    value={props.email}
                  />
                  <label htmlFor="email">Email</label>
                </div>
              </div>
              <div className="input-field">
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="validate"
                  onChange={props.onChange}
                  value={props.password}
                />
                <label htmlFor="password">Password</label>
              </div>
              <div className="signup-button">
                <center><a className="waves-effect waves-light btn">Sign up</a></center>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

SignUpForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
};

export default SignUpForm;
