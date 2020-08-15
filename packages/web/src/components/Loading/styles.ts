import styled from 'styled-components'

import { ReactComponent as logoIcon } from '../../assets/images/icons/logo.svg'

export const Container = styled.div`
  position: fixed;
  display: none;
  flex: 1;
  width: 0px;
  height: 0px;
  /* top: 0;
  left: 0; */

  background: ${({ theme }) => theme.colors.themeColors.primary.normal};

  font-size: 0px;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  z-index: 999999;
`

export const Img = styled.img`
  position: absolute;
  width: 60%;

  margin: auto;

  z-index: -1;

  animation: loading 10s linear infinite;

  @keyframes loading {
    0% {
      transform: translateY(0px)
    }
    25% {
      transform: translateY(10px)
    }
    50% {
      transform: translateY(0px)
    }
    75% {
      transform: translateY(-10px)
    }
    100% {
      transform: translateY(0px)
    }
  }

  @media (max-width: 850px) {
    width: 100%;
  }
`

export const LogoIcon = styled(logoIcon)`
  width: 10rem;
  height: 10rem;

  margin: auto;

  animation: loading 6s linear infinite;

  @keyframes loading {
    0% {
      transform: translateY(0px)
    }
    25% {
      transform: translateY(10px)
    }
    50% {
      transform: translateY(0px)
    }
    75% {
      transform: translateY(-10px)
    }
    100% {
      transform: translateY(0px)
    }
  }
`
