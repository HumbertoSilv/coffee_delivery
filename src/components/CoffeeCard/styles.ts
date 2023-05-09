import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
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
    align-items: baseline;
    justify-content: space-between;
    width: 85%;
    padding: 0px 20px 10px;
    font-size: 14px;

    .price {
      gap: 5px;
      display: flex;
      align-items: baseline;

      span {
        font-family: 'Baloo 2', cursive;
        font-size: 24px;
        font-weight: 800;
      }
    }

    .counter-cart-container {
      display: flex;
      gap: 1rem;
    }

    .counter {
      display: flex;
      gap: 1.2rem;
      font-size: 1.8rem;
      background: ${(props) => props.theme['base-button']};
      padding: 0.7rem;
      border-radius: 8px;
      align-items: center;

      button {
        border: none;
        background: transparent;
        color: ${(props) => props.theme.purple};
        transition: color 0.3s, background-color 0.3s;
      }

      button:hover {
        color: ${(props) => props.theme['purple-dark']};
      }
    }

    a {
      padding: 0.7rem;
      border-radius: 0.5rem;

      background: ${(props) => props.theme['purple-dark']};
      color: ${(props) => props.theme.white};
      transition: color 0.3s, background-color 0.3s;
    }

    a:hover {
      background: ${(props) => props.theme.purple};
    }
  }
`
