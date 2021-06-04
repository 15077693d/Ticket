import { web3} from './web3.js'
import CampaignJson from './Campaign.json'

class Campaign{
    constructor(address){
        this.address =  address
        this.instance = new web3.eth.Contract(CampaignJson.abi, address)
    }

    async getCampaignName(){
        return await this.instance.methods.campaignName().call()
    }
    
    async getTicketAddress(){
        return await this.instance.methods.ticketContract().call()
    }
}

export {Campaign}