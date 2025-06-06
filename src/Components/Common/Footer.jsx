
export const Footer = () => {
  return (
    <footer className="py-12">
        <div className="p-4">
            <div>
                <h3>
                    Newsletter
                </h3>
                <p>
                    Be the first to hear about new products, exclusive events, and online offers.
                </p>
                <p>
                    Sign up and get 10% off your first order.
                </p>

                {/* Newsletter form */}
                <form>
                    <input 
                        type="email"
                        placeholder="Enter your email"
                        className="p-3 w-full border text-sm border-gray-300 rounder-l-md" 
                    />
                </form>
            </div>
        </div>

    </footer>
  )
}
