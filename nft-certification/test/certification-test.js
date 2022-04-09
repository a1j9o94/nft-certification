const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Certification", function () {
  it("Should mint and transfer a new NFT to someone", async function () {
      const Certification = await ethers.getContractFactory("Certification");
      const certification = await Certification.deploy();
      await certification.deployed();

    const recipient = '0xbda5747bfd65f08deb54cb465eb87d40e51b197e';
    const metadataURI = 'cid/test.png';

    let balance = await certification.balanceOf(recipient);
    expect(balance).to.equal(0);

    const newlyMintedCertification = await certification.learnToMint(recipient, metadataURI,{value: ethers.utils.parseEther('0.01')});


  });
});
