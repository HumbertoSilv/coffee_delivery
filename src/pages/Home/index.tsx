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

const payload = [
  {
    tags: ['Tradicional'],
    name: 'Expresso Tradicional',
    price: 9.9,
    description: 'O tradicional café feito com água quente e grãos moídos',
  },
  {
    tags: ['Tradicional', 'Com Leite'],
    name: 'Expresso Americano',
    price: 7,
    description: 'Expresso diluído, menos intenso que o tradicional',
  },
  {
    tags: ['Tradicional'],
    name: 'Expresso Cremoso',
    price: 8.5,
    description: 'Café expresso tradicional com espuma cremosa',
  },
  {
    tags: ['Tradicional', 'Com Leite'],
    name: 'Latte',
    price: 6.75,
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
  },
  {
    tags: ['Tradicional'],
    name: 'Capuccino',
    price: 9.9,
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
  },

  {
    tags: ['Tradicional', 'Com Leite'],
    name: 'Mocaccino',
    price: 5,
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
  },

  {
    tags: ['Tradicional'],
    name: 'Cubano',
    price: 6.99,
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
  },
  {
    tags: ['Tradicional', 'Com Leite'],
    name: 'Latte',
    price: 6.75,
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
  },
  {
    tags: ['Tradicional'],
    name: 'Capuccino',
    price: 9.9,
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
  },

  {
    tags: ['Tradicional', 'Com Leite'],
    name: 'Mocaccino',
    price: 5,
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
  },

  {
    tags: ['Tradicional'],
    name: 'Cubano',
    price: 6.99,
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
  },
]

export const Home = () => {
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
          {payload.map(({ name, price, tags, description }, index) => (
            <CoffeeCard
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
