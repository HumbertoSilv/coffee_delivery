import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 1;

  background: ${(props) => props.theme.background};

  div {
    display: flex;
    justify-content: space-between;
    width: 80%;
    padding: 30px 0;
    margin: auto;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 1rem;

    span {
      display: flex;
      align-items: center;
      font-size: 1.4rem;
      padding: 0.8rem;
      border-radius: 0.5rem;
      gap: 0.5rem;

      background: ${(props) => props.theme['purple-light']};
      color: ${(props) => props.theme.purple};
    }

    a {
      padding: 0.7rem;
      border-radius: 0.5rem;

      background: ${(props) => props.theme['yellow-light']};
      color: ${(props) => props.theme['yellow-dark']};
    }
  }
`
