import {RenewQRcode,ShowAllOwner,TransferTicket,RegisterTicket,ValidateQRcode,ReadTicketData,CampaignBar,BuyTicket,TicketBar} from '../components/ticket/index'
import { useState } from 'react'
import {useCampaignAddress, useTicket} from '../hook/index'
import  {Container,Left,Right} from '../components/common'
import {useParams, Link} from "react-router-dom"
function Ticket() {
  let { campaignAddress } = useParams();
  const [page, setPage] = useState("ShowAllOwner")
  const [refresh, setRefresh] = useState("")
  const {userTicketIds,simpleTicket,campaign} = useCampaignAddress(campaignAddress,refresh)
  const {ticketTypes} =  useTicket(simpleTicket)
  let rightElement;
  switch (page) {
    case "RenewQRcode":
      rightElement = <RenewQRcode simpleTicket={simpleTicket} userTicketIds={userTicketIds} />
      break;
    case "ShowAllOwner":
      rightElement = <ShowAllOwner simpleTicket={simpleTicket} refresh={refresh} />
      break;
    case "TransferTicket":
      rightElement = <TransferTicket setRefresh={setRefresh} simpleTicket={simpleTicket} userTicketIds={userTicketIds} />
      break;
    case "ValidateQRcode":
      rightElement = <ValidateQRcode simpleTicket={simpleTicket} />
      break;
    case "ReadTicketData":
      rightElement = <ReadTicketData simpleTicket={simpleTicket} userTicketIds={userTicketIds} />
      break;
    case "RegisterTicket":
      rightElement = <RegisterTicket simpleTicket={simpleTicket} setRefresh={setRefresh}/>
      break;
    case "BuyTicket":
      rightElement = <BuyTicket simpleTicket={simpleTicket} setRefresh={setRefresh} ticketTypes={ticketTypes}/>
      break;
    default:
      break;
  }
 
  return (
    <div>
     <CampaignBar campaign={campaign}/>
     <TicketBar ticketTypes={ticketTypes}/>
      <Container>
        <Left>
          <button onClick={() => setPage("RegisterTicket")}>Register Ticket</button>
          <button onClick={() => setPage("BuyTicket")}>Buy Ticket</button>
          <button onClick={() => setPage("TransferTicket")}>Transfer Ticket</button>
          <button onClick={() => setPage("RenewQRcode")}>Renew QR codes</button>
          <button onClick={() => setPage("ShowAllOwner")}>Show all owner</button>
          <button onClick={() => setPage("ValidateQRcode")}>Validate QR code</button>
          <button onClick={() => setPage("ReadTicketData")}>Read ticket data</button>
          <Link to="/"><button style={{width:"100%"}}>Back</button></Link>
        </Left>
        <Right>
          {rightElement}
        </Right>
      </Container>
    </div>
  );
}

export default Ticket;
