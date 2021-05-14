import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { SimpleTicket } from '../resources/web3'

// TransferTicket
const TransferTicketContainer = styled.form`
    width:500px;
`

const Field = styled.div`
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom:20px;
`
export const TransferTicket = ({ user }) => {
    const [userTicketIds, setUserTicketIds] = useState([])
    const [selectedId,setSelectedId] = useState("Ticket id.")
    const [receiver, setReceiver] = useState("")
    const handleSubmit = async () => {
        
    }
    useEffect(async () => {
        const owners = await SimpleTicket.showOwners()
        let _userTicketIds = []
        for (let i = 0; i < owners.length; i++) {
            if (owners[i] == user) {
                _userTicketIds.push(i)
            }
        }
        setUserTicketIds(_userTicketIds)
    }, [user])
    return (
        <TransferTicketContainer>
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
            <button>Transfer</button>
        </TransferTicketContainer>
    )
}


// ShowAllOwner
const ShowAllOwnerTable = styled.table`
    border: 1px solid black;
    th, td{
        border: 1px solid black;
    }
`

export const ShowAllOwner = () => {
    const [owners, setOwners] = useState([])
    useEffect(async () => {
        setOwners(await SimpleTicket.showOwners())
    }, [])
    return (
        <ShowAllOwnerTable>
            <tr>
                <th>Ticket id.</th>
                <th>Owners</th>
            </tr>
            {
                owners.map(
                    (owner, i) =>
                        <tr>
                            <td>{i}</td>
                            <td>{owner}</td>
                        </tr>
                )
            }
        </ShowAllOwnerTable>
    );
};

