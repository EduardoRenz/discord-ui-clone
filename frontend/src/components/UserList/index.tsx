import React from 'react'
import { Container, Role, User, Avatar  } from './styles'

interface UserProps {
    nickname:String
    isBot?:Boolean
}

const UserRow : React.FC<UserProps>= ({nickname,isBot}) =>{
    return (
        <User>
        <Avatar className={isBot ? 'bot' : ''} />
        <strong>{nickname}</strong>
        {isBot && <span>Bot</span>}
        </User>
    )

}

const UserList : React.FC = () =>{
    return (
       <Container>
           <Role>
               Disponivel - 1
           </Role>
           <UserRow nickname="Eduardo"></UserRow>


           <Role>
               Offline - 18
           </Role>
           <UserRow nickname="André" isBot></UserRow>
           <UserRow nickname="Fukabno" ></UserRow>
           <UserRow nickname="Fukabno" ></UserRow>
           <UserRow nickname="Fukabno" ></UserRow>
           <UserRow nickname="Fukabno" ></UserRow>
           <UserRow nickname="Fukabno" ></UserRow>
           <UserRow nickname="Fukabno" ></UserRow>
         

       </Container>
    )
}

export default UserList