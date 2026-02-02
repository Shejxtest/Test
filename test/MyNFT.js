const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MyNFT", function () {
  let NFT, nft, owner, addr1;

  beforeEach(async function () {
    [owner, addr1] = await ethers.getSigners();
    NFT = await ethers.getContractFactory("MyNFT");
    nft = await NFT.deploy();
    await nft.deployed();
  });

  it("should have correct name and symbol", async function () {
    expect(await nft.name()).to.equal("MyNFT");
    expect(await nft.symbol()).to.equal("MNFT");
  });

  it("should allow owner to mint NFT", async function () {
    await nft.mintNFT(addr1.address);
    expect(await nft.ownerOf(0)).to.equal(addr1.address);
  });
});