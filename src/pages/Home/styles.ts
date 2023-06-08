import styled from 'styled-components'
import Background from '../../assets/Background.svg'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1430px;
  background-color: ${(props) => props.theme.background};
`

export const IntroContainer = styled.main`
  display: flex;
  justify-content: space-between;
  padding: 85px 10%;

  background-image: url(${Background});
  background-size: auto;

  @media (max-width: 1200px) {
    .introImg {
      display: none;
    }
  }
`

export const InfoContainer = styled.div`
  width: 50%;

  h1 {
    font-size: 4.8rem;
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    line-height: 1.2;
    color: ${(props) => props.theme['base-title']};
  }

  p {
    color: ${(props) => props.theme['base-text']};
    font-size: 2.2rem;
    margin: 1.5rem 0;
  }
  @media (max-width: 1400px) {
    width: 100%;
  }
`

export const ItemsContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-wrap: wrap;

  span {
    width: 50%;
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }
`

export const CoffeeListContainer = styled.section`
  width: 80%;
  margin: auto;
  margin-bottom: 20rem;

  h1 {
    color: red;
    font-size: 3.4rem;
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    line-height: 1.2;
    color: ${(props) => props.theme['base-subtitle']};
    padding-bottom: 4.5rem;
  }

  nav {
    display: flex;
    flex-wrap: wrap;
    gap: 4rem;
    justify-content: center;
  }
`
