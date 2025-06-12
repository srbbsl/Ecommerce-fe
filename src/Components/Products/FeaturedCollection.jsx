import { Link } from "react-router"
import featured from "../../assets/featured.jpg"

export const FeaturedCollection = () => {
  return (
    <section className="p-16 px-4 lg:px-0">
        <div className="bg-green-50 container mx-auto flex flex-col-reverse lg:flex-row items-center rounded-3xl">
            {/* Left Content */}
            <div className="lg:w-1/2 p-8 text-center lg:text-left">
                <h2 className="text-lg font-semibold text-gray-700 mb-2">
                  Comfort and Style
                </h2>

                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  Apparel made for your everyday life.
                </h2>

                <p className="text-lg text-gray-600 mb-6">
                  Discover high-quality, comfortable clothing that effortlessly blend fashion and function. Designed to make you lood and feel great every day.
                </p>

                <Link 
                  to='/collections/all' 
                  className="bg-black text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-800">
                    Shop Now
                </Link>   
            </div>

            {/* Right Content */}
            <div className="lg:w-1/2">
              <img 
                src={featured}
                alt="Featured Collection"
                className="w-full h-[600px] object-cover lg:rounded-tr-3xl lg:rounded-br-3xl"
              />
            </div>
            
        </div>
    </section>
  )
}
