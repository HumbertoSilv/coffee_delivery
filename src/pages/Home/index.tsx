import {
  HomeContainer,
  InfoContainer,
  ItemsContainer,
  IntroContainer,
  IntroBackground,
  CoffeeListContainer,
  CoffeeCard,
} from './styles'
import Coffee from '../../assets/Coffee.svg'
import CoffeeIcon from '../../assets/CoffeeIcon.svg'
import CartIcon from '../../assets/CartIcon.svg'
import ClockIcon from '../../assets/ClockIcon.svg'
import PackageIcon from '../../assets/PackageIcon.svg'
import CoffeeCardImg from '../../assets/Coffee-01.svg'

export const Home = () => {
  return (
    <HomeContainer>
      <IntroBackground>
        <IntroContainer>
          <InfoContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
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
                <img src={CoffeeIcon} alt="Coffee icon" />O café chega
                fresquinho até você
              </span>
            </ItemsContainer>
          </InfoContainer>
          <img src={Coffee} alt="Coffee" />
        </IntroContainer>
      </IntroBackground>
      <CoffeeListContainer>
        <h1>Nossos cafés</h1>
        <nav>
          <CoffeeCard>
            <img src={CoffeeCardImg} alt="Coffee image" />
            <span className="tag">TRADICIONAL</span>
            <h2>Expresso Tradicional</h2>
            <p>O tradicional café feito com água quente e grãos moídos</p>
            <footer>
              R$
              <span>9,90</span>
              <div>
                <button>-</button>
                <span>0</span>
                <button>+</button>
                <div>cart</div>
              </div>
            </footer>
          </CoffeeCard>
        </nav>
      </CoffeeListContainer>
    </HomeContainer>
  )
}
