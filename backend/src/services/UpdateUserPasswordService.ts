import { hash } from "bcryptjs";
import { prisma } from "../prismaClient";

interface UserRequest {
  password: string;
}

export class UpdateUserPasswordService {

  async execute(userId: number, { password }: UserRequest) {
    const user = await prisma.user.findUnique({
      where: { id: userId }
    });

    if (!user) {
      throw new Error('User not found');
    }

    const hashPassword = await hash(password, 8);

    return await prisma.user.update({
      where: { id: userId },
      data: {
        password: hashPassword
      },
      select: {
        id: true, email: true
      }
    });

  }

}