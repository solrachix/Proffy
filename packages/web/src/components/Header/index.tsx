import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/auth'

import Text from '../Text'
import { Container, Power, UserAstronaut } from './styles'

const Header: React.FC = () => {
  const { user, signOut } = useAuth()

  if (!user) {
    return <div />
  }

  return (
    <Container>
      <div>

        <Link className="avatar" to="/profile" >
          {
          user?.avatar
            ? <img src={user?.avatar} alt={`Avatar do ${user?.name}`}/>
            : <UserAstronaut />
          }
          <Text text={user?.name} />
        </Link>

        <Power onClick={signOut} />
      </div>
    </Container>
  )
}

export default Header
