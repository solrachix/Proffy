import styled from 'styled-components'
import { darken } from 'polished'

export const PageTeacherList = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 700px;

  main {
    margin: 3.2rem auto;
    width: 90%;
  }

  @media (min-width: 700px) {
    max-width: 100%;

    main {
      padding: 3.2rem 0;
      max-width: 740px;
      margin: 0 auto;
    }
  }
`

export const SearchTeachers = styled.form`
  margin-top: 3.2rem;

  button {
    width: 100%;
    height: 5.6rem;
    background: ${({ theme }) => theme.colors.themeColors.secondary};
    color: ${({ theme }) => theme.colors.white};
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

  button:hover {
    background: ${({ theme }) => darken(0.1, theme.colors.themeColors.secondary)};
  }

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 16px;
    position: absolute;
    bottom: -28px;
  }
`
