import { prisma } from "../prismaClient";

export class FindUserService {

  async findAll() {
    return await prisma.user.findMany({
      select: {
        id: true, name: true, email: true,
        profile: {
          select: { id: true, name: true }
        }
      }
    });
  }

  async findOne(id: number) {
    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true, name: true, email: true,
        profile: {
          select: {
            id: true, name: true
          }
        }
      }
    });
    return user;
  }

}