import { BrowserRouter, Route, Routes } from 'react-router'
import { UserLayout } from './Components/Layout/UserLayout'
import { Home } from './pages/Home'
import { Toaster } from 'sonner'

export const App = () => {
  return (
    <BrowserRouter>
    <Toaster position='top-right'/>
      <Routes>
        {/* User Layout */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />}></Route>
        </Route>

        <Route>{/*Admin Layout */}</Route>

      </Routes>
    </BrowserRouter>
  )
}
