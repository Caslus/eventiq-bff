// Hono
import { Hono } from "hono";

// Services
import { DELETE_EVENT, GET_EVENT, GET_EVENT_BY_ID, GET_USER, POST_AUTH, POST_EVENT, PUT_EVENT } from "../services/core";

// ----------------------------

const app = new Hono();

// ----------------------------
// Login
// ----------------------------

app.post("/auth", async (c) => {
	const response = await POST_AUTH((await c.req.json()) as any);
	response.headers.getSetCookie().forEach((cookie) => {
		c.res.headers.append("Set-Cookie", cookie);
	});
	const json: Record<string, unknown> = await response.json();
	return c.json(json);
});

// ----------------------------
// Event
// ----------------------------

app.get("/event", async (c) => {
	const headers = c.req.header();
	const response = await GET_EVENT({ headers });
	const json: Record<string, unknown> = await response.json();
	return c.json(json);
});

app.get("/event/:id", async (c) => {
	const headers = c.req.header();
	const response = await GET_EVENT_BY_ID({ headers, id: c.req.param("id") });
	const json: Record<string, unknown> = await response.json();
	return c.json(json);
});

app.post("/event", async (c) => {
	const headers = c.req.header();
	const response = await POST_EVENT({ headers, ...((await c.req.json()) as any) });
	const json: Record<string, unknown> = await response.json();
	return c.json(json);
});

app.put("/event/:id", async (c) => {
	const headers = c.req.header();
	const response = await PUT_EVENT(c.req.param("id"), { headers, ...((await c.req.json()) as any) });
	const json: Record<string, unknown> = await response.json();
	return c.json(json);
});

app.delete("/event/:id", async (c) => {
	const headers = c.req.header();
	const response = await DELETE_EVENT(c.req.param("id"), { headers });
	const json: Record<string, unknown> = await response.json();
	return c.json(json);
});

// ----------------------------
// User
// ----------------------------

app.get("/user", async (c) => {
	const headers = c.req.header();
	const response = await GET_USER({ headers });
	const json: Record<string, unknown> = await response.json();
	return c.json(json);
});

export default app;
