import {getAccount, web3} from './web3.js'
import CampaignFactoryJson from './CampaignFactory.json'

let campaignFactoryAddress = "0xCac12b7BD4422a6a9a103F8c0fe35C9fBe763BC7"
let campaignFactoryInstance = new web3.eth.Contract(CampaignFactoryJson.abi, campaignFactoryAddress)

const addCampaign = async (baseURI,
                            campaignName) => {
    await campaignFactoryInstance.methods.addCampaign(String(baseURI),
                                                      String(campaignName)).send({
                                                      from: await getAccount()
                                                })
}

const getCampaignAddresses = async () => {
    return await campaignFactoryInstance.methods.getCampaignAddresses().call()
}

const CampaignFactory = {
    addCampaign,
    getCampaignAddresses
}

export {CampaignFactory}