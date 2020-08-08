import styled from 'styled-components'
import { darken } from 'polished'

export const TeacherItemComponent = styled.article`
  background: ${props => props.theme.colors.themeColors.tertiary};
  color: ${props => props.theme.colors.themeColors.text.normal};
  border: 1px solid ${props => darken(0.1, props.theme.colors.themeColors.tertiary)};
  box-shadow: 0px 0px 20px 0px ${props => darken(0.1, props.theme.colors.themeColors.tertiary)};
  border-radius: 0.8rem;

  margin-top: 2.4rem;
  overflow: hidden;
  header {
    padding: 3.2rem 2rem;
    display: flex;
    align-items: center;
    img {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
      transition: all 0.2s ease 0s, transform 0.2s ease 0s;
      &:hover {
        transform: translateY(-10px);
      }
    }
    div {
      margin-left: 2.4rem;
      strong {
        font: 700 2.4rem Archivo;
        display: block;
        color: ${props => props.theme.colors.themeColors.primary.normal};
      }
      span {
        font-size: 1.4rem;
        font-style: italic;

        display: block;
        margin-top: 0.4rem;
      }
    }
  }
  > p {
    padding: 0 2rem;
    font-size: 1.6rem;
    line-height: 2.8rem;
  }
  footer {
    padding: 3.2rem 2rem;
    background: ${props => props.theme.colors.themeColors.tertiary};
    border-top: 1px solid ${props => darken(0.1, props.theme.colors.themeColors.tertiary)};

    margin-top: 3.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p strong {
      color: ${props => props.theme.colors.themeColors.primary.normal};
      font-size: 1.6rem;
      display: block;
    }
    button {
      width: 20rem;
      height: 5.6rem;
      background: ${props => props.theme.colors.themeColors.secondary};
      color: ${props => props.theme.colors.white};
      border: 0;
      border-radius: 0.8rem;
      cursor: pointer;
      font: 700 1.4rem Archivo;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      transition: 0.2;
      transition: all 0.2s ease 0s, transform 0.2s ease 0s;
      &:hover {
        transform: translateY(-10px);
        border-color: ${props => props.theme.colors.themeColors.text.normal};
        background: ${props => darken(0.02, props.theme.colors.themeColors.secondary)};
      }
    }
  }
  @media (min-width: 700px) {
    header,
    footer {
      padding: 3.2rem;
    }
    > p {
      padding: 0 3.2rem;
    }
    footer p strong {
      display: initial;
      margin-left: 1.6rem;
    }
    footer button {
      width: 24.5rem;
      font-size: 1.6rem;
      justify-content: center;
    }
    footer button img {
      margin-right: 1.6rem;
    }
  }
`
