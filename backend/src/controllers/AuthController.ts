import { Request, Response } from "express";
import { AuthService } from "../services/AuthService";

export class AuthController {

  async handle(req: Request, res: Response) {
    const { email, password } = req.body;
    const auth = await new AuthService().execute({ email, password });
    return res.json(auth);
  }
  
}