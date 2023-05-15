import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
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
  CartItem,
} from './styles'
import coffeeImage from '../../assets/Coffee-01.svg'

export const Checkout = () => {
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
          <CartItem>
            <img id="img" src={coffeeImage} alt="" />
            <h2 id="title">Expresso Tradicional</h2>
            <div id="counter" className="counter">
              <button>
                <Minus size={15} weight="bold" />
              </button>
              <span>1</span>
              <button>
                <Plus size={15} weight="bold" />
              </button>
            </div>
            <button id="button">
              <Trash size={15} />
              REMOVER
            </button>
            <span id="total">R$ 9,90</span>
          </CartItem>
          <CartItem>
            <img id="img" src={coffeeImage} alt="" />
            <h2 id="title">Expresso Tradicional</h2>
            <div id="counter" className="counter">
              <button>
                <Minus size={15} weight="bold" />
              </button>
              <span>1</span>
              <button>
                <Plus size={15} weight="bold" />
              </button>
            </div>
            <button id="button">
              <Trash size={15} />
              REMOVER
            </button>
            <span id="total">R$ 9,90</span>
          </CartItem>
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
            <span>R$ 33,20</span>
          </div>
          <button>CONFIRMAR PEDIDO</button>
        </Total>
      </OrderContainer>
    </CheckoutContainer>
  )
}
