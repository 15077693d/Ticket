import React, { useState } from 'react';
import styled from 'styled-components'
import { SimpleTicket } from '../../ethereum/SimpleTicket'
import {Field} from '../../components/common'
// TransferTicket
const Container = styled.form`
    width:500px;
`
const TransferTicket = ({ simpleTicket,userTicketIds,setRefresh }) => {
    const [selectedId,setSelectedId] = useState("Ticket id.")
    const [receiver, setReceiver] = useState("")
    const handleSubmit = async (e) => {
        e.preventDefault()
        await simpleTicket.transfer(receiver, selectedId)
        setRefresh(new Date())
    }
    return (
        <Container>
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
            <Field>
                <label for="address">Transfer to</label>
                <input value={receiver} onChange={(e) => setReceiver(e.target.value)} placeholder="Receiver address"/>
            </Field>
            <button onClick={handleSubmit}>Transfer</button>
        </Container>
    )
}


export default TransferTicket