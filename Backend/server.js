import express from 'express';
import AssistantRoutes from './API/Assistant.routes.js';
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use("/assistant", AssistantRoutes);
app.use("*", (req, res) => res.status(404).json({ error: "not found" }));

export default app;