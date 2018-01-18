import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x6d77f2275DB37C56CFACD3f877e877280489e065'
);

export default instance;