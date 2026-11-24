import "reflect-metadata";
import { DataSource } from "typeorm"
import { User } from "../entities/user";
export const AppDataSource = new DataSource({
    type: "better-sqlite3",
    database: "db.sqlite",
    synchronize: true,

    entities: [User],
})