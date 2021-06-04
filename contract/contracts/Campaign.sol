// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./Ticket.sol";
contract Campaign {
    SimpleTicket public ticketContract;
    string public campaignName;
    constructor(string memory baseURI, string memory _campaignName )  {
        ticketContract = new SimpleTicket(baseURI);
        campaignName = _campaignName;
    }
}