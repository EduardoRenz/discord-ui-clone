import React from 'react'
import { Container,Category,AddCategoryIcon } from './styles'
import ChannelButton from '../ChannelButton'

const ServerName : React.FC = () =>{
    return (
       <Container>
            <Category>
                <span>Canais de Texto</span>
                <AddCategoryIcon/>
            </Category>
            <ChannelButton channelName="chat-livre"></ChannelButton>
            <ChannelButton channelName="csgo" selected></ChannelButton>

       </Container>
    )
}

export default ServerName