import styled from 'styled-components'

export const PageHeaderComponent = styled.header`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.colors.themeColors.primary.normal};
  @media (min-width: 700px) {
    height: 340px;
  }
`

export const TopBarContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${props => props.theme.colors.white};
  padding: 1.6rem 0;
  > img {
    height: 1.6rem;
  }
  a {
    height: 3.2rem;
    transition: opacity 0.2s;
  }
  a:hover {
    opacity: 0.6;
  }
  @media (min-width: 700px) {
    max-width: 1100px;
  }
`

export const HeaderContent = styled.div`
  width: 90%;
  margin: 0 auto;
  position: relative;
  margin: 3.2rem auto;

  strong {
    font: 700 3.6rem Archivo;
    line-height: 4.2rem;
  color: ${props => props.theme.colors.white};
  }
  p {
    max-width: 30rem;
    margin-top: 2.8rem;

    font-size: 1.6rem;
    line-height: 2.4rem;
    color: ${props => props.theme.colors.themeColors.text.light};
  }
  @media (min-width: 700px) {
    flex: 1;
    max-width: 740px;
    margin: 0 auto;
    padding-bottom: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    strong {
      max-width: 350px;
    }
  }
`
