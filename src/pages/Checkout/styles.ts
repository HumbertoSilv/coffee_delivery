import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: grid;
  grid-template-columns: 55% 40%;
  justify-content: space-between;
  gap: 3rem;
  padding: 2.5rem 10%;
  height: 100vh;

  background: ${(props) => props.theme.background};
`

export const ComplementaryData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 1.8rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const Address = styled.div`
  border-radius: 1rem;
  background: ${(props) => props.theme['base-card']};

  form {
    display: grid;
    gap: 2rem 1rem;
    padding: 0 3.5rem 3rem;

    #cep {
      grid-area: cep;
    }

    #rua {
      grid-area: rua;
    }

    #num {
      grid-area: num;
    }

    #comp {
      grid-area: comp;
    }

    #bai {
      grid-area: bai;
    }

    #cid {
      grid-area: cid;
    }

    #uf {
      grid-area: uf;
    }

    grid-template:
      'cep . .'
      'rua rua rua'
      'num comp comp'
      'bai cid uf'
      / 25% 1fr 50px;
  }
`

export const AddressHeader = styled.div`
  display: flex;
  padding: 3.5rem;
  gap: 0.8rem;

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }

  span {
    font-size: 1.8rem;
  }

  p {
    font-size: 1.4rem;
    line-height: 1.5;
  }
`

export const Input = styled.input`
  padding: 1.4rem;
  border: none;
  border: 0.1rem solid ${(props) => props.theme['base-button']};
  border-radius: 0.5rem;
  background: ${(props) => props.theme['base-input']};

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0.1rem ${(props) => props.theme.yellow};
  }
`

export const Payment = styled.div`
  border-radius: 1rem;
  padding: 3.5rem;
  background: ${(props) => props.theme['base-card']};
`

export const PaymentHeader = styled.div`
  display: flex;
  gap: 0.8rem;

  svg {
    color: ${(props) => props.theme.purple};
  }

  span {
    font-size: 1.8rem;
  }

  p {
    font-size: 1.4rem;
    line-height: 1.5;
  }
`

export const PaymentSection = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: space-between;
  padding-top: 3.5rem;
`

export const PaymentMethod = styled.button`
  display: flex;
  align-items: center;
  gap: 1.3rem;
  width: 30%;
  padding: 1.3rem 1rem;
  font-size: 1.2rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;

  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};

  transition: color 0.3s, background-color 0.3s;

  svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${(props) => props.theme.purple};
    background: ${(props) => props.theme['purple-light']};
  }
`

export const OrderContainer = styled.aside`
  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 1.8rem;
    color: ${(props) => props.theme['base-subtitle']};
    padding-bottom: 2rem;
  }
`

export const CartList = styled.div`
  padding: 3rem;
  border-top-right-radius: 4rem;

  background: ${(props) => props.theme['base-card']};
`

export const Total = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  padding: 0 3rem 3rem;
  background: ${(props) => props.theme['base-card']};

  span {
    color: ${(props) => props.theme['base-text']};
    font-size: 1.4rem;
  }

  h3 {
    font-size: 2rem;
  }

  div {
    display: flex;
    justify-content: space-between;
  }

  button {
    font-family: Roboto, sans-serif;
    font-weight: 600;
    font-size: 1.4rem;
    padding: 1.4rem;

    border: none;
    border-radius: 0.6rem;
    cursor: pointer;

    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.yellow};

    transition: color 0.3s, background-color 0.3s;

    &:hover {
      background: ${(props) => props.theme['yellow-dark']};
    }
  }
`
