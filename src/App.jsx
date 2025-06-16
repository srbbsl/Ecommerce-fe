import { BrowserRouter, Route, Routes } from 'react-router'
import { UserLayout } from './Components/Layout/UserLayout'
import { Home } from './pages/Home'
import { Toaster } from 'sonner'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Profile } from './pages/Profile'

export const App = () => {
  return (
    <BrowserRouter>
    <Toaster position='top-right'/>
      <Routes>
        {/* User Layout */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='profile' element={<Profile />} />
        </Route>

        <Route>{/*Admin Layout */}</Route>

      </Routes>
    </BrowserRouter>
  )
}
