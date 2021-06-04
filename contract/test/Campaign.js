const Campaign = artifacts.require("Campaign")
const Ticket = artifacts.require("SimpleTicket")
contract("Campaign Tests", async (accounts) => {
    let campaignContract;
    let ticketContract;
    before('setup contract', async () => {
        campaignContract = await Campaign.new("http://localhost:3000/api/v1/","concert1")
    })

    it("Setup contract correctly", async function(){
        const ticketContractAddress = await campaignContract.ticketContract.call()
        console.log(ticketContractAddress)
        ticketContract = await Ticket.at(ticketContractAddress);
    })

    it("return correct campaignName", async () => {
        const campaignName = await campaignContract.campaignName.call()
        assert.equal("concert1",campaignName)
    })
})