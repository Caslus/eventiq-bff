interface BASE_REQUEST {
	headers: any;
}

export interface POST_AUTH_REQUEST extends BASE_REQUEST {
	email: string;
	password: string;
}

export interface POST_AUTH_RESPONSE {
	user: USER;
}

export interface USER {
	id: number;
	cpfCnpj: string;
	name: string;
	email: string;
	phone: string;
	role: string;
	createdAt: string;
	updatedAt: string;
}

export interface POST_EVENT_REQUEST extends BASE_REQUEST {
	name: string;
	description: string;
	date: string;
	location: string;
	photoUrl: string;
}
