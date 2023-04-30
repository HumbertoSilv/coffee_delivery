import styled from 'styled-components'
import Background from '../../assets/Background.svg'

export const BackgroundHomeContainer = styled.div`
  background-image: url(${Background});
  width: 100%;
  padding: 7rem 0;
`

export const HomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 40px auto;
`
export const InfoContainer = styled.div`
  width: 55%;

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
