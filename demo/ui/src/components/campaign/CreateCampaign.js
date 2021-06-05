import React, {useRef} from 'react';
import {Field} from '../../components/common'
import styled from 'styled-components'
import {CampaignFactory} from '../../ethereum/CampaignFactory'

const Container = styled.form`
    width:500px;
`

const CreateCampaign = () => {
    const baseURIRef = useRef()
    const campaignNameRef = useRef()
    const handleSubmit = async (e) => {
        e.preventDefault()
        CampaignFactory.addCampaign(
            baseURIRef.current.value,
            campaignNameRef.current.value
        )
    }
    return (
        <Container>
            <Field>
                <label htmlFor="baseURI">Base URI</label>
                <input  ref={baseURIRef} placeholder="baseURI"/>
            </Field>
            <Field>
                <label htmlFor="campaignName">Campaign Name</label>
                <input  ref={campaignNameRef} placeholder="campaignName"/>
            </Field>
            <button onClick={handleSubmit}>Create!</button>
        </Container>
    )
};

export default CreateCampaign;