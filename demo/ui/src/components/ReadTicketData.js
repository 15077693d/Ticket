import React, { useRef, useState } from 'react';
import { Field } from '../components/common'
import styled from 'styled-components'
import { SimpleTicket } from '../resources/web3'
// ReadTicketData
const Container = styled.form`
    width:500px;
`
const ReadTicketData = ({ userTicketIds }) => {
    const ticketIdRef = useRef()
    const [data, setData] = useState("Select a ticket...")
    const handleChange = async () => {
        const _data = await SimpleTicket.getData(ticketIdRef.current.value)
        setData(_data)
    }
    return (
        <Container>
            <Field>
                <label for="ticketid">Selected Ticket</label>
                <select id="ticketid" ref={ticketIdRef} onChange={handleChange}>
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
            <div>{data}</div>
        </Container>
    );
};

export default ReadTicketData;