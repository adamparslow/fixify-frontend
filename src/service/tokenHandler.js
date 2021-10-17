function getAccessToken() {
	return localStorage.getItem("access_token");
}

function getRefreshToken() {
	return localStorage.getItem("refresh_token");
}

function getExpiresAt() {
	return localStorage.getItem("expires_at");
}

function setAccessToken(token) {
	localStorage.setItem("access_token", token);
}

function setRefreshToken(token) {
	localStorage.setItem("refresh_token", token);
}

function setExpiresAt(time) {
	localStorage.setItem("expires_at", time);
}

export default {
	getAccessToken,
	getRefreshToken,
	getExpiresAt,
	setAccessToken,
	setRefreshToken,
	setExpiresAt,
};
