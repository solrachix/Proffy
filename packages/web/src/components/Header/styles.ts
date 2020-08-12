import styled from 'styled-components'
import { FiPower } from 'react-icons/fi'
import { FaUserAstronaut } from 'react-icons/fa'

export const Container = styled.div`
  width: 100%;
  /* height: 50px; */

  background: ${props => props.theme.colors.themeColors.primary.normal};

  > div {
    width: 90%;
    margin: 0 auto;
    padding: 1.4rem 0;

    color: ${props => props.theme.colors.white};

    display: flex;
    justify-content: space-between;
    align-items: center;

    > img {
      height: 1.4rem;
      margin-right: 10px;
    }

    .avatar {
      display: flex;
      align-items: center;

      text-decoration: none;
      cursor: pointer;
      transition: ease-in-out 0.4s;
      &:hover {
        opacity: 0.6;
      }
    }
    @media (min-width: 700px) {
      max-width: 1100px;
    }
 }
`

export const Power = styled(FiPower)`
  width: 30px;
  height: 30px;
  padding: 6px;

  color: ${({ theme }) => theme.colors.white};
  background:  ${({ theme }) => theme.colors.themeColors.primary.lighter};
  border-radius: 4px;

  cursor: pointer;
  transition: ease-in-out 0.4s;
  &:hover {
    opacity: 0.6;
  }
`

export const UserAstronaut = styled(FaUserAstronaut)`
  width: 2rem;
  height: 2rem;
  margin-right: 10px;

  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.themeColors.primary.light};
  border-radius: 50px;
`
