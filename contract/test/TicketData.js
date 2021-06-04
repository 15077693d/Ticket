const TicketData = artifacts.require("TicketDataTest");

contract("TicketData Tests", async (accounts) => {
    let ticketDataContract;
    before('setup contract', async () => {
        ticketDataContract = await TicketData.new()
    })

    it("Register correctly and return correct data", async () => {
        await ticketDataContract.register_("red", 10, 10)
        const result = await ticketDataContract.getTicketType.call("red")
        assert.equal(result['0'],"red")
        assert.equal(result['1'].toNumber(),10)
        assert.equal(result['2'].toNumber(),10)
        assert.equal(result['3'].toNumber(),10)
        assert.equal(1,await ticketDataContract.typeAmount.call())
        assert.equal("red",await ticketDataContract.typeNames.call(0))
    })

    it("Buy will reduce available",async () => {
        await ticketDataContract.decrease_("red", {from:accounts[0]})
        const result = await ticketDataContract.getTicketType.call("red")
        assert.equal(result['3'].toNumber(),9)
    })

    it("Register yellow and return red and yellow", async () => {
        await ticketDataContract.register_("yellow", 10, 10)
        const result = await ticketDataContract.getTypeNames.call()
        console.log(result)
    })
})