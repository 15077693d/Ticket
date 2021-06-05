import React,{useState, useEffect} from 'react';
import {Table} from '../common'
import {CampaignFactory} from '../../ethereum/CampaignFactory'
import {Campaign} from '../../ethereum/Campaign'
import {Link} from 'react-router-dom'
const ShowAllCampaign = () => {
    const [campaigns, setCampaigns] = useState([])
    useEffect(async () => {
        let campaign
        let _campaigns = []
        let namePromise = []
        let addressPromise = []
        let amountPromise = []
        const address = await CampaignFactory.getCampaignAddresses()
        for (let i = 0; i < address.length; i++) {
            campaign = new Campaign(address[i])
            namePromise.push(campaign.getCampaignName())
            addressPromise.push(campaign.getTicketAddress())
        }
        let names = await Promise.all(namePromise)
        let ticketAddresses = await Promise.all(addressPromise)
        let amounts = await Promise.all(amountPromise)
        for (let i = 0; i < address.length; i++) {
            _campaigns.push(
               {
                name:names[i],
                address:address[i],
                ticketAddress:ticketAddresses[i],
                amount:amounts[i]
               } 
            )
        }
        setCampaigns(_campaigns)
    }, [])
    return (
        <Table>
            <tr>
                <th>Campaign name</th>
                <th>Ticket address</th>
            </tr>
            {
                campaigns.map(
                    (campaign) =>
                        <tr>
                            <td><Link to={`/campaign/${campaign.address}`}><button>{campaign.name}</button></Link></td>
                            <td>{campaign.ticketAddress}</td>
                        </tr>
                )
            }
        </Table>
    );
};

export default ShowAllCampaign;