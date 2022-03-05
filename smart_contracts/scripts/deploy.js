const { getContractFactory } = require("hardhat").ethers;

const main = async () => {
  const passwordManagerFactory = await getContractFactory("PasswordManager");
  const passwordManager = await passwordManagerFactory.deploy();
  await passwordManager.deployed();

  console.log("PasswordManager deployed to:", passwordManager.address);
};

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
