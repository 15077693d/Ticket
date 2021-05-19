import React, {useRef, useState} from 'react';
import styled from 'styled-components'
import {Field} from '../components/common'
import {SimpleTicket} from '../resources/web3'
// ValidateQRcode
const Container = styled.form`
    width:500px;
`
const ValidateQRcode = ({ userTicketIds }) => {
    const ticketIdRef = useRef()
    const codeRef = useRef()
    const [flag, setFlag] = useState("Please submit info...")
    const handleSubmit = async (e) => {
        e.preventDefault();
        const flag = await SimpleTicket.validateQRcode(ticketIdRef.current.value,codeRef.current.value)
        setFlag(String(flag))
    }
    return (
        <Container>
            <Field>
                <label for="Ticket id.">Ticket id.</label>
                <input ref={ticketIdRef} placeholder="Ticket id."/>
            </Field>
            <Field>
                <label for="Ticket id.">Ticket code</label>
                <input ref={codeRef} placeholder="Ticket code"/>
            </Field>
            <button onClick={handleSubmit}>Validate</button>
            <Field>
                <label for="Ticket id.">Validation result</label>
                <div>{flag}</div>
            </Field>
        </Container>
    )
}
export default ValidateQRcode;