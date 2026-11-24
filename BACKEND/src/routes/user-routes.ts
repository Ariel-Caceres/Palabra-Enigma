import { Router } from "express";
import { getAll } from "../use-cases/getAll";

export const routes = Router()

routes.use("/users", getAll)