const { assert, expect } = require("chai")
const { network, deployments, ethers } = require("hardhat")
const { developmentChains, networkConfig } = require("../../helper.config")

!developmentChains.includes(network.name) ? describe.skip
    : describe("My token test", function () {
        let token, tokenContract, deployer

        beforeEach(async () => {
            const account = ethers.getSigners()
            deployer =  account[1]
            await deployments.fixture(["all"])
            tokenContract = await ethers.Contract("TokenERC20", deployer)
        })
        describe("Constructor", function () {
            console.log(ethers)
            
        })
    })
