import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { CoffeeCardContainer } from './styles'
import { NavLink } from 'react-router-dom'
import CoffeeCardImg from '../../assets/Coffee-01.svg'

export const CoffeeCard = () => {
  return (
    <CoffeeCardContainer>
      <img src={CoffeeCardImg} alt="Coffee image" />
      <span className="tag">TRADICIONAL</span>
      <h2>Expresso Tradicional</h2>
      <p>O tradicional café feito com água quente e grãos moídos</p>
      <footer>
        <div className="price">
          R$
          <span>9,90</span>
        </div>
        <div className="counter-cart-container">
          <div className="counter">
            <button>
              <Minus size={15} weight="bold" />
            </button>
            <span>1</span>
            <button>
              <Plus size={15} weight="bold" />
            </button>
          </div>
          <NavLink to="/checkout" title="cart">
            <ShoppingCartSimple size={25} weight="fill" />
          </NavLink>
        </div>
      </footer>
    </CoffeeCardContainer>
  )
}
