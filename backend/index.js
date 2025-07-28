import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import notesRoutes from "./src/routes/notesRoutes.js";
import db from "./db_config/db.js";
import rateLimiter from "./middleWares/rateLimiter.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, "../frontend/dist")));

db().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}`);
  });
});
app.use(cors());
app.use(express.json());
app.use(rateLimiter);
app.use("/api/notes", notesRoutes);
