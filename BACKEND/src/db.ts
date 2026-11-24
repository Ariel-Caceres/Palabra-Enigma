import { EntityManager } from "typeorm"
import { AppDataSource } from "./database/data-source"

export let db: EntityManager
export const initDb = async () => {
    const ds = await AppDataSource.initialize()
    db = ds.manager
    console.log("DB ready");

}