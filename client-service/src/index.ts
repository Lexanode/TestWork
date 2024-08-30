import express from "express";
import router from "./routers/router-data";
import fs from 'fs'
import swaggerUi from 'swagger-ui-express'

//@ts-ignore  
const swaggerFile = JSON.parse(fs.readFileSync('./swagger/swagger-output.json'))

const app = express();
const port = process.env.PORT || 3000;
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(express.json());
app.use("/api/v1/", router);

if (!(process.env.NODE_ENV === "TEST")) {
  app.listen(port, () => {
    console.log(`Server on port ${port}`);
  });
}

export default app;