const ToDoContract = artifacts.require("./ToDoContract.sol");

module.exports = function (deployer) {
  deployer.deploy(ToDoContract);
};