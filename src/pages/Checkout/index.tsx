import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import {
  CheckoutContainer,
  Address,
  Payment,
  ComplementaryData,
  OrderContainer,
  AddressHeader,
  PaymentHeader,
  Input,
  PaymentSection,
  PaymentMethod,
  CartList,
  Total,
} from './styles'
import { useNavigate } from 'react-router-dom'
import { CartItem } from '../../components/CartItem'
import { useContext } from 'react'
import { ProductsContext } from '../../contexts/ProductsContext'

export const Checkout = () => {
  const { cart } = useContext(ProductsContext)
  const navigate = useNavigate()

  return (
    <CheckoutContainer>
      <ComplementaryData>
        <h1>Complete seu pedido</h1>
        <Address>
          <AddressHeader>
            <MapPinLine size={23} />
            <div>
              <span>Endereço de Entrega</span>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </AddressHeader>
          <form action="">
            <Input id="cep" placeholder="CEP" />
            <Input id="rua" placeholder="Rua" />
            <Input id="num" placeholder="Numero" />
            <Input id="comp" placeholder="Complemento" />
            <Input id="bai" placeholder="Bairro" />
            <Input id="cid" placeholder="Cidade" />
            <Input id="uf" placeholder="UF" />
          </form>
        </Address>
        <Payment>
          <PaymentHeader>
            <CurrencyDollar size={23} />
            <div>
              <span>Pagamento</span>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </PaymentHeader>
          <PaymentSection>
            <PaymentMethod>
              <CreditCard size={20} />
              CARTÃO DE CRÉDITO
            </PaymentMethod>
            <PaymentMethod>
              <Bank size={20} />
              CARTÂO DE DÉBITO
            </PaymentMethod>
            <PaymentMethod>
              <Money size={20} />
              DINHEIRO
            </PaymentMethod>
          </PaymentSection>
        </Payment>
      </ComplementaryData>

      <OrderContainer>
        <h1>Cafés selecionados</h1>
        <CartList>
          {cart.map((item, index) => {
            return <CartItem key={index} {...item} />
          })}
        </CartList>
        <Total>
          <div>
            <span>Total de itens</span>
            <span>R$ 29,70</span>
          </div>
          <div>
            <span>Entrega </span>
            <span>R$ 3,50</span>
          </div>
          <div>
            <h3>Total </h3>
            <h3>R$ 33,20</h3>
          </div>
          <button onClick={() => navigate('/success')}>CONFIRMAR PEDIDO</button>
        </Total>
      </OrderContainer>
    </CheckoutContainer>
  )
}
