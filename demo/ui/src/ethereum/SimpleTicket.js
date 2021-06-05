import {getAccount, web3} from './web3.js'
import SimpleTicketJson from './SimpleTicket.json'

class SimpleTicket{
    constructor(address){
        this.instance =  new web3.eth.Contract(SimpleTicketJson.abi, address)
    }

    async register(category,price,maximum){
        await this.instance.methods.register_(category,price,maximum).send({
            from: await getAccount()
        })
    }

    async getTypeNames(){
        return await this.instance.methods.getTypeNames().call()
    }

    async getTicketType(category){
        return await this.instance.methods.getTicketType(category).call()
    }

    async buy(category) {
        await this.instance.methods.mint_(category).send({
            from: await getAccount()
        })
    }
    
    async transfer( to, tokenId){
        await this.instance.methods.safeTransferFrom(await getAccount(),to, tokenId).send({
            from: await getAccount()
        })
    }
    
    async renewQRCode( tokenId, newTicketOwner) {
        await this.instance.methods.renewQRcode_(tokenId, newTicketOwner).send({
            from: await getAccount()
        })
    }
    
    async showOwners() {
        const ticketCount = Number(await this.instance.methods.getTicketCount().call())
        let ticketPromises = []
        for (let i = 0; i < ticketCount; i++) {
            ticketPromises.push(this.instance.methods.ownerOf(i).call())
        }
        return await Promise.all(ticketPromises)
    }
    
    async validateOwner( tokenId, ownerAddress) {
        const owner = await this.instance.methods.ownerOf(tokenId)
        return owner === ownerAddress
    }
    
    async validateQRcode( tokenId, code) {
        const flag = await this.instance.methods.validateQRcode(tokenId, code).call()
        return flag
    }
    
    async getQRcode( tokenId) {
        const qrCode = await this.instance.methods.getQRcode_(tokenId).call()
        return qrCode
    }
    
    async getData( tokenId) {
        const tokenURI = await this.instance.methods.tokenURI(tokenId).call()
        return tokenURI
    }

}

export {SimpleTicket}