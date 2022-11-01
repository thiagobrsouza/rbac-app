import { Router } from "express";
import { ProfileController } from "./controllers/ProfileController";

export const routes = Router();

/**
 * profiles routes
 */
routes.post('/profiles', new ProfileController().create);
routes.get('/profiles', new ProfileController().findAll);
routes.get('/profiles/:id', new ProfileController().findOne);