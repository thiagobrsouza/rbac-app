import { hash } from "bcryptjs";
import { prisma } from "../prismaClient";


interface UserRequest {
  name: string;
  email: string;
  password: string;
  profileId: number;
}

export class CreateUserService {

  async execute(createUser: UserRequest) {
    const userExists = await prisma.user.findUnique({
      where: { email: createUser.email }
    });

    if (userExists) {
      throw new Error('Email already registered');
    }

    const hashPassword = await hash(createUser.password, 8);

    const user = await prisma.user.create({
      data: {
        name: createUser.name,
        email: createUser.email,
        password: hashPassword,
        profile: {
          connect: { id: createUser.profileId }
        }
      },
      select: {
        id: true, name: true, email: true,
        profile: {
          select: { id: true, name: true }
        }
      }
    });
    
    return user;
    
  }

}