import { HiOutlineShoppingBag, HiOutlineUser } from "react-icons/hi"
import { HiBars3BottomRight } from "react-icons/hi2"
import { Link } from "react-router"
import { SearchBar } from "./SearchBar"
import { CartDrawer } from "../Layout/CartDrawer"
import { useState } from "react"
import { MobileNavigation } from "../Layout/MobileNavigation"

export const Navbar = () => {

    const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
    const [mobCartDrawerOpen, setMobCartDrawerOpen] = useState(false);

    const toggleCartDrawer = () => {
        setCartDrawerOpen(!cartDrawerOpen);
    };

    const toggleMobCartDrawer = () => {
        setMobCartDrawerOpen(!mobCartDrawerOpen)
    };

    return (
        <>
            <nav className="container mx-auto flex items-center justify-between py-1 ml-40">
                {/* Left - Logo */}
                <div >
                    <Link to='/' className="text-2xl font-medium">
                        Ecommerce
                    </Link>
                </div>

                {/* Center - Navigation Links */}
                <div className="hidden md:flex space-x-6">
                    <Link 
                        to='#'
                        className="text-gray-700 hover:text-black text-sm font-medium uppercase"
                    >
                        Men
                    </Link>
                    <Link 
                        to='#'
                        className="text-gray-700 hover:text-black text-sm font-medium uppercase"
                    >
                        Women
                    </Link>
                    <Link 
                        to='#'
                        className="text-gray-700 hover:text-black text-sm font-medium uppercase"
                    >
                        Top Wear
                    </Link>
                    <Link 
                        to='#'
                        className="text-gray-700 hover:text-black text-sm font-medium uppercase"
                    >
                        Bottom Wear
                    </Link>
                </div>
                
                {/* Right - Icons */}
                <div className="flex items-center space-x-4">
                    <Link to='/profile' className="hover:text-black">
                        <HiOutlineUser className="h-6 w-6 text-gray-500"/>
                    </Link>

                    <button onClick={toggleCartDrawer} className="relative hover:text-black">
                        <HiOutlineShoppingBag className="h-6 w-6 text-gray-500"/>
                        <span className="absolute -top-1 -right-2.5 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">4</span>
                    </button>

                    {/* Search - Icons */}
                    <div className="overflow-hidden">
                        <SearchBar />
                    </div>
                    
                    <button onClick={toggleMobCartDrawer} className="md:hidden">
                        <HiBars3BottomRight className="h-6 w-6 text-gray-500"/>
                    </button>
                </div>
            </nav>

            <CartDrawer cartDrawerOpen={cartDrawerOpen} toggleCartDrawer={toggleCartDrawer} />

            {/* Mobile Navigation */}
            <MobileNavigation mobCartDrawerOpen={mobCartDrawerOpen} toggleMobCartDrawer={toggleMobCartDrawer} />
        </>
    )
    }
