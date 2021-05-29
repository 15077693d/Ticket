# Ticket
Transferable Ticket Creation

# Function demo
1. Buy Ticket
2. Transfer Ticket
3. Renew QR codes
4. Show all owner
5. Validate QR code
6. Read ticket data

# Requirement
- truffle
- react
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

## Open web interface
```bash
cd demo/ui
yarn start
```
