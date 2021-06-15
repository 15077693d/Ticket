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

# What's next?
- implement rest api for ticket metadata etc. location...
- public to public testnet
- transfer ticket on Opensea
- buy ticket with ether
# Solution demo
## Publisher
1. Create Campaign 

![Create Campaign ](https://github.com/15077693d/Ticket/blob/campaign-factory-demo/document/create_campaign.gif)

2. Create Campaign ticket category

![Create Campaign ticket category](https://github.com/15077693d/Ticket/blob/campaign-factory-demo/document/register_ticket.gif)

3. Validate QR code

![correct_result](https://github.com/15077693d/Ticket/blob/campaign-factory-demo/document/validate_code.gif)
## Customer
1. Buy ticket  

![Buy Ticket](https://github.com/15077693d/Ticket/blob/campaign-factory-demo/document/buy_ticket.gif)

2. Transfer ticket

![transfer_ticket](https://github.com/15077693d/Ticket/blob/campaign-factory-demo/document/transfer_ticket.gif)

3. Renew QR codes

![renew_qrcode](https://github.com/15077693d/Ticket/blob/campaign-factory-demo/document/renew_qrcode.gif)

4. Show all owner 

![read_data](https://github.com/15077693d/Ticket/blob/campaign-factory-demo/document/read_data.png)

5. Read ticket data

# Requirement
- truffle
- yarn/npm
- metamask

# How to start?

## Access demo branch
```bash
git checkout campaign-factory-demo
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
- copy contract address to demo/ui/src/ethereum/CampaignFactory.js and replace campaignFactoryAddress value

![deploy_contract](https://github.com/15077693d/Ticket/blob/campaign-factory-demo/document/deploy_contracts.png)

## Open web interface
```bash
cd demo/ui
yarn start
```
