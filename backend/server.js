import express from "express";
import dotenv from "dotenv";

import notesRoutes from "./src/routes/notesRoutes.js";
import db from "./db_config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

db();

app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
  console.log("Server started on PORT 3000");
});
