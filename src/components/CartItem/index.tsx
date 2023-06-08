import { Minus, Plus, Trash } from 'phosphor-react'
import coffeeImage from '../../assets/Coffee-01.svg'
import { CartItemContainer } from './styles'
import { useContext } from 'react'
import { ProductsContext } from '../../contexts/ProductsContext'

interface CartItemProps {
  id: string
  tags: string[]
  name: string
  price: number
  description: string
  quantity: number
}
export const CartItem = ({ id, name, quantity, price }: CartItemProps) => {
  const { addToCart, subtractOfCart, removeItem } = useContext(ProductsContext)
  return (
    <CartItemContainer>
      <img id="img" src={coffeeImage} alt="" />
      <h2 id="title">{name}</h2>
      <div className="counter">
        <button onClick={() => subtractOfCart(id)}>
          <Minus size={15} weight="bold" />
        </button>
        <span>{quantity}</span>
        <button onClick={() => addToCart(id, 1)}>
          <Plus size={15} weight="bold" />
        </button>
      </div>
      <button id="button" onClick={() => removeItem(id)}>
        <Trash size={15} />
        REMOVER
      </button>
      <span id="total">R$ {price.toFixed(2)}</span>
    </CartItemContainer>
  )
}
