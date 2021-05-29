// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./Campaign.sol";
contract CampaignFactory {
    Campaign[] public campaigns;
    uint256 public numOfCampaign;
    address[] public campaignAddresses;
    function addCampaign(uint256 numberOfTicket,
                         string memory baseURI,
                         string memory _campaignName) public{
                numOfCampaign+=1;
                Campaign campaign = new Campaign(numberOfTicket,baseURI,_campaignName);
                campaigns.push(campaign);
                campaignAddresses.push(address(campaign));
    }
    function getCampaignAddresses() view public returns(address[] memory){
        return campaignAddresses;
    }
}