import React,{useRef} from 'react';
import {Field} from '../../components/common'
import styled from 'styled-components'
// TransferTicket
const Container = styled.form`
    width:500px;
`
const BuyTicket = ({simpleTicket, ticketTypes, setRefresh}) => {
    const categoryRef = useRef()
    const handleSubmit = async (e) => {
       e.preventDefault()
       await simpleTicket.buy(categoryRef.current.value)
       setRefresh(new Date())
    }
    return (
        <Container>
            <Field>
                <label for="category">Ticket Category</label>
                 <select ref={categoryRef}>
                 <option selected disabled>Ticket Category</option>
                 {
                    ticketTypes.map(
                        ticketType => <option key={ticketType.name} value={ticketType.name}>{ticketType.name}</option>
                    )
                 }
                </select>
            </Field>
            <button onClick={handleSubmit}>Buy</button>
    </Container>
);
                }
export default BuyTicket;