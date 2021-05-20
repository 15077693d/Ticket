import Web3 from 'web3'
import SimpleTicketJson from './SimpleTicket.json'
let web3;

let SimpleTicketAddress = "0x0E14543C8E27940899993A142b625483B7aa202d"

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
    // We are in the browser and metamask is running
    web3 = new Web3(window.web3.currentProvider, null, null);
} else {
    // We are on the Server OR the user is not running metamask
    const provider = new Web3.providers.HttpProvider(
        "http://localhost:8545/"
    );
    web3 = new Web3(provider, null, null);
}

const SimpleTicketInstance = new web3.eth.Contract(SimpleTicketJson.abi, SimpleTicketAddress)
const getAccount = async () => {
    const accounts = await web3.eth.getAccounts()
    return accounts[0]
}


const buy = async () => {
    console.log(SimpleTicketInstance)
    await SimpleTicketInstance.methods.mint_().send({
        from: await getAccount()
    })
}

const transfer = async (to, tokenId) => {
    await SimpleTicketInstance.methods.safeTransferFrom(await getAccount(),to, tokenId).send({
        from: await getAccount()
    })
}

const renewQRCode = async (tokenId, newTicketOwner) => {
    await SimpleTicketInstance.methods.renewQRcode_(tokenId, newTicketOwner).send({
        from: await getAccount()
    })
}

const showOwners = async () => {
    const ticketCount = Number(await SimpleTicketInstance.methods.getTicketCount().call())
    let ticketPromises = []
    for (let i = 0; i < ticketCount; i++) {
        ticketPromises.push(SimpleTicketInstance.methods.ownerOf(i).call())
    }
    return await Promise.all(ticketPromises)
}

const validateOwner = async (tokenId, address) => {
    const owner = await SimpleTicketInstance.methods.ownerOf(tokenId)
    return owner === address
}

const validateQRcode = async (tokenId, code) => {
    const flag = await SimpleTicketInstance.methods.validateQRcode(tokenId, code).call()
    return flag
}

const getQRcode = async (tokenId) => {
    const qrCode = await SimpleTicketInstance.methods.getQRcode_(tokenId).call()
    return qrCode
}

const getData = async (tokenId) => {
    const tokenURI = await SimpleTicketInstance.methods.tokenURI(tokenId).call()
    return tokenURI
}
const SimpleTicket = {
    buy,
    transfer,
    renewQRCode,
    showOwners,
    validateOwner,
    validateQRcode,
    getQRcode,
    getData
}
export { SimpleTicket,getAccount}

