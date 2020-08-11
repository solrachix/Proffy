import styled from 'styled-components'
import { darken, rgba } from 'polished'

export const Container = styled.div`
    display: flex;
    width: 100%;
    max-width: 1100px;
    min-height: 100%;
    height: auto;

    margin: 0 auto;
    padding: 50px 30px 50px 30px;

    flex:1;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 780px) {
      padding: 30px 30px 0 30px;
    }
`

export const Title = styled.div`
  display: flex;
  width: 50%;
  max-width: calc(424px - 10px);
  height: 100px;
  padding: 10px;

  flex:1;
  flex-direction: column;
  justify-content: center;
  align-items: justify;

  @media screen and (max-width: 780px) {
    align-items: center;
  }
`

export const Content = styled.div`
  position: relative;
  /* width: calc(600px - 40px); */
  width: 600px;
  height: auto;
  /* padding: 30px 40px; */

  background: ${({ theme }) => theme.colors.themeColors.tertiary};
  border-radius: 4px;
  box-shadow: 0px 0px 25px 0px ${({ theme }) => darken(0.2, theme.colors.themeColors.tertiary)};
  box-sizing: border-box;

  overflow: hidden;
  z-index: 15;

  input[type='checkbox'] {
    display: inline-block;
    width: 20px;
    margin: 0 10px 0 0;
  }

  .form-toggle {
    z-index: 10;
    position: absolute;
    top: 60px;
    right: 60px;
    background: ${({ theme }) => theme.colors.white};
    width: 60px;
    height: 60px;
    border-radius: 100%;
    -webkit-transform-origin: center;
            transform-origin: center;
    -webkit-transform: translate(0, -25%) scale(0);
            transform: translate(0, -25%) scale(0);
    opacity: 0;
    cursor: pointer;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }
  .form-toggle:before, .form-toggle:after {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 30px;
    height: 4px;
    background: ${({ theme }) => theme.colors.themeColors.primary.normal};
    -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
  }
  .form-toggle:before {
    -webkit-transform: translate(-50%, -50%) rotate(45deg);
            transform: translate(-50%, -50%) rotate(45deg);
  }
  .form-toggle:after {
    -webkit-transform: translate(-50%, -50%) rotate(-45deg);
            transform: translate(-50%, -50%) rotate(-45deg);
  }
  .form-toggle.visible {
    -webkit-transform: translate(0, -25%) scale(1);
            transform: translate(0, -25%) scale(1);
    opacity: 1;
  }

  .two {
    label {
      ${({ theme }) => theme.colors.themeColors.text.normal};
    }

    input {
      background: transparent;
      color: ${({ theme }) => theme.colors.white};
      border-color: ${({ theme }) => rgba(theme.colors.themeColors.primary.dark, 0.4)};
      box-shadow: 0px 13px 7px -10px ${({ theme }) => rgba(theme.colors.themeColors.primary.dark, 0.4)};
    }

    button {
      background: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.themeColors.primary.normal};
    }


    .input-block:focus-within::after {
      background: ${({ theme }) => theme.colors.white}!important;
    }
  }

  .form-remember {
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0;
    text-transform: none;
    line-height: 14px;

    display: grid;
    grid-template-columns: 0.1fr 0.8fr 2fr;
    grid-template-rows: 1fr;
  }

  .form-recovery {
    display: flex;
    width: 100%;

    color: ${({ theme }) => theme.colors.themeColors.primary.normal};
    font-size: 12px;
    text-decoration: none;

    justify-content: flex-end;
  }
  .form-panel {
    padding: 60px calc(5% + 60px) 60px 60px;
    box-sizing: border-box;

    @media screen and (max-width: 450px) {
      padding: 60px calc(5% + 30px) 60px 30px;
    }
  }
  .form-panel.one:before {
    content: '';
    display: block;
    opacity: 0;
    visibility: hidden;
    -webkit-transition: 0.3s ease;
    transition: 0.3s ease;
  }
  .form-panel.one.hidden:before {
    display: block;
    opacity: 1;
    visibility: visible;
  }
  .form-panel.two {
    z-index: 5;
    position: absolute;
    top: 0;
    left: 95%;
    background: ${({ theme }) => theme.colors.themeColors.primary.normal};
    width: 100%;
    min-height: 100%;
    padding: 60px calc(10% + 60px) 60px 60px;
    -webkit-transition: 0.3s ease;
    transition: 0.3s ease;
    cursor: pointer;

    @media screen and (max-width: 450px) {
      padding: 30px calc(5% + 30px) 30px 30px;
    }
  }
  .form-panel.two:before, .form-panel.two:after {
    content: '';
    display: block;
    position: absolute;
    top: 60px;
    left: 1.5%;
    background: ${({ theme }) => theme.colors.white};
    height: 30px;
    width: 2px;
    -webkit-transition: 0.3s ease;
    transition: 0.3s ease;
  }
  .form-panel.two:after {
    left: 3%;
  }
  .form-panel.two:hover {
    left: 93%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  .form-panel.two:hover:before, .form-panel.two:hover:after {
    opacity: 0;
  }
  .form-panel.two.active {
    left: 10%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    cursor: default;
  }
  .form-panel.two.active:before, .form-panel.two.active:after {
    opacity: 0;
  }
  .form-header {
    margin: 0 0 40px;
  }
  .form-header h1 {
    padding: 4px 0;
    color: ${({ theme }) => theme.colors.themeColors.primary.normal};
    font-size: 24px;
    font-weight: 700;
    text-transform: uppercase;
  }
  .two .form-header h1 {
    position: relative;
    z-index: 40;
    color: ${({ theme }) => theme.colors.white};
  }
`

export const Button = styled.button`
  width: 100%;
  height: 5.6rem;
  background: ${props => props.theme.colors.themeColors.primary.normal};
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
`
