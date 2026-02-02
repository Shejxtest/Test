const { ethers } = require("hardhat");

async function main() {
  // Deploy ERC20
  const initialSupply = ethers.utils.parseUnits("1000", 18); // 1000 tokenów
  const MyToken = await ethers.getContractFactory("MyToken");
  const myToken = await MyToken.deploy(initialSupply);
  await myToken.deployed();
  console.log("MyToken deployed to:", myToken.address);

  // Deploy ERC721
  const MyNFT = await ethers.getContractFactory("MyNFT");
  const myNFT = await MyNFT.deploy();
  await myNFT.deployed();
  console.log("MyNFT deployed to:", myNFT.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});