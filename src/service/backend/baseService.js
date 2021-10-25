import tokenHandler from "../tokenHandler.js";

export default class BaseService {
    sendGetRequest = async (uri) => {
		const url = process.env.VUE_APP_BACKEND_URI + uri;
		return await this.sendRequestAndProcessResponse(url);
    }

    sendRequestAndProcessResponse = async (url) => {
        const accessToken = tokenHandler.getAccessToken();
        console.log(accessToken);
        const response = await fetch(url, {
            headers: {
                access_token: accessToken,
                refresh_token: tokenHandler.getRefreshToken(),
                expires_at: tokenHandler.getExpiresAt(),
            },
        });
        const json = await response.json();

        tokenHandler.setAccessToken(json.access_token);
        tokenHandler.setExpiresAt(json.expires_at);

        return json.data;
    }
}