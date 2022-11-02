import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { prisma } from "../prismaClient";

interface AuthRequest {
  email: string;
  password: string;
}

export class AuthService {

  async execute({ email, password }: AuthRequest) {

    const user = await prisma.user.findUnique({
      where: { email: email }
    });

    if (!user) {
      throw new Error('User/password are incorrect');
    }

    const passwordsMatch = await compare(password, user.password);

    if (!passwordsMatch) {
      throw new Error('User/password are incorrect');
    }

    const token = sign(
      { name: user.name, email: user.email },
      process.env.JWT_SECRET,
      { subject: user.id.toString(), expiresIn: '360s' }
    );

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      token: token
    }

  }
}