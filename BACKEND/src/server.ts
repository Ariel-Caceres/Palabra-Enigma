import { initDb } from "./db";
import express from "express";
import { routes } from "./routes/user-routes";

const app = express();

app.use(express.json());
app.use("/api", routes)
const port = 3000
initDb().then(() => {
    app.listen(port, () => {
        console.log("Servidor corriendo en el port: " + port);
    })
})

