import BaseService from './baseService.js';

class ConcertWatchService extends BaseService {
    getSetup = async () => 
        await this.sendGetRequest('/concert_watch/setup');
        
}

const service = new ConcertWatchService();
export default service;