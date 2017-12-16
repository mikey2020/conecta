import MessageController from '../controllers/MessageController';
import authenticate from '../middlewares/authenticate';

const messageRoutes = (app) => {
  app.post('/api/v1/user/message', authenticate, MessageController.sendMessage);
};

export default messageRoutes;
