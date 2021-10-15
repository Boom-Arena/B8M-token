const BAM = artifacts.require("BEP20")

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("BEP20", function (accounts) {
  let contract

  before(async()=>{
    //Deploy test contract on devnet
    // contract = await BAM.new('300000000000000000000000000') //web3.utils.toBN('300000000').mul(web3.utils.toBN('10').pow(web3.utils.toBN('18')))
    contract = await BAM.deployed()
  })

  it("token deployed", async ()=>{

    return assert.isTrue(contract.address != '')
  })

  it("deployer should have total supply", async function () {
    const totalSupply = await contract.totalSupply()
    const balance = await contract.balanceOf(accounts[0])
    return assert.isTrue(totalSupply.toString() == balance.toString())
  })

  it("deployer transfer funds", async function () {
    await contract.transfer(accounts[1],web3.utils.toBN('1000').mul(web3.utils.toBN('10').pow(web3.utils.toBN('18'))))
    const balance = await contract.balanceOf(accounts[1])
    return assert.isTrue(balance.toString() == web3.utils.toBN('1000').mul(web3.utils.toBN('10').pow(web3.utils.toBN('18'))).toString())
  })


})
