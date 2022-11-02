import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";
import { FindUserService } from "../services/FindUserService";
import { UpdateUserPasswordService } from "../services/UpdateUserPasswordService";
import { UpdateUserService } from "../services/UpdateUserService";

export class UserController {

  async create(req: Request, res: Response) {
    const { ...user } = req.body;
    const service = new CreateUserService();
    const result = await service.execute({...user});
    return res.status(201).json(result);
  }

  async findAll(req: Request, res: Response) {
    const list = await new FindUserService().findAll();
    return res.json(list);
  }

  async findOne(req: Request, res: Response) {
    const { id } = req.params;
    const result = await new FindUserService().findOne(+id);
    return res.json(result);
  }

  async updatePassword(req: Request, res: Response) {
    const { id } = req.params;
    const { password } = req.body;
    const result = await new UpdateUserPasswordService().execute(+id, {password});
    return res.json(result);
  }

  async updateUser(req: Request, res: Response) {
    const { id } = req.params;
    const { name, email, profileId } = req.body;
    const result = await new UpdateUserService().execute(+id, { name, email, profileId });
    return res.json(result);
  }

}