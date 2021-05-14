import React, {useState} from 'react';
import QRCode from "react-qr-code";
import {Field} from '../components/common'
import styled from 'styled-components'
import {SimpleTicket, getAccount} from '../resources/web3'
const Container = styled.div`
 width: 600px;
 display: flex;
 justify-content:space-between;
`
const Form = styled.div`
    width: 300px;
`
const NullQRcode = styled.div`
    width: 256px;
    height: 256px;
    border: 1px solid black;
`

const RenewQRcode = ({userTicketIds}) => {
    const [selectedId,setSelectedId] = useState("Ticket id.")
    const [selectedQRcode, setSelectedQRcode] = useState("")
    const handleClick = async () => {
        await SimpleTicket.renewQRCode(selectedId, await getAccount())
        setSelectedQRcode(await SimpleTicket.getQRcode(selectedId))
    }
    return (
        <Container>
            <Form>
            <Field>
                <label for="ticketid">Selected Ticket</label>
                <select value={selectedId} id="ticketid" onChange={(e) => setSelectedId(e.target.value)}>
                    <option selected disabled>Ticket id.</option>
                    {
                        userTicketIds.map(
                            userTicketId => <option key={userTicketId} value={userTicketId}>
                                {userTicketId}
                            </option>
                        )
                    }
                </select>
            </Field> 
            <button onClick={handleClick}>Renew</button>
            </Form>
            {
                selectedId=="Ticket id."?<NullQRcode/>:<QRCode value={selectedQRcode}/>
            }
        </Container>
    );
};

export default RenewQRcode;