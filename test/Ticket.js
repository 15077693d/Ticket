const Ticket = artifacts.require("TicketTest");
contract('Ticket Tests', async (accounts) => {

    let ticketContract;
    before('setup contract', async () => {
        ticketContract = await Ticket.new()
    })

    it("Setup contract correctly and return name, symbol ", async function(){
        const name = await ticketContract.name.call()
        const symbol = await ticketContract.symbol.call()
        assert.equal(name+symbol, "TicketTicket", "Incorrect name and symbol")
    })

    it("Mint ticket can add qrcode add ticket count and become an owner", async function(){
        await ticketContract.mint_({from: accounts[0]})
        const qrcode = await ticketContract.getQRcode_.call(0)
        const ticketCount = (await ticketContract.getTicketCount.call()).toNumber()
        const owner = await ticketContract.ownerOf.call(0)
        console.log("QRcode: ", qrcode)
        assert.equal(ticketCount, 1, "Incorrect ticketCount")
        assert.equal(owner, accounts[0], "Incorrect owner")
    })

    it("Renew QRcode from accounts[0] to accounts[1]", async () => {
        const oldQrcode0 = await ticketContract.getQRcode_.call(0)
        await ticketContract.renewQRcode_(0, accounts[1],{from:accounts[0]})
        const newQrcode0 = await ticketContract.getQRcode_.call(0)
        console.log("oldQrcode0: ",oldQrcode0)
        console.log( "newQrcode0: ",newQrcode0)
        assert.notEqual(newQrcode0,"0x0000000000000000000000000000000000000000000000000000000000000000", "Qrcode of account 0 is not null")
    })

    it("Cannot Renew QRcode from accounts[1] (non token holder) to accounts[2]", async () => {
        let errorMessage
        try {
            await ticketContract.renewQRcode_(0, accounts[1],{from:accounts[1]})
        } catch (error) {
            errorMessage = error.message
        }
        assert.equal(errorMessage, "Returned error: VM Exception while processing transaction: revert msg.sender need to be holder to change QRcode -- Reason given: msg.sender need to be holder to change QRcode.",
            "Non owner should not renew QR code"
        )
    })

    it("Cannot Renew non-existed QRcode", async () => {
        try {
            await ticketContract.renewQRcode_(1, accounts[1],{from:accounts[1]})
        } catch (error) {
            errorMessage = error.message
        }
        assert.equal(errorMessage, "Returned error: VM Exception while processing transaction: revert token need to exist -- Reason given: token need to exist.",
            "Non-existed QRcode should not renew QR code"
        )
    })

    
})