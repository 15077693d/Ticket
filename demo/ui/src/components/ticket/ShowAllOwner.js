import React, { useState, useEffect } from 'react';
import {Table} from '../common'
// ShowAllOwner
const ShowAllOwner = ({simpleTicket,refresh}) => {
    const [owners, setOwners] = useState([])
    useEffect(async () => {
        if(simpleTicket){
            setOwners(await simpleTicket.showOwners())
        }
    }, [refresh, simpleTicket])
    return (
        <Table>
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
        </Table>
    );
};

export default ShowAllOwner