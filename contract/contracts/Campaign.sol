// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./Ticket.sol";
contract Campaign {
    SimpleTicket public ticketContract;
    string public campaignName;
    constructor(uint256  numberOfTicket, string memory baseURI, string memory _campaignName )  {
        ticketContract = new SimpleTicket(baseURI);
        for (uint i = 0; i < numberOfTicket; i++){
            ticketContract.mint_();
        }
        campaignName = _campaignName;
    }
}