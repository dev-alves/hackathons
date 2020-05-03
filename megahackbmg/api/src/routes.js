import { Router } from 'express';
import UserController from './app/controllers/UserController';

const routes = new Router();

routes.get('/users/specialty/:idSpecialty', UserController.getUsersBySpecialty);

export default routes;
