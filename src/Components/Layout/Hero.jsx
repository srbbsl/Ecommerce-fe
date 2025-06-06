import { Link } from "react-router"

export const Hero = () => {
  return (
    <section className="relative">
        <img 
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Ecommerce"
            className="w-full h-[100px] md:h-[200px] lg:h-[600px] object-cover"
        />
        <div className="absolute inset-0 bg-black/5 flex items-center justify-center">
            <div className="text-white text-center p-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-4">
                    The choice is yours
                </h1>

                <p className="text-xl md:text-lg mb-6 font-semibold">
                    Explore our outfits with fast delivery
                </p>
                <Link to='#' className="bg-white text-black px-6 py-2 rounded-sm txt-lg font-semibold">
                    Shop Now
                </Link>
            </div>
        </div>
    </section>
  )
}
