// migrating the appropriate contracts
var SimpleTicket = artifacts.require("SimpleTicket");
module.exports = function (deployer) {
    deployer.deploy(SimpleTicket, "http://localhost:3000/api/v1/");
};