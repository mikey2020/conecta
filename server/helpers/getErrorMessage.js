const getErrorMessage = (err) => {
  let message = '';
  if (err.code) {
    switch (err.code) {
      case 11000:
        message = 'User already exists';
        break;
      case 11001:
        message = 'User already exists';
        break;
      default:
        message = 'Something went wrong';
    }
  } else {
    Object.keys(err.errors).forEach((error) => {
      if (err.errors[error].path === 'username') {
        message = 'Username is required';
      } else if (err.errors[error].path === 'email') {
        message = 'Email is required';
      } else {
        message = 'Password is required';
      }
    });
  }
  return message;
};

export default getErrorMessage;
