import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import TwilioController from './app/controllers/TwilioController';

import AuthValidation from './app/middlewares/auth';

const routes = new Router();

routes.post('/users/store', UserController.store, SessionController.store);

routes.post('/login', SessionController.login, UserController.index);

routes.use(AuthValidation);
routes.post('/users/store/verify', TwilioController.verify);
routes.get('/user', UserController.index);

export default routes;
