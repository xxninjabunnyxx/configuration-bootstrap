import { Router } from "express";
import { promises as fs } from "fs";
import arch from "./arch";
const linux = Router();

linux.use("/arch", arch);

linux.get("/salt", async (req, res, next) => {
    res.send(await fs.readFile("./src/files/linux/salt", "utf-8"));
});

export default linux;
