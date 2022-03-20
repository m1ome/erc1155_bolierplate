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
npx hardhat add_item --network rinkeby --address 0xee51A45E0f959216FbDd3C52541Ba653C7309419 --id 0 --price 1000000000000000 --name "First Item" --limit 0
```

## Set an URI
```shell
npx hardhat set_uri --network rinkeby --address 0xee51A45E0f959216FbDd3C52541Ba653C7309419 --uri=http://google.com/{id}.json
```

## Flip sale state
```shell
npx hardhat flip_sale_state --network rinkeby --address 0xee51A45E0f959216FbDd3C52541Ba653C7309419
```