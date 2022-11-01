import { prisma } from "../prismaClient";

export class FindProfileService {

  async findAll() {
    return await prisma.profile.findMany({
      select: {
        id: true,
        name: true,
      },
    });
  }

  async findOne(id: number) {
    const profile = await prisma.profile.findUnique({
      where: { id }
    });
    return profile;
  }

}