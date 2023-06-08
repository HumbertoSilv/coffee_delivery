import {
  HomeContainer,
  InfoContainer,
  ItemsContainer,
  IntroContainer,
  CoffeeListContainer,
} from './styles'
import Coffee from '../../assets/Coffee.svg'
import CoffeeIcon from '../../assets/CoffeeIcon.svg'
import CartIcon from '../../assets/CartIcon.svg'
import ClockIcon from '../../assets/ClockIcon.svg'
import PackageIcon from '../../assets/PackageIcon.svg'
import { CoffeeCard } from '../../components/CoffeeCard'
import { useContext } from 'react'
import { ProductsContext } from '../../contexts/ProductsContext'

export const Home = () => {
  const { productsList } = useContext(ProductsContext)
  return (
    <HomeContainer>
      <IntroContainer>
        <InfoContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <ItemsContainer>
            <span>
              <img src={CartIcon} alt="Cart icon" />
              Compra simples e segura
            </span>
            <span>
              <img src={PackageIcon} alt="Package icon" />
              Embalagem mantém o café intacto
            </span>
            <span>
              <img src={ClockIcon} alt="Clock icon" />
              Entrega rápida e rastreada
            </span>
            <span>
              <img src={CoffeeIcon} alt="Coffee icon" />O café chega fresquinho
              até você
            </span>
          </ItemsContainer>
        </InfoContainer>
        <img className="introImg" src={Coffee} alt="Coffee" />
      </IntroContainer>
      <CoffeeListContainer>
        <h1>Nossos cafés</h1>
        <nav>
          {productsList.map(({ id, name, price, tags, description }, index) => (
            <CoffeeCard
              id={id}
              key={name + index}
              name={name}
              price={price}
              tags={tags}
              description={description}
            />
          ))}
        </nav>
      </CoffeeListContainer>
    </HomeContainer>
  )
}
