import React from 'react'
import { Container, Messages, InputWrapper, Input, InputIcon } from './styles'
import ChannelMessage, {Mention} from '../ChannelMessage'

const ChannelData : React.FC = () =>{
    return (
       <Container>
           <Messages>
            <ChannelMessage  author="Eduardo" date="2020-02-01 08:43" content="Hoje não é meu aniversário" />
            <ChannelMessage  author="André" date="2020-02-01 08:44" content={
                <>
                <Mention>@EduardoRenz</Mention>  Estou em reunião
                </>
                } isBot />
           </Messages>
           <InputWrapper>
                <Input type="text" placeholder="Conversar em #chat-livre" />
                <InputIcon/>

           </InputWrapper>

       </Container>
    )
}

export default ChannelData