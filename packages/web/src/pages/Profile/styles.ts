import styled from 'styled-components'
import { darken } from 'polished'

import { FiCamera } from 'react-icons/fi'
import { FaUserAstronaut } from 'react-icons/fa'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  @media (min-width: 700px) {
    max-width: 100vw;

    .page-header .header-content {
      margin-bottom: 0;
    }
  }

`

export const Main = styled.form`
  width: 100%;
  max-width: 74rem;
  margin: -3.2rem auto 3.2rem;
  padding-top: 6.4rem;

  background: ${props => props.theme.colors.themeColors.tertiary};
  border: 1px solid ${props => darken(0.1, props.theme.colors.themeColors.tertiary)};
  /* box-shadow: 0px 0px 20px 0px ${props => darken(0.1, props.theme.colors.themeColors.tertiary)}; */
  border-radius: 0 8rem;

  overflow: hidden;

  label {
    color:  ${props => props.theme.colors.themeColors.text.dark};
  }

  fieldset {
    border: 0;
    padding: 0 2.4rem;

    overflow: hidden;

    > p {
      width: 100%;
      margin-bottom: 20px;

      text-align: center;
      color:  ${props => props.theme.colors.themeColors.text.dark};

      a {
        background: none;
        border: 0;
        color: ${props => props.theme.colors.themeColors.primary.normal};

        font: 700 1.6rem Archivo;
        cursor: pointer;
        transition: color 0.2s;

        &:hover {
          color: ${props => darken(0.1, props.theme.colors.themeColors.primary.dark)};
        }
      }
    }

  }

  fieldset + fieldset {
    margin-top: 6.4rem;
  }

  fieldset legend {
    font: 700 2.4rem Archivo;
    color: ${props => props.theme.colors.themeColors.text.normal};
    margin-bottom: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 1.6rem;
    border-bottom: 1px solid  ${props => darken(0.1, props.theme.colors.themeColors.tertiary)};
  }
  fieldset legend button {
    background: none;
    border: 0;
    color: ${props => props.theme.colors.themeColors.primary.normal};

    font: 700 1.6rem Archivo;
    cursor: pointer;
    transition: color 0.2s;
  }

  fieldset legend button:hover {
    color: ${props => darken(0.1, props.theme.colors.themeColors.primary.dark)};
  }

  fieldset .input-block input{
    color: ${props => darken(0.2, props.theme.colors.themeColors.text.normal)};
  }
  fieldset .input-block + .textarea-block,
  fieldset .select-block + .input-block {
    margin-top: 2.4rem;
  }
  .classData .input-block {
    margin-bottom: 0rem;
  }

  footer {
    padding: 4rem 2.4rem;
    background: ${props => props.theme.colors.themeColors.tertiary};
    border-top: 1px solid ${props => darken(0.1, props.theme.colors.themeColors.tertiary)};
    margin-top: 6.4rem;
  }

  footer p {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    line-height: 2.4rem;
    text-align: center;
    color:  ${props => props.theme.colors.themeColors.text.dark};
  }

  /* footer p img {
    margin-right: 2rem;
  } */

  footer button {
    width: 100%;
    height: 5.6rem;
    background: ${props => props.theme.colors.themeColors.secondary};
    color: ${props => props.theme.colors.white};
    border: 0;
    border-radius: 0.8rem;
    cursor: pointer;
    font: 700 1.6rem Archivo;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: background-color 0.2s;
    margin-top: 3.2rem;
  }

  footer button:hover {
    background: ${props => darken(0.1, props.theme.colors.themeColors.secondary)};
  }


  @media (min-width: 700px) {
    fieldset {
      padding: 0 6.4rem;
    }

    .schedule-item {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 0.25fr;
      column-gap: 1.6rem;

      .input-block {
        margin-top: 0 !important;
      }

      .trash {
        display: flex;
        width: 100%;

        justify-content: center;
        align-items: center;

        svg {
          cursor: pointer;

          color: ${({ theme }) => theme.colors.red};

          &:hover{
            color: ${({ theme }) => darken(0.1, theme.colors.red)};
          }
        }
      }
    }

    footer {
      padding: 4rem 6.4rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    footer p {
      justify-content: space-between;
    }

    footer button {
      width: 20rem;
      margin-top: 0;
    }
  }
`

export const UserAstronaut = styled(FaUserAstronaut)`
  width: 16rem;
  height: 16rem;
  margin-top: 50px;
  margin-bottom: 20px;

  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.themeColors.primary.light};
  border-radius: 50%;

  z-index: 15;
`

export const Avatar = styled.img`
  width: 16rem;
  height: 16rem;
  margin-top: 50px;
  margin-bottom: 20px;

  background: ${({ theme }) => theme.colors.themeColors.primary.light};
  border-radius: 50%;
`

export const ChangeAvatar = styled.button`
  position: absolute;
  width: 5rem;
  height: 5rem;

  margin-top: 4%;
  margin-left: 14%;

  background: ${({ theme }) => theme.colors.themeColors.secondary};
  border-radius: 50%;
  border: none;
  outline: none;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 20;
  cursor: pointer;
`

export const Camera = styled(FiCamera)`
  width: 50%;
  height: 50%;

  color: ${({ theme }) => theme.colors.white};
`
