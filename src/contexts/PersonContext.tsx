import { ReactNode, createContext, useState } from 'react'

export interface IAddress {
  zipCode: string
  street: string
  number: string
  complement: string
  neighborhood: string
  city: string
  uf: string
}

interface PersonContextType {
  paymentMethod: string
  createAddress: (address: IAddress) => void
  personPaymentMethod: (paymentMethod: string) => void
}

interface PersonContextProviderProps {
  children: ReactNode
}

export const PersonContext = createContext({} as PersonContextType)

export const PersonContextProvider = ({
  children,
}: PersonContextProviderProps) => {
  const [address, setAddress] = useState<IAddress>()
  const [paymentMethod, setPaymentMethod] = useState<string>('')
  console.log({ address, paymentMethod })

  const createAddress = (address: IAddress) => {
    console.log('createAddress')

    setAddress(address)
  }

  const personPaymentMethod = (paymentMethod: string) => {
    setPaymentMethod(paymentMethod)
  }

  return (
    <PersonContext.Provider
      value={{ paymentMethod, createAddress, personPaymentMethod }}
    >
      {children}
    </PersonContext.Provider>
  )
}
