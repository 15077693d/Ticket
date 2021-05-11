import Web3 from 'web3'
import SimpleTicketJson from './SimpleTicket.json'
let web3;

let SimpleTicketAddress = "0x89C6FdEC4c38A4cA940d80c78F1199Cd74f740a0"

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
    // We are in the browser and metamask is running
    web3 = new Web3(window.web3.currentProvider, null, null);
} else {
    // We are on the Server OR the user is not running metamask
    const provider = new Web3.providers.HttpProvider(
        "http://localhost:7545/"
    );
    web3 = new Web3(provider, null, null);
}

const SimpleTicketInstance = new web3.eth.Contract(SimpleTicketJson.abi, SimpleTicketAddress)
const getAccount = async () => {
    const accounts = await web3.eth.getAccounts()
    return accounts[0]
}


const buy = async () => {
    await SimpleTicketInstance.mint().send({
        from: await getAccount()
    })
}

const transfer = async ({ from, to, tokenId }) => {
    await SimpleTicketInstance.safeTransferFrom(from, to, tokenId).send({
        from: await getAccount()
    })
}

const renewQRCode = async ({ tokenId, newTicketOwner }) => {
    await SimpleTicketInstance.renewQRcode(tokenId, newTicketOwner).send({
        from: await getAccount()
    })
}

const showTickets = async ({ tokenId, newTicketOwner }) => {
    const ticketCount = Number(await SimpleTicketInstance.getTicketCount().call())
    let ticketPromises = []
    for (let i = 0; i < ticketCount; i++) {
        ticketPromises.push()
    }
}

const getQRCode = async ({ tokenId }) => {
    return await SimpleTicketInstance.getQRcode_(tokenId).call()
}
export { web3, SimpleTicket, getAccount }

