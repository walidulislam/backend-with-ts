import type { Request, Response } from "express";
import { authService } from "./auth.service.ts";

const userRegistration = async (req: Request, res: Response) => {
  const data = req.body;
  const result = await authService.userRegistration(data);

  res.status(200).json(result);
};

export const authController = {
  userRegistration,
};
