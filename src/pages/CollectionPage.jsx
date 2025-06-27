import { useEffect, useRef, useState } from "react"
import { FaFilter } from "react-icons/fa";
import { FilterSideBar } from "../Components/Layout/FilterSideBar";
import { SortOption } from "../Components/Layout/SortOption";
import { ProductGrid } from "../Components/Products/ProductGrid";

export const CollectionPage = () => {

    const [products, setProducts] = useState([]);
    const sidebarRef = useRef(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleClickOutside = (e) => {
        //Close sidebar if clicked outside
        if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
            setIsSidebarOpen(false);
        }
    };

    useEffect(() => {
        //Add Event listener for clicks
        document.addEventListener('mousedown', handleClickOutside);
        
        //Clean event listener
        
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        setTimeout(() => {
            const fetchedProducts = [
                {
                    _id: 1,
                    name: 'Product 1',
                    price: 100,
                    images: [{ url: 'https://picsum.photos/500/500?random=5' }],
                },
                {
                    _id: 2,
                    name: 'Product 2',
                    price: 100,
                    images: [{ url: 'https://picsum.photos/500/500?random=6' }],
                },
                {
                    _id: 3,
                    name: 'Product 3',
                    price: 100,
                    images: [{ url: 'https://picsum.photos/500/500?random=7' }],
                },
                {
                    _id: 4,
                    name: 'Product 4',
                    price: 100,
                    images: [{ url: 'https://picsum.photos/500/500?random=8' }],
                },
            ];

            setProducts(fetchedProducts);
        }, 1000);
    }, []);

    return (
        <div className="flex flex-col lg:flex-row">
            {/* Mobile Filter button */}
            <button 
                onClick={toggleSidebar}
                className="flex justify-center items-center lg:hidden border p-2"
            >
                <FaFilter className="mr-2"/> Filters
            </button>

            {/* Filter Sidebar */}
            <div 
                ref={sidebarRef}
                className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed bg-white inset-y-0 z-50 left-0 w-64 overflow-y-auto lg:static lg:translate-x-0 transition-transform duration-300`}
                // fixed top-0 left-0 w-[200px] sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50
            >
                    <FilterSideBar />
            </div>

            <div className="">
                <h2 className="text-2xl uppercase mb-4">
                    All Collection
                </h2>

                {/* Sort Options */}
                <SortOption />

                {/* Product Grid */}
                <ProductGrid products={products}/>

            </div>
        </div>
    )
}
