//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
// import "@openzeppelin/contracts/security/Pausable.sol";

contract Token is ERC1155, Ownable {
    struct Item {
        string name;
        uint256 price;
    }

    mapping(uint8 => Item) private items;

    constructor(string memory _url) ERC1155(_url) {}    

    function withdraw() external onlyOwner {
        address _owner = owner();
        payable(_owner).transfer(address(this).balance);
    }

    function setURI(string memory newuri) external onlyOwner {
        _setURI(newuri);
    }    

    function addItem(uint8 _id, Item memory _item) external onlyOwner {
        items[_id] = _item;
    }

    function mint(uint8 _id, uint8 _amount) external payable {
        Item memory item = items[_id];

        require(item.price > 0, "item price should be >= 0");
        require(msg.value >= item.price * _amount, "amount sent is not enough for purchase");

        _mint(msg.sender, _id, _amount, "");
    }
}
