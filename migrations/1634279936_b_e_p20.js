const BEP20 = artifacts.require("BEP20")

module.exports = function(_deployer) {
  // Use deployer to state migration tasks.
  _deployer.deploy(BEP20, web3.utils.toBN('300000000').mul(web3.utils.toBN('10').pow(web3.utils.toBN('18'))))
};
