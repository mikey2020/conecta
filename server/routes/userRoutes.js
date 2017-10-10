import UserController from '../controllers/UserController';

const userRoutes = (app) => {
  app.post('/api/v1/user/register', UserController.register);
  app.post('/api/v1/user/login', UserController.login);
};

export default userRoutes;
