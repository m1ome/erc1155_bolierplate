# ERC1155 boilerplate
You can read more about ERC115 [here](https://docs.openzeppelin.com/contracts/3.x/erc1155)  
You can read about metadata more in [here](https://docs.opensea.io/docs/metadata-standards)  
This is a boilerplare for ERC1155 smart-contract with all things you might need.  
Example server is located [here](server/server.js)  

## Deploy
```shell
npx hardhat run --network rinkeby scripts/deploy.js
```

## Verify
```shell
npx hardhat run --network rinkeby scripts/verify.js
```

## Add an item
```shell
npx hardhat add_item --network=rinkeby --address 0xA0b32A315865eCA2A25a18E81b5D0064dc930B7e --id 0 --price 10000000000000000 --name "First Item"
```

## Set an URI
```shell
npx hardhat set_uri --network=rinkeby --address 0xA0b32A315865eCA2A25a18E81b5D0064dc930B7e --uri=http://google.com/{id}.json
```