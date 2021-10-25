import tokenHandler from "../tokenHandler.js";
import BaseService from "./baseService.js";

class SpotifyService extends BaseService {
	getPlaylists = async () => 
		await this.sendGetRequest('/spotify/playlists');

	getPlaylistCoverArt = async (playlistHref, size) => 
		await this.sendGetRequest(`/spotify/cover_art?playlist=${playlistHref}&size=${size}`);

	getLikedSongs = async () => 
		await this.sendGetRequest('/spotify/liked_songs');

	backupLikedSongs = async () => {
		const url = process.env.VUE_APP_BACKEND_URI + "/spotify/liked_songs/backup";
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				access_token: tokenHandler.getAccessToken(),
				refresh_token: tokenHandler.getRefreshToken(),
				expires_at: tokenHandler.getExpiresAt(),
			}
		});
		return response;
	}

	getSongData = async (songId) => 
		await this.sendGetRequest('/spotify/songDetails?id=' + songId);

	getMoodRing = async () => 
		await this.sendGetRequest('/spotify/mood_ring');
}

const service = new SpotifyService();
export default service;