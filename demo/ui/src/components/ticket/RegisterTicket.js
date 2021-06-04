import React, { useRef } from 'react';
import {Field} from '../../components/common'
import styled from 'styled-components'
// TransferTicket
const Container = styled.form`
    width:500px;
`
const RegisterTicket = ({simpleTicket, setRefresh}) => {
    const categoryRef = useRef()
    const priceRef = useRef()
    const maximumRef = useRef()
    const handleSubmit = async (e) => {
        e.preventDefault()
        await simpleTicket.register(categoryRef.current.value,
            priceRef.current.value,
            maximumRef.current.value)
        setRefresh(new Date())
    }
    return (
        <Container>
            <Field>
                <label for="category">Ticket Category</label>
                <input  ref={categoryRef} placeholder="Ticket Category"/>
            </Field>
            <Field>
                <label for="price">Price</label>
                <input type="number" ref={priceRef} placeholder="Price"/>
            </Field>
            <Field>
                <label for="maximum">Maximum Amount</label>
                <input type="number" ref={maximumRef} placeholder="Maximum Amount"/>
            </Field>
            <button onClick={handleSubmit}>Register</button>
    </Container>
    );
};

export default RegisterTicket;