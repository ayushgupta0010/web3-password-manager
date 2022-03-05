// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract PasswordManager {
    struct Password {
        string url;
        string username;
        string password;
    }

    mapping(address => Password[]) passwords;

    function add(
        string memory _url,
        string memory _username,
        string memory _password
    ) public {
        passwords[msg.sender].push(Password(_url, _username, _password));
    }

    function update(
        uint256 _index,
        string memory _url,
        string memory _username,
        string memory _password
    ) public {
        passwords[msg.sender][_index] = Password(_url, _username, _password);
    }

    function getPasswords() public view returns (Password[] memory) {
        return passwords[msg.sender];
    }
}
