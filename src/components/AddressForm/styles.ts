import styled from 'styled-components'

export const Form = styled.div`
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

  .error {
    border: 0.1rem solid ${(props) => props.theme.error};
  }

  .error:focus {
    outline: 0;
    box-shadow: 0 0 0 0.1rem transparent;
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
