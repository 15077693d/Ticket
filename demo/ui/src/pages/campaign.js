import React, { useState }  from 'react';
import  {Container,Left,Right} from '../components/common'
import {ShowAllCampaign, CreateCampaign} from "../components/campaign/index"
const Campaign = () => {
    let rightElement;
    const [page, setPage] = useState("ShowAllCampaign")
    switch (page) {
        case "ShowAllCampaign":
            rightElement = <ShowAllCampaign/>
            break;
        case "CreateCampaign":
            rightElement = <CreateCampaign/>
            break;
        default:
            break;
    }
    return (
        <div>
        <Container>
          <Left>
            <button onClick={() => setPage("CreateCampaign")}>Create campaign</button>
            <button onClick={() => setPage("ShowAllCampaign")}>Show all campaigns</button>
          </Left>
          <Right>
            {rightElement}
          </Right>
        </Container>
      </div>
    );
};

export default Campaign;