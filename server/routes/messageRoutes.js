import MessageController from '../controllers/MessageController';

const messageRoutes = (app) => {
  app.post('/api/v1/user/message', MessageController.sendMessage);
};

export default messageRoutes;
