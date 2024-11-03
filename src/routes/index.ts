// Hono
import { Hono } from "hono";

// Routes
import core from "./core";

// ----------------------------
const app = new Hono();
app.route("/", core);

export default app;
