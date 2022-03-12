const hre = require("hardhat");
const ethers = hre.ethers;

async function main() {    
    const uri = process.env.URI;
    const contract_address = process.env.CONTRACT_ADDRESS;

    await hre.run("verify:verify", {
        address: contract_address,
        constructorArguments: [
            uri
        ],
    });

    console.log("Contract verified");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});