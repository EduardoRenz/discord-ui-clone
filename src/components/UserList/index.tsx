import React from 'react'
import { Container, Role, User, Avatar  } from './styles'


const UserRow : React.FC = () =>{
    <User>
        <Avatar />
        <strong>{nickname}</strong>
        {isBot && <span>Bot</span>}
    </User>
}

const UserList : React.FC = () =>{
    return (
       <Container>
           <Role>
               Disponivel - 1
           </Role>
           <UserRow></UserRow>


           <Role>
               Offline - 18
           </Role>
           <UserRow isBot></UserRow>

       </Container>
    )
}

export default UserList