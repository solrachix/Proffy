import styled from 'styled-components'

export const PageLanding = styled.div`
  flex: 1;
  min-width: 100vw;
  /* min-height: 100vh; */

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  transition: color, background 1s ease 0s, transform 1s ease 0s;

  color: ${props => props.theme.colors.themeColors.text.dark};
`

export const Head = styled.div`
  width: 100%;
  min-height: 70vh;

  background: ${props => props.theme.colors.themeColors.primary.normal};

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const PageLandingContent = styled.div`
  width: 90vw;
  max-width: 700px;
  height: auto;
  /* height: 100%; */

  padding: 20px 0px 20px 0px;

  @media (min-width: 1100px) {
    max-width: 1100px;
    padding: 0px;

    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr 2fr;
    grid-template-areas:
        'logo hero hero'
        'welcome total buttons';
  }
`

export const LogoContainer = styled.div`
  img {
    width: 100%;
    height: 10rem;
  }

  text-align: center;
  margin-bottom: 3.2rem;

  color: ${props => props.theme.colors.white};

  h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.6rem;
    margin-top: 0.8rem;
  }

  @media (min-width: 1100px) {
    grid-area: logo;
    align-self: center;
    text-align: left;
    margin: 0;
    h2 {
      text-align: initial;
      font-size: 3.6rem;
    }

    img {
      width: auto;
      height: 100%;
    }
  }
`

export const HeroImage = styled.img`
  width: 100%;

  @media (min-width: 1100px) {
    grid-area: hero;
    justify-self: end;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3.2rem 0;

  a {
    width: 15rem;
    height: 5.0rem;
    border-radius: 0.6rem;

    font: 700 1rem Archivo;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    text-decoration: none;
    color: ${props => props.theme.colors.white};

    transition: background-color 0.2s;

    img {
      width: 2rem;
    }

    &:first-child {
      margin-right: 1.6rem;
    }
    transition: all 0.2s ease 0s, transform 0.2s ease 0s;
  }

  .study {
    background: ${props => props.theme.colors.themeColors.primary.lighter};
  }

  .give-classes {
    background: ${props => props.theme.colors.themeColors.secondary};
  }

  @media (min-width: 1100px) {
    grid-area: buttons;
    a {
      font-size: 1.4rem;
    }
  }
`

export const Welcome = styled.span`
  width: 100%;
  font-size: 1.4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: ${props => props.theme.colors.themeColors.primary.lighter};

  img {
    margin-left: 0.8rem;
  }

  @media (min-width: 1100px) {
    grid-area: welcome;
    align-items: flex-start;
    justify-self: end;
    a {
      img {
        margin-right: 2.4rem;
      }
    }
  }
`

export const TotalConnections = styled.span`
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: ${props => props.theme.colors.themeColors.primary.normal};
  }

  @media (min-width: 1100px) {
    grid-area: total;
    /* justify-self: end; */
  }
`
