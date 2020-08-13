import styled from 'styled-components'
import { rgba } from 'polished'

export const Container = styled.div`
  position: fixed;
  display: none;
  flex: 1;
  width: 0px;
  height: 0px;

  background: ${({ theme }) => rgba(theme.colors.themeColors.primary.normal, 0.8)};
  backdrop-filter: blur(4px);

  font-size: 0px;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  z-index: 999999;
`

export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 600px;
  height: 100%;
  padding: 20px;
  /* margin-top: -10%; */

  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-family: Poppins!important;
  }

`

export const Img = styled.img`
  position: absolute;
  width: 60%;

  margin: auto;

  z-index: -1;
  @media (max-width: 850px) {
    width: 100%;
  }
`

export const Icon = styled.img`
  width: 100px;
`
export const Button = styled.button`
  width: 176px;
  height: 56px;
  margin-top: 4rem;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  text-decoration: none;
  color: ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.themeColors.secondary};
  border-radius: 8px;
  border: none;

  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    opacity: 0.8;
  }
`
