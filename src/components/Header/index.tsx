import { HeaderContainer } from './styles'
import Logo from '../../assets/Logo.svg'
import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

export const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <NavLink to="/" title="logo">
          <img src={Logo} alt="Copo de café e nome do site" />
        </NavLink>
        <nav>
          <span className="MapPin">
            <MapPin weight="fill" size={25} />
            Porto Alegre, RS
          </span>
          <NavLink to="/checkout" title="cart">
            <ShoppingCart weight="fill" size={25} />
          </NavLink>
        </nav>
      </div>
    </HeaderContainer>
  )
}
