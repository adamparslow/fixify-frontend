import tokenHandler from "../tokenHandler.js";

const getMegamixRegistrationStatus = async () => {
	const url = `${process.env.VUE_APP_BACKEND_URI}/megamix/register?refresh_token=${tokenHandler.getRefreshToken()}`;

	const response = await fetch(url);
	return await response.json();
};

const registerForMegamix = async () => {
	const url = process.env.VUE_APP_BACKEND_URI + "/megamix/register";
	const refreshToken = tokenHandler.getRefreshToken();
	const body = {
		refresh_token: refreshToken,
	};

	await fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(body),
	});
};

const deregisterFromMegamix = async () => {
	const url = process.env.VUE_APP_BACKEND_URI + "/megamix/register";
	const refreshToken = tokenHandler.getRefreshToken();
	const body = {
		refresh_token: refreshToken,
	};

	await fetch(url, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(body),
	});
};

const createMegamix = async () => {
	const url = process.env.VUE_APP_BACKEND_URI + "/megamix/generate";
	const refreshToken = tokenHandler.getRefreshToken();
	const accessToken = tokenHandler.getAccessToken();
	const expiresAt = tokenHandler.getExpiresAt();
	
	const body = {
		refresh_token: refreshToken,
		access_token: accessToken,
		expires_at: expiresAt,
	};

	const response = await fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(body),
	});
	const json = await response.json();

	tokenHandler.setAccessToken(json.access_token);
	tokenHandler.setExpiresAt(json.expires_at);

	return json.url;
};

export default {
	getMegamixRegistrationStatus,
	registerForMegamix,
	deregisterFromMegamix,
	createMegamix,
};
