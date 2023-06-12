import styled from 'styled-components'

export const CartItemContainer = styled.div`
  display: grid;
  column-gap: 1rem;
  padding: 3rem 0;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  h2 {
    font-family: 'Roboto';
    font-size: 1.6rem;
    font-weight: normal;
  }

  #img {
    grid-area: img;
    width: 80%;
  }

  #title {
    grid-area: title;
  }

  grid-template:
    'img title title total' 45%
    'img counter button total' 50% / 20% 20% 1fr 1fr;

  .counter {
    grid-area: counter;

    display: flex;
    font-size: 1.6rem;
    padding: 0.9rem;
    justify-content: space-between;
    align-items: center;
    border-radius: 0.5rem;
    background: ${(props) => props.theme['base-button']};
  }

  .counter button {
    cursor: pointer;
    border: none;
    background: transparent;
    color: ${(props) => props.theme.purple};
  }

  #button {
    grid-area: button;

    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;
    border: none;
    font-size: 1.2rem;
    border-radius: 0.5rem;
    color: ${(props) => props.theme['base-text']};
    background: ${(props) => props.theme['base-button']};
    transition: color 0.3s, background-color 0.3s;
  }

  #button:hover {
    color: ${(props) => props.theme['purple-dark']};
    background: ${(props) => props.theme['base-hover']};
  }

  svg {
    color: ${(props) => props.theme.purple};
  }

  #total {
    grid-area: total;

    font-family: 'Roboto';
    font-weight: 700;
    font-size: 1.6rem;
    color: ${(props) => props.theme['base-text']};
    text-align: end;
  }

  @media (max-width: 1545px) {
    h2,
    span {
      font-size: 1.4rem;
    }
  }
`
