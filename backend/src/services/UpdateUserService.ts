import { prisma } from "../prismaClient";


interface UserRequest {
  name?: string;
  email?: string;
  profileId?: number;
}

export class UpdateUserService {

  async execute(userId: number, { name, email, profileId }: UserRequest) {
    const user = await prisma.user.findUnique({
      where: { id: userId }
    });

    if (!user) {
      throw new Error('User not found');
    }

    return await prisma.user.update({
      where: { id: userId },
      data: {
        name,
        email,
        profile: {
          connect: { id: profileId }
        }
      },
      select: {
        id: true, name: true, email: true,
        profile: {
          select: { id: true, name: true }
        }
      }
    });

  }

}