import React, { useRef, useState } from 'react';
import styled from 'styled-components'
import { Field } from '../../components/common'
import { SimpleTicket } from '../../ethereum/SimpleTicket'
import QrReader from 'react-qr-scanner'
// ValidateQRcode
const Container = styled.form`
   width: 600px;
 display: flex;
 justify-content:space-between;
`

const ValidateQRcode = ({simpleTicket}) => {
    const [message, setMessage] = useState("Please show me the QRcode...")
    const handleScan = async (data) => {
        if (data) {
            if (data.text.includes("ticket:")) {
                const [_tokenId, _code] = data.text.split('ticket:')[1].split('=')
                const flag = await simpleTicket.validateQRcode(_tokenId, _code)
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