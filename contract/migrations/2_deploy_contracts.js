// migrating the appropriate contracts
var CampaignFactory = artifacts.require("CampaignFactory");
module.exports = function (deployer) {
    deployer.deploy(CampaignFactory);
};