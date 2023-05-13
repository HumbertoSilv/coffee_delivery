import styled from 'styled-components'
import Background from '../../assets/Background.svg'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 8.5rem auto;
  background: ${(props) => props.theme.background};
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
`
export const ItemsContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-wrap: wrap;

  span {
    width: 50%;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 16px;
    margin-bottom: 1rem;
  }
`
export const IntroBackground = styled.div`
  background-image: url(${Background});
  background-size: contain;
`
export const IntroContainer = styled.main`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 5rem auto;
`
export const CoffeeListContainer = styled.section`
  width: 80%;
  margin: 0 auto;

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
  }
`
