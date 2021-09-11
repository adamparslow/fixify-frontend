import tokenHandler from "@/model/tokenHandler.js";

const getPlaylists = async () => {
	const url = process.env.VUE_APP_BACKEND_URI + "/spotify/playlists";
	return await sendRequestAndProcessResponse(url);
};

const getPlaylistCoverArt = async (playlistHref, size) => {
	const url = `${process.env.VUE_APP_BACKEND_URI}/spotify/cover_art?playlist=${playlistHref}&size=${size}`;
	return await sendRequestAndProcessResponse(url);
};

const getLikedSongs = async () => {
	const url = process.env.VUE_APP_BACKEND_URI + "/spotify/liked_songs";
	return await sendRequestAndProcessResponse(url);
}

const getSongData = async (songId) => {
	const url = process.env.VUE_APP_BACKEND_URI + "/spotify/song_details?id=" + songId;
	return await sendRequestAndProcessResponse(url);
}

const sendRequestAndProcessResponse = async (url) => {
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

export default {
	getPlaylists,
	getPlaylistCoverArt,
	getLikedSongs,
	getSongData
};
