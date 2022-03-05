const { expect } = require("chai");
const { getContractFactory } = require("hardhat").ethers;

describe("PasswordManager", () => {
  it("Should add a new password", async () => {
    const passwordManagerFactory = await getContractFactory("PasswordManager");
    const passwordManager = await passwordManagerFactory.deploy();
    await passwordManager.deployed();

    await passwordManager.add("google.com", "username1", "password1");
    let temp = await passwordManager.getPasswords();
    expect(temp.length).to.be.equal(1);
  });

  it("Should add and update the password", async () => {
    const passwordManagerFactory = await getContractFactory("PasswordManager");
    const passwordManager = await passwordManagerFactory.deploy();
    await passwordManager.deployed();

    await passwordManager.add("google.com", "username1", "password1");
    await passwordManager.update(0, "google.com", "username1", "password2");

    let temp = await passwordManager.getPasswords();

    expect(temp[0].password).to.be.equal("password2");
  });
});
