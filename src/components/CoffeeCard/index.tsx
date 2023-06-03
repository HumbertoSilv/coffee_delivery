import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { CoffeeCardContainer } from './styles'
import { NavLink } from 'react-router-dom'
import CoffeeCardImg from '../../assets/Coffee-01.svg'

interface CoffeeCardProps {
  tags: string[]
  name: string
  price: number
  description: string
}

export const CoffeeCard = ({
  tags,
  name,
  price,
  description,
}: CoffeeCardProps) => {
  return (
    <CoffeeCardContainer>
      <img src={CoffeeCardImg} alt="Coffee image" />
      <div className="tags">
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <h2>{name}</h2>
      <p>{description}</p>
      <footer>
        <div className="price">
          R$
          <span>{price}</span>
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
            <ShoppingCartSimple size={20} weight="fill" />
          </NavLink>
        </div>
      </footer>
    </CoffeeCardContainer>
  )
}
