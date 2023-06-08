import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { CoffeeCardContainer } from './styles'
import CoffeeCardImg from '../../assets/Coffee-01.svg'
import { useContext, useState } from 'react'
import { ProductsContext } from '../../contexts/ProductsContext'

interface CoffeeCardProps {
  id: string
  tags: string[]
  name: string
  price: number
  description: string
}

export const CoffeeCard = ({
  id,
  tags,
  name,
  price,
  description,
}: CoffeeCardProps) => {
  const { addToCart } = useContext(ProductsContext)
  const [quantity, setQuantity] = useState<number>(1)

  const disable = quantity === 0

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
          <span>{price.toFixed(2)}</span>
        </div>
        <div className="counter-cart-container">
          <div className="counter">
            <button
              disabled={disable}
              onClick={() => setQuantity(quantity - 1)}
            >
              <Minus size={15} weight="bold" />
            </button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)}>
              <Plus size={15} weight="bold" />
            </button>
          </div>
          <button
            disabled={disable}
            className="addCartButton"
            onClick={() => addToCart(id, quantity)}
          >
            <ShoppingCartSimple size={20} weight="fill" />
          </button>
        </div>
      </footer>
    </CoffeeCardContainer>
  )
}
