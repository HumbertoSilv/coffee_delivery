import styled from 'styled-components'
import Background from '../../assets/Background.svg'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 8.5rem auto;
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
  }
`
export const CoffeeCard = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  width: 22%;
  max-width: 40rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top-right-radius: 45px;
  border-bottom-left-radius: 45px;
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 1rem;
  margin: 1.5rem;

  img {
    margin-top: calc(0px - 2.4rem - 6px);
    width: 50%;
  }

  .tag {
    padding: 0.5rem;
    margin: 1.5rem;
    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    border-radius: 10px;
    font-weight: 600;
  }

  h2 {
    font-family: 'Baloo 2', cursive;
    font-size: 2.1rem;
    padding-bottom: 5px;
  }

  p {
    padding-bottom: 40px;
    text-align: center;
    font-size: 1.4rem;
    color: ${(props) => props.theme['base-label']};
  }

  footer {
    display: flex;
    gap: 5px;
    padding: 0px 20px 10px;
    font-size: 14px;

    span {
      /* padding: 0;
      margin: 0;
      background: white;
      color: grey;
      border-radius: 0px;
      font-weight: 600; */
    }
  }
`
