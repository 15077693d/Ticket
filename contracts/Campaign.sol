// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Campaign {
    struct Ticket{
        address holderAddress;
        bytes32 _hash;
        uint256 ticketId;
    }
    address private manager;
    uint256 private ticketAmount = 0;
    mapping(uint256=>Ticket) private idTicketMapping;
    mapping(address=> Ticket) private addressTicketMapping;

    // modifier
    /**
    * @dev Modifier that requires the "inputAddress" to be "holderAddress"
    */
    modifier requireHolder
                                    (
                                    )
    {
        require(msg.sender == addressTicketMapping[msg.sender].holderAddress, "Sender is not ticket holder")
    }

    /**
    * @dev Modifier that requires the "inputAddress" to be "holderAddress"
    */
    modifier requireManager
                                    (
                                    )
    {
        require(msg.sender == manager, "Sender is not manager")
    }

    // getter
    /**
    * @dev getter of ticketAmount
    */
    function getTicketAmounts 
                                pure
                                returns(uint256)
    {
        return ticketAmount;
    }

    /**
    * @dev getter of ticket holder address and id by ticketId
    */
    function getTicketById
                            (
                                uint256 ticketId
                            ) 
                            external 
                            returns(address, uint256)
    {
        Ticket targetTicket = idTicketMapping[ticketId];
        return (targetTicket.holderAddress, targetTicket.ticketId);
    }

    /**
    * @dev getter of ticket holder address , _hash and id by inputAddress
    */
    function getTicketByAddress 
                                (
                                )
                                external 
                                requireHolder
                                returns(address, bytes32, uint256)
    {
        Ticket targetTicket = idTicketMapping[ticketId];
        return (targetTicket.holderAddress, targetTicket._hash ,targetTicket.ticketId)
    }

    // function 
    /**
    * @dev create number of tickets by ticketAmount
    */
    function createTicket 
                            (
                                uint256 ticketAmount
                            )
                            external
    {

    }
}