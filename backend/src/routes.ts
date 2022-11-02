import { Router } from "express";
import { AuthController } from "./controllers/AuthController";
import { ProfileController } from "./controllers/ProfileController";
import { UserController } from "./controllers/UserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";

export const routes = Router();

/**
 * profiles routes
 */
routes.post('/profiles', isAuthenticated, new ProfileController().create);
routes.get('/profiles', isAuthenticated, new ProfileController().findAll);
routes.get('/profiles/:id', isAuthenticated, new ProfileController().findOne);

/**
 * users routes
 */
routes.post('/users', isAuthenticated, new UserController().create);
routes.get('/users', isAuthenticated, new UserController().findAll);
routes.get('/users/:id', isAuthenticated, new UserController().findOne);
routes.patch('/users/:id', isAuthenticated, new UserController().updatePassword);
routes.patch('/users/:id', isAuthenticated, new UserController().updateUser);

/**
 *  auth route
 */
routes.post('/sign', new AuthController().handle);