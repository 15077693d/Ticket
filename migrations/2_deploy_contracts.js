// migrating the appropriate contracts
var Ticket = artifacts.require("Ticket");

module.exports = function (deployer) {
    deployer.deploy(Ticket, "http://localhost:3000/api/v1");
};