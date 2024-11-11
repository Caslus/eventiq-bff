import ky from "ky";

import { POST_AUTH_REQUEST, POST_AUTH_RESPONSE, POST_EVENT_REQUEST } from "../interfaces/core";

const api = ky.create({
	prefixUrl: Bun.env.FUNCTIONS_URL,
	headers: {
		"Content-Type": "application/json",
	},
	timeout: 30000,
});

// export const GET_EVENT = async (data: any) => {
// 	return await api.get(`event?page=1`, {
// 		headers: data.headers,
// 	});
// };
