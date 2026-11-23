import type { Request, Response } from "express";
import { authService } from "./auth.service.ts";
import catchAsync from "../../shared/catchAsync.ts";

const userRegistration = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const result = await authService.userRegistration(data);

  res.status(200).json(result);
});

const userLogin = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const result = await authService.userLogin(data);

  res.status(200).json(result);
});

export const authController = {
  userRegistration,
  userLogin,
};
