import {SimpleTicket} from './resources/web3'
import styled from 'styled-components'
import { ShowAllOwner, TransferTicket } from './components/RightElement'
import {useState, useEffect} from 'react'
import {getAccount} from './resources/web3'
const Left = styled.div`
  width:200px;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
`

const Right = styled.div`
  display: flex;
  justify-content: center;
  border: 1px black solid;
  width:700px;
  height:300px;
  padding-top:30px;
  box-sizing: border-box;
`

const Container = styled.div`
width: 930px;
   display: flex;
   height:300px;
  justify-content:space-between;
`
function App() {
  const [user, setUser] = useState("")
  useEffect(async()=>{
    setUser(await getAccount())
  },[])
  return (
    <div className="App">
      <Container>
        <Left>
          <button onClick={SimpleTicket.buy}>Buy Ticket</button>
          <button>Transfer Ticket</button>
          <button>Renew QR code</button>
          <button>Show all owner</button>
          <button>Validate owner</button>
          <button>Validate QR code</button>
          <button>Read ticket data</button>
        </Left>
        <Right>
          {/* <ShowAllOwner /> */}
          <TransferTicket user={user}/>
        </Right>
      </Container>
    </div>
  );
}

export default App;
