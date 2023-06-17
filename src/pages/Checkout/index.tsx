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
  PaymentSection,
  PaymentMethod,
  CartList,
  Total,
} from './styles'
import { useNavigate } from 'react-router-dom'
import { CartItem } from '../../components/CartItem'
import { useContext } from 'react'
import { ProductsContext } from '../../contexts/ProductsContext'
import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { AddressForm } from '../../components/AddressForm'
import { IAddress, PersonContext } from '../../contexts/PersonContext'

const formValidationSchema = zod.object({
  zipCode: zod.string().min(5),
  street: zod.string().min(10),
  number: zod.string().min(2),
  complement: zod.string(),
  neighborhood: zod.string().min(10),
  city: zod.string().min(10),
  uf: zod.string().min(2).max(2),
})

type formData = zod.infer<typeof formValidationSchema>

export const Checkout = () => {
  const { cart, total } = useContext(ProductsContext)
  const { paymentMethod, createAddress, personPaymentMethod } =
    useContext(PersonContext)
  const navigate = useNavigate()
  const deliveryFee = total > 0 ? 3.5 : 0
  const enableSubmit = Boolean(!paymentMethod.length)

  const personalDataForm = useForm<formData>({
    resolver: zodResolver(formValidationSchema),
  })

  const { handleSubmit, reset } = personalDataForm

  const handleCreateAddress = (data: IAddress) => {
    createAddress(data)
    reset()
    navigate('/success')
  }

  const handlePaymentMethod = (paymentMethod: string) => {
    personPaymentMethod(paymentMethod)
  }

  return (
    <CheckoutContainer onSubmit={handleSubmit(handleCreateAddress)} action="">
      <FormProvider {...personalDataForm}>
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

            <AddressForm />
          </Address>
          <Payment>
            <PaymentHeader>
              <CurrencyDollar size={23} />
              <div>
                <span>Pagamento</span>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </PaymentHeader>
            <PaymentSection>
              <PaymentMethod htmlFor="credit">
                <CreditCard size={20} />
                <input
                  id="credit"
                  type="button"
                  value="CARTÃO DE CRÉDITO"
                  onClick={() => handlePaymentMethod('CARTÃO DE CRÉDITO')}
                />
              </PaymentMethod>
              <PaymentMethod htmlFor="debt">
                <Bank size={20} />
                <input
                  id="debt"
                  type="button"
                  value="CARTÃO DE DÉBITO"
                  onClick={() => handlePaymentMethod('CARTÃO DE CRÉDITO')}
                />
              </PaymentMethod>
              <PaymentMethod htmlFor="money">
                <Money size={20} />
                <input
                  id="money"
                  type="button"
                  value="DINHEIRO"
                  onClick={() => handlePaymentMethod('DINHEIRO')}
                />
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
              <span>R$ {total.toFixed(2)}</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ {deliveryFee.toFixed(2)}</span>
            </div>
            <div>
              <h3>Total</h3>
              <h3>R$ {(deliveryFee + total).toFixed(2)}</h3>
            </div>
            <button disabled={enableSubmit} type="submit">
              CONFIRMAR PEDIDO
            </button>
          </Total>
        </OrderContainer>
      </FormProvider>
    </CheckoutContainer>
  )
}
