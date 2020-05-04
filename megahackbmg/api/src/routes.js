import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import AuthValidation from './app/middlewares/auth';
import TwilioValidation from './app/middlewares/Twilio';

const routes = new Router();

routes.post(
  '/users/store',
  UserController.store,
  TwilioValidation.authenticateSMS,
  SessionController.store
);

routes.use(AuthValidation);
routes.post('/users/store/verify', TwilioValidation.verifySMS);

routes.get('/user', UserController.index);

export default routes;
