import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: grid;
  grid-template-columns: 60% 1fr;
  gap: 3rem;
  width: 80%;
  margin: 60px auto;
`
export const ComplementaryData = styled.div`
  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 1.8rem;
    padding: 10px 0;
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
  }
`
export const FormHeader = styled.div`
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

export const Payment = styled.div`
  background: ${(props) => props.theme.background};
`

export const OrderContainer = styled.aside`
  background: ${(props) => props.theme.background};
`
