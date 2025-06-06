import { Outlet } from 'react-router'
import { Footer } from '../Common/Footer'
import { Header } from '../Common/Header'

export const UserLayout = () => {
  return (
    <div>
        {/* Header */}
        <Header />

        <main>
          <Outlet />
        </main>

        {/* Footer */}
        <Footer />
    </div>
  )
}
