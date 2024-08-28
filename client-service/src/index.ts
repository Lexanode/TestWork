import express from "express";
import dotenv from "dotenv";
import router from "./routers/router-data";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use("/api/v1/", router);

app.listen(port, () => {
  console.log(`Server om port ${port}`);
});
