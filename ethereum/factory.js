import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x61181e451182014ea69ee13e69651bf97bdD97fc'
);

export default instance;