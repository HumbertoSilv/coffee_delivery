import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  width: 255px;
  flex-direction: column;
  align-items: center;
  border-radius: 8px 40px;

  background-color: ${(props) => props.theme['base-card']};

  img {
    margin-top: calc(0px - 2.2rem - 6px);
  }

  .tags {
    margin: 1.5rem;

    span {
      padding: 0.5rem 0.8rem;
      margin: 0.3rem;
      background: ${(props) => props.theme['yellow-light']};
      color: ${(props) => props.theme['yellow-dark']};
      border-radius: 10px;
      font-weight: 600;
    }
  }

  h2 {
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    padding-bottom: 5px;
  }

  p {
    padding: 0px 20px 35px;
    text-align: center;
    font-size: 1.4rem;
    color: ${(props) => props.theme['base-label']};
  }

  footer {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    width: 80%;
    padding: 0px 20px 20px;
    font-size: 1.4rem;

    .price {
      gap: 0.5rem;
      display: flex;
      align-items: baseline;

      span {
        font-family: 'Baloo 2', cursive;
        font-size: 2.4rem;
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

    .addCartButton {
      padding: 0.7rem 1rem;
      border-radius: 0.5rem;
      border: none;

      background: ${(props) => props.theme['purple-dark']};
      color: ${(props) => props.theme.white};
      transition: color 0.3s, background-color 0.3s;
    }

    .addCartButton:hover {
      background: ${(props) => props.theme.purple};
    }
  }
`
