const { task } = require("hardhat/config");

require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

require('dotenv').config();

const infura_url = process.env.INFURA_URL;

let accounts = [];
if (process.env.PRIVATE_KEY) {
  accounts.push(process.env.PRIVATE_KEY);
}

task("add_item", "Add item to smart contract")
  .addParam("address", "Smart-contract address")
  .addParam("id", "Item id")
  .addParam("price", "Item price in wei")
  .addParam("name", "Item fancy name")
  .addParam("limit", "Item limit")
  .setAction(async ({address, id, price, name, limit}) => {
    const Token = await hre.ethers.getContractFactory("Token");
    const contract = await Token.attach(address);
    const res = await contract.addItem(id, {name: name, price: price, limit: limit});
    console.log(`Item added @ ${res.hash}`);
  });

task("set_uri", "Setting up a new URI")
  .addParam("address", "Smart-contract address")
  .addParam("uri", "URI to work with")
  .setAction(async ({address, uri}) => {
    const Token = await hre.ethers.getContractFactory("Token");
    const contract = await Token.attach(address);
    const res = await contract.setURI(uri);
    console.log(`URI set @ ${res.hash}`);
  });  

task("flip_sale_state", "Flip sale state")
  .addParam("address", "Smart-contract address")
  .setAction(async ({address}) => {
    const Token = await hre.ethers.getContractFactory("Token");
    const contract = await Token.attach(address);
    const res = await contract.flipSaleState();
    console.log(`Flipped sale state of contract`);
  });  

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      gas: "auto"
    },
    rinkeby: {
      url: infura_url,
      accounts: accounts
    },
    mainnet: {
      url: infura_url,
      accounts: accounts
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY || ""
  }   
};