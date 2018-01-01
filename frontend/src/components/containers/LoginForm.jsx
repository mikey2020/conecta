import React from 'react';

/**
 *
 * @class
 *
 * @returns {Component} -  It returns login form modal
 */
class LoginForm extends React.Component {
  /**
   * @constructor
   *
   * @param {object} props - Inherit props from parent class
   */
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  /**
   * @returns {Component} - It returns a component
   */
  render() {
    const { email, password } = this.state;
    return (
      <div id="modal1" className="modal">
        <div className="row">
          <div className="form-container col push-l1 push-s1 push-m1 s10 m10 l10">
            <center><h2 className="signin-header">Sign In</h2></center>
            <form className="col s12">
              <div className="row">
                <div className="input-field">
                  <input
                    id="email"
                    type="email"
                    className="validate"
                    value={email}
                  />
                  <label htmlFor="email">Email</label>
                </div>
              </div>
              <div className="input-field">
                <input
                  id="password"
                  type="password"
                  className="validate"
                  value={password}
                />
                <label htmlFor="password">Password</label>
              </div>
              <div className="signup-button">
                <center>
                  <a className="waves-effect waves-light btn">Sign in</a>
                </center>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}


export default LoginForm;
