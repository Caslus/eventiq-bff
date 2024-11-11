import ky from "ky";

import { POST_AUTH_REQUEST, POST_AUTH_RESPONSE, POST_EVENT_REQUEST } from "../interfaces/core";

const api = ky.create({
	prefixUrl: Bun.env.BACKEND_URL,
	headers: {
		"Content-Type": "application/json",
	},
	timeout: 30000,
});

export const POST_AUTH = async (data: POST_AUTH_REQUEST) => {
	return await api.post<POST_AUTH_RESPONSE>("auth", {
		json: data,
	});
};

export const GET_EVENT = async (data: any) => {
	return await api.get(`event?page=1`, {
		headers: data.headers,
	});
};

export const GET_EVENT_BY_ID = async (data: any) => {
	return await api.get(`event/${data.id}`, {
		headers: data.headers,
	});
};

export const POST_EVENT = async (data: POST_EVENT_REQUEST) => {
	return await api.post(`event`, {
		json: data,
		headers: data.headers,
	});
};

export const PUT_EVENT = async (id: string, data: POST_EVENT_REQUEST) => {
	return await api.put(`event/${id}`, {
		json: data,
		headers: data.headers,
	});
};

export const DELETE_EVENT = async (id: string, data: any) => {
	return await api.delete(`event/${id}`, {
		headers: data.headers,
	});
};

export const GET_USER = async (data: any) => {
	return await api.get(`user`, {
		headers: data.headers,
	});
};
