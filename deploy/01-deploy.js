const { network } = require("hardhat")
const {
  developmentChains,
  INITIAL_SUPPLY,
} = require("../helper.config")
// const { verify } = require("../helper-functions")

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()
//   const contract = 


  const Token = await deploy("TokenERC20", {
    from: deployer,
    args: [INITIAL_SUPPLY, "FToken", "FTK"],
    log: true,
    // we need to wait if on a live network so we can verify properly
    waitConfirmations: network.config.blockConfirmations || 1,
  })
  log(`ourToken deployed at`)
  log(Token.address)

//   if (
//     !developmentChains.includes(network.name) &&
//     process.env.ETHERSCAN_API_KEY
//   ) {
//     await verify(ourToken.address, [INITIAL_SUPPLY])
//   }
}

module.exports.tags = ["all", "token"]