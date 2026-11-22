import { prisma } from "../../../lib/prisma.ts";
import type { IUserReg } from "./auth.interface.ts";

const userRegistration = async (data: IUserReg) => {
  const user = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: data.password,
      imageUrl: data.imageUrl,
    },
  });

  if (!user.id) {
    throw new Error("User creation failed");
  }

  return user;
};

export const authService = {
  userRegistration,
};
