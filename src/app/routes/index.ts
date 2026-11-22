import { authRouter } from "../modules/auth/auth.route.ts";
import { productRouter } from "../modules/product/product.route.ts";
import { userRouter } from "../modules/user/user.route.ts";
import express from "express";

const router = express.Router();

const routers = [
  {
    path: "/auth",
    route: authRouter,
  },
  {
    path: "/user",
    route: userRouter,
  },
  {
    path: "/product",
    route: productRouter,
  },
];

routers.forEach((r) => router.use(r.path, r.route));

export const allRouters = router;
