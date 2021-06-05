// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


contract TicketData{
    // different ticket
    struct TicketType {
        string category;
        uint256 price;
        uint256 maximum;
        uint256 available;
    }
    
    // types 
    mapping(string => TicketType) public ticketTypes;
    string[] public typeNames;
    uint256 public typeAmount;


    function getTypeNames() external view returns(string[] memory){
        return typeNames;
    }

    function getTicketType(string memory category) external view returns(string memory,uint256,uint256,uint256){
        return (
            ticketTypes[category].category,
            ticketTypes[category].price,
            ticketTypes[category].maximum,
            ticketTypes[category].available
        );
    }

    // set type of ticket
    function register(string memory category, uint256 price, uint256 maximum) internal {
        ticketTypes[category] = TicketType(
            category,price,maximum,maximum);
        typeNames.push(category);
        typeAmount+=1;
    }

    function decrease(string memory category) internal {
        ticketTypes[category].available-=1;
    }
}

contract TicketDataTest is TicketData{
    function decrease_(string memory category) public {
        decrease(category);
    }
    function register_(string memory category, uint256 price, uint256 maximum) public {
        register(category, price, maximum);
    }
}