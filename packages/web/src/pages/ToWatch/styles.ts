import styled, { css } from 'styled-components'
import { rgba } from 'polished'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  background: ${({ theme }) => theme.colors.themeColors.primary.dark};

  *::-webkit-scrollbar {
    width: 3px;
    background: ${({ theme }) => theme.colors.themeColors.primary.lighter};
  }
`

export const Content = styled.div`
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;

  @media (max-width: 1366px)
  {
    padding: 3.5rem 3rem;
  }
`

export const VideoContainer = styled.div`
  display: flex;
  width: 100%;
  /* max-height: 500px; */
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  .videosAvailable {
    position: relative;
    width: 100%;
    /* height: 100%; */

    margin: 20px 0px 0px;
    padding-top: 0px;

    display: flex;
    /* flex: 1; */

    background: ${({ theme }) => theme.colors.themeColors.primary.normal};
    border-radius: 5px;

    overflow-y: auto;

    @media (max-width: 768px) {
      width: 100%;
    }
    @media (min-width: 768px) {
      margin: 0px 0px 0px 30px;
      width: 350px;
    }

    > div {
      position: absolute;
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      top: 0px;
      left: 0px;

      @media (max-width: 768px) {
        height: 300px;
        position: relative;
      }
      ul {
        display: flex;
        flex: 1 1 0%;
        margin: 30px;

        flex-direction: column;
      }
    }

  }
`

export const Player = styled.div`
  width: 100%;
  flex: 3;

    video {
    height: 100%;

    background: ${({ theme }) => theme.colors.themeColors.primary.normal};
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    outline: none;
  }
  .control {
    height: 80px;
    padding: 16px;

    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;

    background: ${({ theme }) => theme.colors.themeColors.primary.normal};
    border-radius: 0px 0px 5px 5px;

    .buttons{
      display: flex;
      -webkit-box-align: center;
      align-items: center;

      > * + * {
        margin-left: 8px;
      }
    }
    button {
      width: 40px;
      height: 40px;

      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      flex-shrink: 0;

      background: ${({ theme }) => theme.colors.themeColors.primary.lighter};
      border: none;
      border-radius: 5px;

      cursor: pointer;
      transition: background 0.2s ease 0s;
    }
  }

`

interface ItemProps {
  actived?: boolean
}
export const Item = styled.li<ItemProps>`
  display: flex;

  font-size: 14px;

  -webkit-box-align: center;
  flex-direction: row;
  align-items: center;

  &:not(:first-child) {
    margin-top: 20px;

    &:before {
      position: absolute;
      content: "";
      width: 2px;
      height: 4rem;

      margin-left: 4px;
      margin-top: -32px;

      background: ${({ theme }) => theme.colors.themeColors.primary.lighter};
    }
  }

  a {
    ${({ actived, theme }) => actived ? css`
      color: ${theme.colors.white};
      font-weight: bold;
    ` : css`
    color: ${rgba(theme.colors.white, 0.6)};
    `};

    text-decoration: none;
  }
  button {
    position: relative;
    width: 10px;
    height: 10px;
    margin-right: 30px;

    background: transparent;
    border: none;
    border-radius: 50%;

    flex-shrink: 0;

    z-index: 2;

    transition: box-shadow 0.2s ease 0s;
    cursor: pointer;

    &:before {
      position: absolute;
      content: "";
      top: 50%;
      left: 50%;
      width: 20px;
      height: 20px;

      background: ${({ actived, theme }) => actived ? theme.colors.themeColors.primary.normal : 'transparent'};
      ${({ actived, theme }) => actived && css`
        border: 2px solid ${rgba(theme.colors.themeColors.primary.dark, 0.9)};
        border-image: initial;
      `}
      border-radius: 50%;

      transform: translate(-50%, -50%);
    }
    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0px;
      left: 0px;

      background: ${({ actived, theme }) => actived
        ? rgba(theme.colors.themeColors.primary.dark, 0.9)
        : theme.colors.themeColors.primary.lighter};
      border-radius: 50%;

      z-index: 2;
    }
  }
`
