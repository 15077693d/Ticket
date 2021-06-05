import {useState, useEffect} from 'react';
import { getAccount,SimpleTicket,Campaign } from '../ethereum/index'
const useCampaignAddress = (campaignAddress,refresh) => {
    const [user, setUser] = useState("")
    const [userTicketIds, setUserTicketIds] = useState([])
    const [simpleTicket, setSimpleTicket] = useState(null)
    const [campaign, setCampaign] = useState(null)
    useEffect(async ()=>{
        let _campaign = new Campaign(campaignAddress)
        setCampaign(_campaign)
        const ticketAddress = await _campaign.getTicketAddress()
        setUser(await getAccount())
        let _simpleTicket = new SimpleTicket(ticketAddress)
        await setSimpleTicket(_simpleTicket)
        const owners = await _simpleTicket.showOwners()
        let _userTicketIds = []
        for (let i = 0; i < owners.length; i++) {
        if (owners[i] == user) {
            _userTicketIds.push(i)
        }
        }
        setUserTicketIds(_userTicketIds)
    },[refresh, user])
    return {
        user,
        userTicketIds,
        simpleTicket,
        campaign
    }
};

export default useCampaignAddress;