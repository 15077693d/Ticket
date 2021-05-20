import React, { useRef, useState } from 'react';
import styled from 'styled-components'
import { Field } from '../components/common'
import { SimpleTicket } from '../resources/web3'
import QrReader from 'react-qr-scanner'
// ValidateQRcode
const Container = styled.form`
   width: 600px;
 display: flex;
 justify-content:space-between;
`
const _ValidateQRcode = ({ }) => {
    const ticketIdRef = useRef()
    const codeRef = useRef()
    const [flag, setFlag] = useState("Please submit info...")
    const handleSubmit = async (e) => {
        e.preventDefault();
        const flag = await SimpleTicket.validateQRcode(ticketIdRef.current.value, codeRef.current.value)
        setFlag(String(flag))
    }
    return (
        <Container>
            <Field>
                <label for="Ticket id.">Ticket id.</label>
                <input ref={ticketIdRef} placeholder="Ticket id." />
            </Field>
            <Field>
                <label for="Ticket id.">Ticket code</label>
                <input ref={codeRef} placeholder="Ticket code" />
            </Field>
            <button onClick={handleSubmit}>Validate</button>
            <Field>
                <label for="Ticket id.">Validation result</label>
                <div>{flag}</div>
            </Field>
        </Container>
    )
}

const ValidateQRcode = ({ }) => {
    const [message, setMessage] = useState("Please show me the QRcode...")
    const handleScan = async (data) => {
        if (data) {
            if (data.text.includes("ticket:")) {
                const [_tokenId, _code] = data.text.split('ticket:')[1].split('=')
                const flag = await SimpleTicket.validateQRcode(_tokenId, _code)
                if (flag) {
                    setMessage(`Please in, Your ticket id is ${_tokenId}.`)
                } else {
                    setMessage(`Please provide vaild QR Code.`)
                }
            } else {
                setMessage(`Please provide vaild QR Code.`)
            }
        }
    }
    const handleError = (err) => {
        console.error(err)
    }
    return (
        <Container>
            <QrReader
                delay={5000}
                style={{
                    height: 240,
                    width: 320,
                }}
                onError={handleError}
                onScan={handleScan}
            />
            <Field>
                <label for="Ticket id.">Validation result</label>
                <div>{message}</div>
            </Field>
        </Container>
    )
}

export default ValidateQRcode;