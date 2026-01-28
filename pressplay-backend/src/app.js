import express from "express";
import cors from "cors";
import morgan from "morgan";

import healthRoutes from "./routes/health.routes.js";
import { errorHandler } from "./middleware/error.middleware.js";

const app = express();

// Global Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/health", healthRoutes);

// Error Handling (must be last)
app.use(errorHandler);

export default app;
