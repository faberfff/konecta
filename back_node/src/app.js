import express from "express";
import morgan from "morgan";

import empleadosRoutes from "./routes/empleados.routes.js";
import solicitudRoutes from "./routes/solicitud.routes.js";

import { PORT } from "./config.js";

const app = express();

//Middlewares
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/api", empleadosRoutes);
app.use("/api", solicitudRoutes);

//meddleware manejar las rutas que no existen
app.use((req, res, next) => {
  res.status(404).json({
    message: "endpoint not found ",
  });
});

app.listen(PORT);

console.log("Server runnn!!!!!, listo todo ok", PORT);

export default app;
