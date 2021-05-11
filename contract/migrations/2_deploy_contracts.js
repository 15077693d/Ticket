// migrating the appropriate contracts
var SimpleTicket = artifacts.require("SimpleTicket");
module.exports = function (deployer) {
    deployer.deploy(SimpleTicket);
};