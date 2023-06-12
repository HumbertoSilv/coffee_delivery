import { ReactNode, createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const payload = [
  {
    id: uuidv4(),
    tags: ['Tradicional'],
    name: 'Expresso Tradicional',
    price: 9.9,
    description: 'O tradicional café feito com água quente e grãos moídos',
  },
  {
    id: uuidv4(),
    tags: ['Tradicional', 'Com Leite'],
    name: 'Expresso Americano',
    price: 7,
    description: 'Expresso diluído, menos intenso que o tradicional',
  },
  {
    id: uuidv4(),
    tags: ['Tradicional'],
    name: 'Expresso Cremoso',
    price: 8.5,
    description: 'Café expresso tradicional com espuma cremosa',
  },
  {
    id: uuidv4(),
    tags: ['Tradicional', 'Com Leite'],
    name: 'Latte',
    price: 6.75,
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
  },
  {
    id: uuidv4(),
    tags: ['Tradicional'],
    name: 'Capuccino',
    price: 9.9,
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
  },

  {
    id: uuidv4(),
    tags: ['Tradicional', 'Com Leite'],
    name: 'Mocaccino',
    price: 5,
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
  },

  {
    id: uuidv4(),
    tags: ['Tradicional'],
    name: 'Cubano',
    price: 6.99,
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
  },
  {
    id: uuidv4(),
    tags: ['Tradicional', 'Com Leite'],
    name: 'Latte',
    price: 6.75,
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
  },
  {
    id: uuidv4(),
    tags: ['Tradicional'],
    name: 'Capuccino',
    price: 9.9,
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
  },

  {
    id: uuidv4(),
    tags: ['Tradicional', 'Com Leite'],
    name: 'Mocaccino',
    price: 5,
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
  },

  {
    id: uuidv4(),
    tags: ['Tradicional'],
    name: 'Cubano',
    price: 6.99,
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
  },
]

interface Product {
  id: string
  tags: string[]
  name: string
  price: number
  description: string
}

interface ProductOfCart {
  id: string
  tags: string[]
  name: string
  price: number
  description: string
  quantity: number
}

interface ProductsContextType {
  productsList: Product[]
  cart: ProductOfCart[]
  addToCart: (productId: string, quantity: number) => void
  subtractOfCart: (productId: string) => void
  removeItem: (productId: string) => void
}

interface ProductsContextProviderProps {
  children: ReactNode
}

export const ProductsContext = createContext({} as ProductsContextType)

export const ProductsContextProvider = ({
  children,
}: ProductsContextProviderProps) => {
  const [productsList, setProductsList] = useState<Product[]>(payload)
  const [cart, setCart] = useState<ProductOfCart[]>([])

  const addToCart = (productId: string, quantity: number) => {
    const [product] = productsList.filter((item) => item.id === productId)
    const alreadyExists = cart.find((item) => item.id === productId)

    alreadyExists
      ? setCart((state) =>
          state.map((item) => {
            if (item.id === productId) {
              return {
                ...item,
                quantity: item.quantity + quantity,
              }
            }
            return item
          }),
        )
      : setCart((state) => [
          ...state,
          {
            ...product,
            quantity,
          },
        ])
  }

  const subtractOfCart = (productId: string) => {
    setCart((state) =>
      state.map((item) => {
        if (item.id === productId) {
          return {
            ...item,
            quantity: item.quantity === 0 ? 0 : item.quantity - 1,
          }
        }
        return item
      }),
    )
  }

  const removeItem = (productId: string) => {
    setCart((state) => state.filter(({ id }) => id !== productId))
  }

  return (
    <ProductsContext.Provider
      value={{ productsList, cart, addToCart, subtractOfCart, removeItem }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
