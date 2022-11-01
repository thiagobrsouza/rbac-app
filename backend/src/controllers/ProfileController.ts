import { Request, Response } from "express";
import { CreateProfileService } from "../services/CreateProfileService";
import { FindProfileService } from "../services/FindProfileService";

export class ProfileController {

  async create(req: Request, res: Response) {
    const {...profile} = req.body;
    const service = new CreateProfileService();
    const result = await service.execute({...profile});
    return res.status(201).json(result);
  }

  async findAll(req: Request, res: Response) {
    const service = new FindProfileService();
    const result = await service.findAll();
    return res.json(result);
  }

  async findOne(req: Request, res: Response) {
    const { id } = req.params;
    const service = new FindProfileService();
    const result = await service.findOne(+id);
    return res.json(result);
  }

}