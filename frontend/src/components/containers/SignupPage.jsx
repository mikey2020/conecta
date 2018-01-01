import React from 'react';
import SignupForm from '../presentational/SignupForm.jsx';

/**
 * @class
 */
class SignupPage extends React.Component {
  /**
   * @constructor
   *
   * @param {object} props - Inherit props from parent class
   */
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };

    this.onChange = this.onChange.bind(this);
  }

  /**
   * @param {object} event - argument
   *
   * @returns {void}
   */
  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  /**
   * @render function
   *
   * @returns {html} - renders html
   */
  render() {
    const { username, email, password } = this.state;
    return (
      <SignupForm
        onChange={this.onChange}
        username={username}
        email={email}
        password={password}
      />
    );
  }
}

export default SignupPage;
