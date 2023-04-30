import {
  BackgroundHomeContainer,
  HomeContainer,
  InfoContainer,
  ItemsContainer,
} from './styles'
import Coffee from '../../assets/Coffee.svg'
import CoffeeIcon from '../../assets/CoffeeIcon.svg'
import CartIcon from '../../assets/CartIcon.svg'
import ClockIcon from '../../assets/ClockIcon.svg'
import PackageIcon from '../../assets/PackageIcon.svg'

export const Home = () => {
  return (
    <BackgroundHomeContainer>
      <HomeContainer>
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
        <img src={Coffee} alt="Coffee" />
      </HomeContainer>
    </BackgroundHomeContainer>
  )
}
