import { MapPinLine } from 'phosphor-react'
import {
  CheckoutContainer,
  Address,
  Payment,
  ComplementaryData,
  OrderContainer,
  FormHeader,
  Input,
} from './styles'

export const Checkout = () => {
  return (
    <CheckoutContainer>
      <ComplementaryData>
        <h1>Complete seu pedido</h1>
        <Address>
          <FormHeader>
            <MapPinLine size={23} weight="light" />
            <div>
              <span>Endereço de Entrega</span>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </FormHeader>
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
        <Payment>pagamento</Payment>
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
