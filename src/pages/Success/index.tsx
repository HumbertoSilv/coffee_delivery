import { SuccessPageContainer, Info } from './style'
import Illustration from '../../assets/Illustration.svg'
import MoneyIcon from '../../assets/MoneyIcon.svg'
import ClockIcon from '../../assets/ClockIcon.svg'
import LocationIcon from '../../assets/LocationIcon.svg'
import { useContext } from 'react'
import { PersonContext } from '../../contexts/PersonContext'

export const Success = () => {
  const { address, paymentMethod } = useContext(PersonContext)
  return (
    <SuccessPageContainer>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <span>Agora é só aguardar que logo o café chegará até você</span>
        <Info>
          <div>
            <img src={LocationIcon} alt="Location Icon" />
            <span>
              Entrega em{' '}
              <b>
                Rua {address?.street}, {address?.number}
              </b>
            </span>
            <span>
              {address?.neighborhood} - {address?.city}, {address?.uf}
            </span>
          </div>
          <div>
            <img src={ClockIcon} alt="Clock Icon" />
            <span>Previsão de entrega</span>
            <span>
              <b>20 min - 30 min</b>
            </span>
          </div>
          <div>
            <img src={MoneyIcon} alt="Money Icon" />
            <span>Pagamento na entrega</span>
            <span>
              <b>{paymentMethod}</b>
            </span>
          </div>
        </Info>
      </div>
      <img src={Illustration} alt="Illustration" />
    </SuccessPageContainer>
  )
}
