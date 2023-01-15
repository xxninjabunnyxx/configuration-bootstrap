import { Router } from "express";
import { promises as fs } from "fs";
const arch = Router();

arch.get("/workstation", async (req, res, next) => {
  res.send(await fs.readFile("./src/scripts/linux/arch/workstation.sh", "utf-8"));
});

arch.get("/server", async (req, res, next) => {
  res.send(await fs.readFile("./src/scripts/linux/arch/server.sh", "utf-8"));
});

export default arch;
