import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import notesRoutes from "./src/routes/notesRoutes.js";
import db from "./db_config/db.js";
import rateLimiter from "./middleWares/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

db().then(() => {
  app.listen(PORT, () => {
    console.log("Server started on PORT 3000");
  });
});
app.use(cors());
app.use(express.json());
app.use(rateLimiter);
app.use("/api/notes", notesRoutes);
