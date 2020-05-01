import { Router } from 'express';
import UserController from './app/controllers/UserController';

const routes = new Router();

routes.post('/message', UserController.message);

export default routes;
