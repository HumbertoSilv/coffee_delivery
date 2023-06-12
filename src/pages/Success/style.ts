import styled from 'styled-components'

export const SuccessPageContainer = styled.div`
  display: grid;
  grid-template-columns: 45% 1fr;
  align-items: end;
  gap: 10rem;
  padding: 5.5rem 10% 45rem;

  background: ${(props) => props.theme.background};

  h1 {
    font-size: 3.2rem;
    font-weight: 800;
    font-family: 'Baloo 2', cursive;

    color: ${(props) => props.theme['yellow-dark']};
  }

  span {
    font-size: 2rem;
  }
`
export const Info = styled.div`
  margin: 4rem 0 1rem;
  padding: 2rem;
  border: 1px solid transparent;
  border-radius: 6px 30px;
  background: ${(props) => props.theme.background};

  background: linear-gradient(
        ${(props) => props.theme.background},
        ${(props) => props.theme.background}
      )
      padding-box,
    linear-gradient(
        90deg,
        rgba(219, 172, 44, 1) 0%,
        rgba(75, 41, 149, 1) 58%,
        rgba(128, 71, 248, 1) 100%
      )
      border-box;

  span {
    font-size: 1.4rem;
  }

  div {
    padding: 1.5rem;
    line-height: 1.4;
    display: grid;
    align-items: center;
    grid-template:
      'img span'
      'img span'
      / 9%;
  }

  span {
    grid-area: span;
    font-size: 1.6rem;
  }

  img {
    grid-area: img;
  }
`
