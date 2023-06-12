import { HeaderContainer, QuantityItems } from './styles'
import Logo from '../../assets/Logo.svg'
import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { ProductsContext } from '../../contexts/ProductsContext'
export const Header = () => {
  const { cart } = useContext(ProductsContext)
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
            {cart.length > 0 && <QuantityItems>{cart.length}</QuantityItems>}
            <ShoppingCart weight="fill" size={25} />
          </NavLink>
        </nav>
      </div>
    </HeaderContainer>
  )
}
