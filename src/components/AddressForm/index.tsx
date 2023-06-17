import { useFormContext } from 'react-hook-form'
import { Form, Input } from './styles'

export const AddressForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <Form className="address-form">
      <Input
        id="cep"
        className={errors.zipCode && 'error'}
        placeholder="CEP"
        {...register('zipCode')}
      />
      <Input
        id="rua"
        className={errors.street && 'error'}
        placeholder="Rua"
        {...register('street')}
      />
      <Input
        id="num"
        className={errors.number && 'error'}
        placeholder="Numero"
        {...register('number')}
      />
      <Input id="comp" placeholder="Complemento" {...register('complement')} />
      <Input
        id="bai"
        className={errors.neighborhood && 'error'}
        placeholder="Bairro"
        {...register('neighborhood')}
      />
      <Input
        id="cid"
        className={errors.city && 'error'}
        placeholder="Cidade"
        {...register('city')}
      />
      <Input
        id="uf"
        className={errors.uf && 'error'}
        placeholder="UF"
        {...register('uf')}
      />
    </Form>
  )
}
