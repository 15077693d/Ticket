# Ticket
Transferable Ticket Creation (Ticket NFT)

Any questions feel free to contract oscaryiu.lapsang@gmail.com.

# Inspiration
I love sunset rollercoaster and they will have a concert on 2021/10/8 in Hong Kong! However, I have no ticket(E-tickets with qr code) so I would like to buy second hand ticket... Then the problems come out...

| Problem  | Solution |
| ------------- | ------------- |
| Someone pretend they have the ticket  | A function that I can check the one is owner or not.  |
| Someone have one ticket but capture the qrcode and sell to multiple person  | Make ticket as ERC721 troken! each sell is a troken transfer, no need to capture qrcode.  |
|  I afraid someone will take a photo to my qrcode and go the concert before me. | Renew QR code anytime if you want! |

# Solution demo
## Publication
1. Create Campaign 

![Buy Ticket](https://github.com/15077693d/Ticket/blob/simple-ticket-contract-demo/documents/buy_ticket.gif)

2. Create Campaign ticket category

![Buy Ticket](https://github.com/15077693d/Ticket/blob/simple-ticket-contract-demo/documents/buy_ticket.gif)

3. Validate QR code

![correct_result](https://github.com/15077693d/Ticket/blob/simple-ticket-contract-demo/documents/correct_result.gif)
## Customer
1. Buy ticket  

![Buy Ticket](https://github.com/15077693d/Ticket/blob/simple-ticket-contract-demo/documents/buy_ticket.gif)

2. Transfer ticket

![transfer_ticket](https://github.com/15077693d/Ticket/blob/simple-ticket-contract-demo/documents/transfer_ticket.gif)

3. Renew QR codes

![renew_qrcode](https://github.com/15077693d/Ticket/blob/simple-ticket-contract-demo/documents/renew_qrcode.gif)

4. Show all owner 

5. Read ticket data

# Requirement
- truffle
- yarn/npm
- metamask

# How to start?

## Access demo branch
```bash
git checkout simple-ticket-contract-demo
```

## Install dependency
### Contract
```bash
cd contract
yarn install
```
### Web interface
```bash
cd demo/ui
yarn install
```

## Deploy contract
- setup local Ganache RPC Server 127.0.0.1:8545
```bash
cd contract
truffle deploy
```
- copy contract address to demo/ui/src/resources/web3.js and replace SimpleTicketAddress's value

![deploy_contract](https://github.com/15077693d/Ticket/blob/simple-ticket-contract-demo/documents/deploy_contract.png)

## Open web interface
```bash
cd demo/ui
yarn start
```
