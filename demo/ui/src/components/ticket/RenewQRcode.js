import React, {useState} from 'react';
import QRCode from "react-qr-code";
import {Field} from '../../components/common'
import styled from 'styled-components'
import {getAccount} from '../../ethereum/index'
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

const RenewQRcode = ({simpleTicket,userTicketIds}) => {
    const [selectedId,setSelectedId] = useState("Ticket id.")
    const [selectedQRcode, setSelectedQRcode] = useState("")
    const handleChange = async (e) => {
                                        setSelectedId(e.target.value)
                                        setSelectedQRcode(await simpleTicket.getQRcode(e.target.value))
                                        }
    const handleClick = async () => {
        await simpleTicket.renewQRCode(selectedId, await getAccount())
        setSelectedQRcode(await simpleTicket.getQRcode(selectedId))
    }
    return (
        <Container>
            <Form>
            <Field>
                <label for="ticketid">Selected Ticket</label>
                <select value={selectedId} id="ticketid" onChange={handleChange}>
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
                selectedQRcode==""?<NullQRcode/>:<QRCode value={selectedQRcode}/>
            }
        </Container>
    );
};

export default RenewQRcode;