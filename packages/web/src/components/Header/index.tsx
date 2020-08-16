import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../../contexts/auth'

import Text from '../Text'
import { Container, Power, UserAstronaut, BackIcon } from './styles'

const Header: React.FC = () => {
  const { user, signOut } = useAuth()
  const history = useHistory()
  const [isRoot, setIsRoot] = useState(false)

  useEffect(() => {
    setIsRoot((window.location.pathname === '/'))
  }, [])

  if (!user) {
    return <div />
  }

  return (
    <Container>
      <div>

        {!isRoot && <BackIcon size={40} onClick={() => history.goBack()} />}

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
