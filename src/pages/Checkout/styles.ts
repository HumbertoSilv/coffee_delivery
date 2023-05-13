import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: grid;
  grid-template-columns: 60% 1fr;
  gap: 3rem;
  width: 80%;
  margin: 60px auto;
`
export const ComplementaryData = styled.div`
  display: grid;
  gap: 2rem;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 1.8rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const Address = styled.div`
  border-radius: 10px;
  background: ${(props) => props.theme.background};

  form {
    display: grid;
    gap: 1rem;
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
      / 30% 1fr 50px;

    input {
      padding: 1.4rem;
      border: none;
      border-radius: 5px;
      background: ${(props) => props.theme['base-input']};
    }

    input:focus {
      outline: 0;
      box-shadow: 0 0 0 1px ${(props) => props.theme.yellow};
    }
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
export const Input = styled.input``

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

export const Payment = styled.div`
  border-radius: 10px;
  padding: 3.5rem;
  background: ${(props) => props.theme.background};
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
  gap: 1.5rem;
  width: 30%;
  padding: 1.5rem;
  font-size: 1.2rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  background: ${(props) => props.theme['base-input']};

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
  background: ${(props) => props.theme.background};
`
