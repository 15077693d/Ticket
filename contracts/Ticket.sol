// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Ticket is ERC721 {
    // Mapping from ticket holder to ticket QR code
    mapping(uint256 => bytes32) private _tokenIdQRcodeMapping;

    // Number of ticket are minted
    uint256 private _ticketCount = 0;

    // Metadata base url
    string private _theBaseURI;
    constructor(string memory __theBaseURI) ERC721("Ticket", "Ticket") {
        _theBaseURI = __theBaseURI;
    }

    // function _baseURI() internal override view returns (string memory) {
    //     return _theBaseURI;
    // }

    // getter
    function getQRcode(uint256 _tokenId) internal view returns (bytes32) {
        return _tokenIdQRcodeMapping[_tokenId];
    }

    function getTicketCount() public view returns (uint256) {
        return _ticketCount;
    }

    /**
     * @dev renew QRcode with token id and new address
     * Requirements:
     *
     * - `tokenId` must not exist.
     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.
     *
     */

    function renewQRcode(uint256 _tokenId, address _newTicketHolder) internal {
        require(
            _tokenIdQRcodeMapping[_tokenId] != bytes32(0),
            "token need to exist"
        );
        require(
            _newTicketHolder != address(0),
            "newTicketHolder need to be no null"
        );
        require(
            msg.sender == ownerOf(_tokenId),
            "msg.sender need to be holder to change QRcode"
        );
        _tokenIdQRcodeMapping[_tokenId] = keccak256(
            abi.encodePacked(block.timestamp, _newTicketHolder, _ticketCount)
        );
    }

    /**
     * @dev mint ticket with no args
     * Requirements:
     *
     * - `tokenId` must not exist.
     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.
     *
     */
    function mint() public {
        _safeMint(msg.sender, _ticketCount);
        // add qrcode
        _tokenIdQRcodeMapping[_ticketCount] = keccak256(
            abi.encodePacked(block.timestamp, msg.sender, _ticketCount)
        );
        _ticketCount += 1;
    }
}

contract TicketTest  is Ticket("http://localhost:3000/api/v1")  {
    function renewQRcode_(uint256 _tokenId, address _newTicketHolder) external {
        renewQRcode(_tokenId, _newTicketHolder);
    }

    function mint_() external {
        mint();
    }

    function getQRcode_(uint256 _tokenId) external view returns (bytes32) {
        return getQRcode(_tokenId);
    }
}
