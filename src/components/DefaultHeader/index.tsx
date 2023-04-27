import { Outlet } from 'react-router-dom'
import { Header } from '../Header'

export const DefaultHeader = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
