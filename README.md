# Ticket
Transferable Ticket Creation (Ticket NFT)

# Inspiration
I love sunset rollercoaster and they will have a concert on 2021/10/8 in Hong Kong! However, I have no ticket(E-tickets with qr code) so I would like to buy second hand ticket... Then the problems come out...

| Problem  | Solution |
| ------------- | ------------- |
| Someone pretend they have the ticket  | A function that I can check the one is owner or not.  |
| Someone have one ticket but capture the qrcode and sell to multiple person  | Make ticket as ERC721 troken! each sell is a troken transfer, no need to capture qrcode.  |
|  I afraid someone will take a photo to my qrcode and go the concert before me. | Renew QR code anytime if you want! |

# Solution demo
1. Buy Ticket  

![Buy Ticket](https://github.com/15077693d/Ticket/blob/simple-ticket-contract-demo/documents/buy_ticket.gif)

2. Transfer Ticket

![transfer_ticket](https://github.com/15077693d/Ticket/blob/simple-ticket-contract-demo/documents/transfer_ticket.gif)

3. Renew QR codes

![renew_qrcode](https://github.com/15077693d/Ticket/blob/simple-ticket-contract-demo/documents/renew_qrcode.gif)

4. Show all owner 

5. Validate QR code

![correct_result](https://github.com/15077693d/Ticket/blob/simple-ticket-contract-demo/documents/correct_result.gif)

6. Read ticket data

# What's next?
- implement campaign, campaign factory contract
- Register ticket types
- Add campaign page

# Requirement
- truffle
- ganache
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

![renew_qrcode](https://github.com/15077693d/Ticket/blob/simple-ticket-contract-demo/documents/deploy_contract.png)

## Open web interface
```bash
cd demo/ui
yarn start
```
