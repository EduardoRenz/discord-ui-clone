import React from 'react';
import { Container,Separator } from './styles';
import ServerButton from '../ServerButon'

const ServerList: React.FC = () => {
  return (
  <Container>
      <ServerButton isHome />
      <Separator/>
      <ServerButton hasNotifications />
      <ServerButton mentions={2} />
      <ServerButton  />
      <ServerButton  />
      <ServerButton  />
      <ServerButton  />
      <ServerButton />
      <ServerButton />
      <ServerButton mentions={20} />
      <ServerButton  />
      <ServerButton />


  </Container>
  )
}

export default ServerList;