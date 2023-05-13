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
} from './styles'

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
        <h1>cafes selecionados</h1>
        <div>
          <div></div>
          <div>
            <button>CONFIRMAR PEDIDO</button>
          </div>
        </div>
      </OrderContainer>
    </CheckoutContainer>
  )
}
