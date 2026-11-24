import { Request, Response } from "express";
import { db } from "../db";
import { User } from "../entities/user";

export const getAll = async (req: Request, res: Response) => {
    const users = await db.find(User)
    res.json(users)
}