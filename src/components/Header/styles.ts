import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;

  width: 80%;
  margin: 30px auto;

  nav {
    display: flex;
    align-items: center;
    gap: 1rem;

    div {
      display: flex;
      align-items: center;
      font-size: 1.4rem;
      padding: 0.7rem;
      border-radius: 0.5rem;
      gap: 0.5rem;

      background: ${(props) => props.theme['purple-light']};
      color: ${(props) => props.theme['purple-dark']};
    }

    a {
      padding: 0.7rem;
      border-radius: 0.5rem;

      background: ${(props) => props.theme['yellow-light']};
      color: ${(props) => props.theme['yellow-dark']};
    }
  }
`
