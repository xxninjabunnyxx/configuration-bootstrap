import express from "express";
import path from "path";
import linux from "./controllers/linux/linux";

const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, "./public")));
app.use("/linux", linux);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
