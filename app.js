import express from "express";
import cors from "cors";
import "dotenv/config";
import postRouter from "./routes/postRoute.js";
const app = express();
const PORT = process.env.PORT || 3600;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use(postRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
