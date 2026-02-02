const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MyToken", function () {
  let Token, token, owner;

  beforeEach(async function () {
    [owner] = await ethers.getSigners();
    Token = await ethers.getContractFactory("MyToken");
    token = await Token.deploy(ethers.utils.parseUnits("1000", 18));
    await token.deployed();
  });

  it("should have correct name and symbol", async function () {
    expect(await token.name()).to.equal("MyToken");
    expect(await token.symbol()).to.equal("MTK");
  });

  it("should assign initial supply to deployer", async function () {
    const balance = await token.balanceOf(owner.address);
    expect(balance).to.equal(ethers.utils.parseUnits("1000", 18));
  });
});