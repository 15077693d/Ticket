import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { SimpleTicket } from '../resources/web3'

// ShowAllOwner
const ShowAllOwnerTable = styled.table`
    border: 1px solid black;
    th, td{
        border: 1px solid black;
    }
`

const ShowAllOwner = ({refresh}) => {
    const [owners, setOwners] = useState([])
    useEffect(async () => {
        setOwners(await SimpleTicket.showOwners())
    }, [refresh])
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

export default ShowAllOwner