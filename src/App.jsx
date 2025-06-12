import { BrowserRouter, Route, Routes } from 'react-router'
import { UserLayout } from './Components/Layout/UserLayout'
import { Home } from './pages/Home'
import { Toaster } from 'sonner'
import { Login } from './pages/Login'

export const App = () => {
  return (
    <BrowserRouter>
    <Toaster position='top-right'/>
      <Routes>
        {/* User Layout */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
        </Route>

        <Route>{/*Admin Layout */}</Route>

      </Routes>
    </BrowserRouter>
  )
}
