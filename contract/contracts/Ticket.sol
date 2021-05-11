// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Ticket is ERC721 {
    // Mapping from ticket Id to ticket QR code
    mapping(uint256 => bytes32) private _tokenIdQRcodeMapping;

        // Number of ticket are minted
        uint256 private _ticketCount = 0;

        // Metadata base url
        string private _theBaseURI;
        constructor(string memory __theBaseURI) ERC721("Ticket", "Ticket") {
            _theBaseURI = __theBaseURI;
        }


        function _baseURI() internal override view returns (string memory) {
             return _theBaseURI;
         }


        // getter
        function getQRcode(uint256 _tokenId) internal view returns (bytes32) {
            return _tokenIdQRcodeMapping[_tokenId];
        }

        function getTicketCount() public view returns (uint256) {
            return _ticketCount;
        }

    /**
     * @dev See {IERC721-safeTransferFrom}.
     */
    function safeTransferFrom(address _from, address _to, uint256 _tokenId) public override {
        renewQRcode(_tokenId, _to);
        safeTransferFrom(_from, _to, _tokenId, "");
    }

    /**
     * @dev renew QRcode with token id and new address
     * Requirements:
     *
     * - `tokenId` must not exist.
     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.
     *
     */

    function renewQRcode(uint256 _tokenId, address _newTicketOwner) internal {
        require(
            _tokenIdQRcodeMapping[_tokenId] != bytes32(0),
            "token need to exist"
        );
        require(
            _newTicketOwner != address(0),
            "newTicketOwner need to be no null"
        );
        require(
            msg.sender == ownerOf(_tokenId),
            "msg.sender need to be Owner to change QRcode"
        );
        _tokenIdQRcodeMapping[_tokenId] = keccak256(
            abi.encodePacked(block.timestamp, _newTicketOwner, _ticketCount)
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
        function mint() internal {
            _safeMint(msg.sender, _ticketCount);
            // add qrcode
            _tokenIdQRcodeMapping[_ticketCount] = keccak256(
                abi.encodePacked(block.timestamp, msg.sender, _ticketCount)
            );
            _ticketCount += 1;
        }
    }

    contract SimpleTicket  is Ticket("http://localhost:3000/api/v1")  {
        function renewQRcode_(uint256 _tokenId, address _newTicketHolder) external {
            renewQRcode(_tokenId, _newTicketHolder);
        }
        
        function getQRcode_(uint256 _tokenId) external view returns(bytes32){
            return getQRcode(_tokenId);
        }

        function mint_() external {
            mint();
        }

}
