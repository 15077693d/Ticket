// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./TicketData.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "../node_modules/@openzeppelin/contracts/utils/Strings.sol";

contract Ticket is ERC721, TicketData {
    using Strings for uint256;
    // Mapping from ticket Id to ticket QR code
    mapping(uint256 => uint256) private _tokenIdQRcodeMapping;

    // Number of ticket are minted
    uint256 private _ticketCount = 0;

    // Metadata base url
    string private _theBaseURI;

    constructor(string memory __theBaseURI) ERC721("Ticket", "Ticket") {
        _theBaseURI = __theBaseURI;
    }

    function _baseURI() internal view override returns (string memory) {
        return _theBaseURI;
    }

    // getter
    function getQRcode(uint256 _tokenId) internal view returns (string memory) {
        string memory tokenIdString = _tokenId.toString();
        string memory _codeString = _tokenIdQRcodeMapping[_tokenId].toString();
        return string(abi.encodePacked("ticket:", tokenIdString, "=", _codeString));
    }

    function getTicketCount() public view returns (uint256) {
        return _ticketCount;
    }

    /**
     * @dev See {IERC721-safeTransferFrom}.
     */
    function safeTransferFrom(
        address _from,
        address _to,
        uint256 _tokenId
    ) public override {
        renewQRcode(_tokenId, _to);
        safeTransferFrom(_from, _to, _tokenId, "");
    }

    /**
     * @dev validate QRcode with token id and QRcode
     * Requirements:
     *
     * - `tokenId` must not exist.
     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.
     *
     */
    function validateQRcode(uint256 _tokenId, uint256 _code)
        external
        view
        returns (bool)
    {
        if (_code == _tokenIdQRcodeMapping[_tokenId]) {
            return true;
        } else {
            return false;
        }
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
        require(_tokenIdQRcodeMapping[_tokenId] != 0, "token need to exist");
        require(
            _newTicketOwner != address(0),
            "newTicketOwner need to be no null"
        );
        require(
            msg.sender == ownerOf(_tokenId),
            "msg.sender need to be Owner to change QRcode"
        );
        _tokenIdQRcodeMapping[_tokenId] = uint256(
            keccak256(
                abi.encodePacked(block.timestamp, _newTicketOwner, _tokenId)
            )
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
    function mint(string memory category) internal returns (uint256){
        require(ticketTypes[category].available > 0,"Your ticket category is not available...");
        _safeMint(msg.sender, _ticketCount);
        // add qrcode
        _tokenIdQRcodeMapping[_ticketCount] = uint256(
            keccak256(
                abi.encodePacked(block.timestamp, msg.sender, _ticketCount)
            )
        );
        _ticketCount += 1;
        decrease(category);
        return _ticketCount;
    }
}

contract SimpleTicket is Ticket {
    constructor(string memory __theBaseURI) Ticket(__theBaseURI) public{

    }
    function renewQRcode_(uint256 _tokenId, address _newTicketHolder) external {
        renewQRcode(_tokenId, _newTicketHolder);
    }

    function getQRcode_(uint256 _tokenId)
        external
        view
        returns (string memory)
    {
        return getQRcode(_tokenId);
    }

    function mint_(string memory category) external returns (uint256){
        return mint(category);
    }

    function register_(string memory category, uint256 price, uint256 maximum) external{
        register(category,  price,  maximum);
    }
}
