const Campaign = artifacts.require("Campaign")
const Ticket = artifacts.require("SimpleTicket")
contract("Campaign Tests", async (accounts) => {
    let campaignContract;
    let ticketContract;
    before('setup contract', async () => {
        campaignContract = await Campaign.new(10,"http://localhost:3000/api/v1/","concert1")
    })

    it("Setup contract correctly and return correct ticketCount", async function(){
        const ticketContractAddress = await campaignContract.ticketContract.call()
        ticketContract = await Ticket.at(ticketContractAddress);
        const ticketCount = (await ticketContract.getTicketCount.call()).toNumber()
        assert.equal(ticketCount,10)
    })

    it("return correct campaignName", async () => {
        const campaignName = await campaignContract.campaignName.call()
        assert.equal("concert1",campaignName)
    })
})