require("@nomicfoundation/hardhat-toolbox");
// require("@nomiclabs/hardhat-ethers");
require("hardhat-deploy")

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.7",
      },
      {
        version: "0.4.24",
      },
    ],
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId:31337
    },
    localhost: {
      chainId:31337
    }
  },
  namedAccounts: {
    deployer: {
      default: 0,
      1:0
    }
  }
};
