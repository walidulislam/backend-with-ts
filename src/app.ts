import express, { type Express, type Request, type Response } from "express";
import { allRouters } from "./app/routes/index.ts";

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/api/v1", allRouters);

export default app;
