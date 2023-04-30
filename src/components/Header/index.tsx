import { HeaderContainer } from './styles'
import Logo from '../../assets/Logo.svg'
import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={Logo} alt="Copo de café e nome do site" />
      <nav>
        <div>
          <MapPin weight="fill" size={25} />
          Porto Alegre, RS
        </div>
        <NavLink to="/checkout" title="cart">
          <ShoppingCart weight="fill" size={25} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
