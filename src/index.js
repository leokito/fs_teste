import express from "express";
import { routes } from "./routes";

const app = express();

import swaggerUiExpress from 'swagger-ui-express';
import swaggerDocument from './swagger.json'

app.use(
    "/api/docs",
    swaggerUiExpress.serve,
    swaggerUiExpress.setup(swaggerDocument)
  );

routes(app);

export default app;