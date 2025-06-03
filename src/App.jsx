import { BrowserRouter, Route, Routes } from 'react-router'
import { UserLayout } from './Components/Layout/UserLayout'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>{/* User Layout */}</Route>
        <Route>{/*Admin Layout */}</Route>
      </Routes>
    </BrowserRouter>
  )
}
