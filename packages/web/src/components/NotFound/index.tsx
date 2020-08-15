import React from 'react'
import styled from 'styled-components'

import { ReactComponent as NotFoundIcon } from '../../assets/images/notFound.svg'
const Container = styled.div`
  /* position: absolute; */
  display: flex;
  flex: 1;

  width: 100%;
  height: 100%;

  background: ${({ theme }) => theme.colors.themeColors.tertiary};

  justify-content: center;
  align-items: center;
  svg {
    width: 60%;
    height: 60%;
  }
`

const NotFound: React.FC = () => {
  return (
    <Container>
      <NotFoundIcon />
    </Container>
  )
}

export default NotFound
