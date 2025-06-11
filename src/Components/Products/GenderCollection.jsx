import { Link } from "react-router"

export const GenderCollection = () => {
  return (
    <section className="py-1 px-4 lg:px-0">
        <div className=" max-w-full flex flex-col md:flex-row gap-1 mb-10">
            {/* Women's Collection */}
            <div className="relative flex-1">
                <img
                    src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Women's Collection"
                    className="w-full h-[600px] object-cover"
                />

                <div className="absolute bottom-8 left-8 bg-white/90 p-4">
                    <h2 className="mb-3 text-2xl font-bold text-gray-900">
                        Women's Collection
                    </h2>
                    <Link 
                        to='/collections/all?gender=Women'
                        className="text-gray-900 underline"
                    >
                        Shop Now
                    </Link>
                </div>
            </div>  

            {/* Men's Colleciton */}
            <div className="relative flex-1">
                <img
                    src="https://images.unsplash.com/photo-1715090364409-161e8dd5ab8e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Men's Collection"
                    className="w-full h-[600px] object-cover"
                />

                <div className="absolute bottom-8 left-8 bg-white/90 p-4">
                    <h2 className="mb-3 text-2xl font-bold text-gray-900">
                        Men's Collection
                    </h2>
                    <Link 
                        to='/collections/all?gender=Men'
                        className="text-gray-900 underline"
                    >
                        Shop Now
                    </Link>
                </div>
            </div>  
        </div>
    </section>
  )
}
