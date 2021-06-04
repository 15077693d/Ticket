import {useState, useEffect} from 'react';

 function useTicket(simpleTicket) {
    const [ticketTypes, setTicketTypes] = useState([])
    useEffect(async () => {
        if (simpleTicket){
        let types = []
        const typeNames =await simpleTicket.getTypeNames()
        for (let i = 0; i < typeNames.length; i++) {
                let result = await simpleTicket.getTicketType(typeNames[i])
                types.push(
                    {
                        name:result[0],
                        price:result[1],
                        maximum:result[2],
                        available:result[3]
                    }
                )
            }
        setTicketTypes(types)
    }
    },[simpleTicket])
    return {ticketTypes}
};

export default useTicket;