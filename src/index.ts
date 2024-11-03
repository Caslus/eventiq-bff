// Hono
import { Hono } from "hono";

// Routes
import routes from "./routes";

// ----------------------------

const app = new Hono();
app.route("/", routes);

console.log("Started with routes:");
routes.routes.forEach((route) => {
	console.log(`- ${route.method} ${route.path}`);
});

export default app;
