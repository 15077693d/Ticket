import React, { useEffect, useState } from 'react';
import {BarContainer} from '../common'

const CampaignBar =  ({campaign}) => {
    const [name,setName] =useState(null)
    const [address,setAddress] =useState(null)
    useEffect(async() => {
        if(campaign){
             setName(await campaign.getCampaignName())
        setAddress(campaign.address)
        }
    },[campaign])
    return (
        <BarContainer>
            <tr>
                <th>Campaign Name.</th>
                <th>Campaign address</th>
            </tr>
            <tr>
                <td>{name}</td>
                <td>{address}</td>
            </tr>
        </BarContainer>
    );
};

export default CampaignBar;