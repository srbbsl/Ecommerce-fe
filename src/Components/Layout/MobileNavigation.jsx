import { IoMdClose } from "react-icons/io"
import { Link } from "react-router"

export const MobileNavigation = ({mobCartDrawerOpen, toggleMobCartDrawer}) => {
  return (
    <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${mobCartDrawerOpen ? 'translate-x-0' : '-translate-x-full'}`}
    >
        <div className="flex justify-end p-4">
            <button onClick={toggleMobCartDrawer}>
                <IoMdClose className="h-5 w-5 text-gray-600 hover:text-gray-950"/>
            </button>
        </div>

        <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Menu</h2>

            <nav className="space-y-4">
                <Link
                    to='#'
                    onClick={toggleMobCartDrawer}
                    className='block text-gray-600 hover:text-black uppercase'
                >
                        Men
                </Link>
                <Link
                    to='#'
                    onClick={toggleMobCartDrawer}
                    className='block text-gray-600 hover:text-black uppercase'
                >
                        Women
                </Link>
                <Link
                    to='#'
                    onClick={toggleMobCartDrawer}
                    className='block text-gray-600 hover:text-black uppercase'
                >
                        Top Wear
                </Link>
                <Link
                    to='#'
                    onClick={toggleMobCartDrawer}
                    className='block text-gray-600 hover:text-black uppercase'
                >
                        Bottom Wear
                </Link>
            </nav>
        </div>

    </div>
  )
}
