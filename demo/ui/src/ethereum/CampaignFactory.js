import {getAccount, web3} from './web3.js'
import CampaignFactoryJson from './CampaignFactory.json'

let campaignFactoryAddress = "0xFcd32fac583359bdF399e359595f1Ec6aF7ec504"
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