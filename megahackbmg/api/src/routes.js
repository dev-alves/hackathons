import { Router } from 'express';

import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import TwilioController from './app/controllers/TwilioController';
import FileController from './app/controllers/FileController';
import ShopController from './app/controllers/ShopController';

import AuthValidation from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/files', upload.single('file'), FileController.store);
routes.post('/shop', upload.single('file'), ShopController.store);
routes.get('/shops', upload.single('file'), ShopController.index);

routes.post('/users/store', UserController.store, SessionController.store);

routes.post('/login', SessionController.login, UserController.index);

routes.use(AuthValidation);
routes.post('/users/store/verify', TwilioController.verify);
routes.get('/user', UserController.index);

routes.post('/verify_caller', TwilioController.verifyCaller);
routes.post('/notification', TwilioController.notification);

export default routes;
