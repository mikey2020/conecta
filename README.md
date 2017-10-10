### Conecta 

## An application that allows users communicate in more secure fun environment

#### API Features

The following features make up the PostIt API:

###### Authentication

- It uses JSON Web Token (JWT) for authentication
- It generates a token on successful login or account creation and returns it to the user
- It verifies the token to ensure a user is authenticated to access every endpoints

###### Users

- It allows users to be signed up or created. 
- It allows users to login and obtain a unique token which expires every 5hours
- It allows users send others users messages

## Technologies Used
- **[JavaScript ES6](http://es6-features.org/)** - Codes were written in javascript to enhance HTML pages.
- **[ReactJS](https://facebook.github.io/react/)** - React is an open-source JavaScript library for building user interfaces.
- **[NodeJS](https://nodejs.org/)** - Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.
- **[ExpressJS](https://expressjs.com/)** - Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. I used this framework for routing.
- **[Mongodb](https://www.mongodb.org/)** 
- **[Mongoose](http://docs.mongoose.com/)** 

### **Installation Steps**
* Ensure you have `node` installed or install [Node](https://nodejs.org/en/download/)
* Clone the project repository from your terminal `git clone https://github.com/mikey2020/post-it`
* Change directory into the `post-it` directory
* Run `npm install` to install the dependencies in the `package.json` file
* Run `npm run dev:server` to start the project
* Run `npm test` to run the server-side(api) tests
* cd into `client folder` and then
* Run `npm test` to run the client-side(React) tests
* Use [Postman](https://www.getpostman.com/) or any API testing tool of your choice to access the endpoints

**You can also test the application by going to `https://conecta.herokuapp.com/`**

### **Endpoints**
**N/B:** For all endpoints that require authentication, use \
`Authorization: <token>`

### How to Contribute
Contributors are welcome to further enhance the features of this API by contributing to its development. The following guidelines should guide you in contributing to this project:

1. Fork the repository.
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request describing the feature(s) you have added

Ensure your codes follow the [AirBnB Javascript Styles Guide](https://github.com/airbnb/javascript)

### Author
**Michael Eboagu**

## License 

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)