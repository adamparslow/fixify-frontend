import BaseService from './baseService.js';

class ConcertWatchService extends BaseService {
    getSetup = async () => 
        await this.sendGetRequest('/concert_watch/setup');

    registerArtist = async (artistId, url) => 
        await this.sendPostRequest('/concert_watch/register_artist', {
            artist_id: artistId,
            url 
        });
        
}

const service = new ConcertWatchService();
export default service;