import React from 'react';
import {BarContainer} from '../common'
const TicketBar = ({ticketTypes}) => {
    return (
        <BarContainer>
            <tr>
                <th>Ticket Category</th>
                <th>Price</th>
                <th>Maximum</th>
                <th>Available</th>
            </tr>
            {
                 ticketTypes.map(
                    ticketType => 
                    <tr>
                <td>{ticketType.name}</td>
                <td>{ticketType.price}</td>
                <td>{ticketType.maximum}</td>
                <td>{ticketType.available}</td>
            </tr>)
            }
        </BarContainer>
    );
};

export default TicketBar;