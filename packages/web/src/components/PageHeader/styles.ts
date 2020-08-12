import styled from 'styled-components'
import { darken } from 'polished'

export const PageHeaderComponent = styled.header`
  display: flex;
  flex-direction: column;

  height: auto;

  background: ${props => props.theme.colors.themeColors.primary.normal};
  @media (min-width: 700px) {
    min-height: 340px;
  }
`

export const TopBarContainer = styled.div`
  width: 100%;

  background: ${props => darken(0.03, props.theme.colors.themeColors.primary.normal)};
  > div {
    width: 90%;
    margin: 0 auto;
    padding: 1rem 0;

    color: ${props => props.theme.colors.white};

    display: flex;
    justify-content: space-between;
    align-items: center;

    > img {
      height: 1.6rem;
      opacity: 0.8;
    }
    P {
      opacity: 0.8;
    }
    a {
      line-height: 10px;
    }
    @media (min-width: 700px) {
      max-width: 1100px;
    }
  }

`

interface HeaderContentProps {
  align?: string;
}

export const HeaderContent = styled.div<HeaderContentProps>`
  width: 90%;
  margin: 0 auto;
  position: relative;
  margin: 3.2rem auto;
  margin-bottom: 48px;

  z-index: 5;

  strong {
    font: 700 3.6rem Archivo;
    line-height: 4.2rem;
    color: ${props => props.theme.colors.white};

    z-index: 10;
  }
  p {
    max-width: 30rem;
    margin-top: 2.8rem;

    text-align: ${({ align }) => align};
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: ${props => props.theme.colors.themeColors.text.light};

    z-index: 10;
  }

  > nav {
    position: absolute;
    width: 100%;
    height: auto;
    margin-top: 34%;

    display: flex;
    flex: 1;

    @media (max-width: 690px) {
      margin-top: 0%;
    }
  }
  @media (min-width: 700px) {
    flex: 1;
    max-width: 740px;
    margin: 0 auto;
    margin-bottom: 48px;
    padding-bottom: 48px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: ${({ align }) => align};
    strong {
      max-width: 350px;
    }
  }
`

export const BackgroundImg = styled.img`
  position: absolute;
  width: 100%;

  margin: auto;

  z-index: 5;
  @media (max-width: 850px) {
    width: 100%;
  }
`
