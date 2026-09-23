import express from "express";
import appRoute from "./routes/app.route.js";

const app = express();
app.use(express.json());

app.use("/api", appRoute);

export default app;
