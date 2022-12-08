import { Route, Routes } from 'react-router-dom'
import { routes } from '../routes'

export const RouteView = () => (
  <Routes>
    {routes.map((route) => <Route {...route}/>)}
  </Routes>
)