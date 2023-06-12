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
      position: relative;
      padding: 0.7rem;
      border-radius: 0.5rem;

      background: ${(props) => props.theme['yellow-light']};
      color: ${(props) => props.theme['yellow-dark']};
    }
  }
`
export const QuantityItems = styled.p`
  position: absolute;
  right: -0.8rem;
  top: -0.8rem;

  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['yellow-dark']};
  border-radius: 50%;
  line-height: 0;
  height: 1.25rem;
  width: 1.25rem;
  padding: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 700;
`
