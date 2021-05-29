const CampaignFactory = artifacts.require("CampaignFactory")
contract("CampaignFactory Tests", async (accounts) => {
    let CampaignFactoryContract;
    before('setup contract', async () => {
        CampaignFactoryContract = await CampaignFactory.new()
    })

    it("Setup contract correctly and return correct numOfCampaign", async function(){
        const numOfCampaign = await CampaignFactoryContract.numOfCampaign.call()
        assert.equal(numOfCampaign,0)
    })

    it("add campaign and return correct numOfCampaign one ", async () => {
        await CampaignFactoryContract.addCampaign(10,"test.com","concert1")
        const numOfCampaign = await CampaignFactoryContract.numOfCampaign.call()
        console.log(await CampaignFactoryContract.getCampaignAddresses.call())
        assert.equal(numOfCampaign,1)
    })
})