import { useState } from "react";
import { useNavigate } from "react-router";


const cart = {
    products: [
        {
            name: 'Stylish Jacket',
            size: 'M',
            color: 'Black',
            price: 120,
            image: 'https://picsum.photos/150?random=1',
        },
        {
            name: 'Casual Sneakers',
            size: '42',
            color: 'White',
            price: 50,
            image: 'https://picsum.photos/150?random=1',
        },
    ],
    
    totalPrice: 195,
};
export const CheckOut = () => {

    const navigate = useNavigate();

    const [checkoutId, setCheckoutId] = useState(null);
    const [shippingAddress, setShippingAdress] = useState({
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        postalCode: '',
        country: '',
        phone: '',
    });

    const handleCreateCheckout = (e) => {
        e.preventDefault();
        // setCheckoutId(123);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter">
            {/* Left Section */}
            <div className="bg-blue-100 rounded-lg p-6">
                <h2 className="text-2xl uppercase mb-6">
                    Checkout
                </h2>
                
                <form
                    onSubmit={handleCreateCheckout}
                >
                        <h3 className="text-lg mb-4">
                            Contact Details
                        </h3>
                        
                        <div className="mb-4">
                            <label className="block text-gray-700">
                                Email
                            </label>
                            
                            <input 
                                type="email" 
                                value='user@example.com'
                                className="w-full p-2 border bg-gray-100" 
                                disabled   
                            />
                        </div>
                        
                        <h3 className="text-lg mb-4">
                            Delivery
                        </h3>

                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <label>
                                    First Name
                                </label>

                                <input 
                                    type="text"
                                    value={shippingAddress.firstName}
                                    onChange={(e) => 
                                        setShippingAdress({
                                            ...shippingAddress,
                                            firstName: e.target.value,
                                        })
                                    }
                                    className="w-full p-2 border rounded"
                                    required
                                />
                            </div>

                            <div>
                                <label>
                                    Last Name
                                </label>

                                <input 
                                    type="text"
                                    value={shippingAddress.lastName}
                                    onChange={(e) => 
                                        setShippingAdress({
                                            ...shippingAddress,
                                            lastName: e.target.value,
                                        })
                                    }
                                    className="w-full p-2 border rounded"
                                    required
                                />
                            </div>
                        </div>

                        <div className="mb-4">
                            <label>
                                Adress
                            </label>

                            <input 
                                type="text"
                                value={shippingAddress.address}
                                onChange={(e) => 
                                    setShippingAdress({
                                        ...shippingAddress,
                                        address: e.target.value,
                                    })
                                }
                                className="border w-full p-2 rounded"
                                required
                            />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <label>
                                    City
                                </label>

                                <input 
                                    type="text"
                                    value={shippingAddress.city}
                                    onChange={(e) => 
                                        setShippingAdress({
                                            ...shippingAddress,
                                            city: e.target.value,
                                        })
                                    }
                                    className="w-full p-2 border rounded"
                                    required
                                />
                            </div>

                            <div>
                                <label>
                                    Postal Code
                                </label>

                                <input 
                                    type="text"
                                    value={shippingAddress.postalCode}
                                    onChange={(e) => 
                                        setShippingAdress({
                                            ...shippingAddress,
                                            postalCode: e.target.value,
                                        })
                                    }
                                    className="w-full p-2 border rounded"
                                    required
                                />
                            </div>
                        </div>
                        
                        <div className="mb-4">
                            <label>
                                Country
                            </label>

                            <input 
                                type="text"
                                value={shippingAddress.country}
                                onChange={(e) => 
                                    setShippingAdress({
                                        ...shippingAddress,
                                        country: e.target.value,
                                    })
                                }
                                className="border w-full p-2 rounded"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label>
                                Phone
                            </label>

                            <input 
                                type="tel"
                                value={shippingAddress.phone}
                                onChange={(e) => 
                                    setShippingAdress({
                                        ...shippingAddress,
                                        phone: e.target.value,
                                    })
                                }
                                className="border w-full p-2 rounded"
                                required
                            />
                        </div>

                        <div>
                            {!checkoutId ? (
                                <button
                                    type="submit"
                                    className="w-full bg-black text-white py-3 rounded"
                                >
                                    Continue to Payment
                                </button>
                            ) : (
                                <div>
                                    <h3 className="text-lg mb-4"> 
                                        Pay with Esewa  
                                    </h3>

                                </div> // don't know how to integrate it (paypal is in 5:03:00)
                            )}
                    </div>
                </form>
            </div>
            
            {/* Right Section */}
            <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg mb-4">
                    Order Summary
                </h3>
                
                <div className="border-t py-4 mb-4">
                    {cart.products.map((product, index) => (
                        <div 
                            key={index}
                            className="flex items-start justify-between py-2 border-b"
                        >
                                <div className="flex items-start">
                                    <img 
                                        src={product.image}
                                        alt={product.name}
                                        className="w-20 h-24 object-cover mr-4"
                                    />

                                    <div>
                                        <h3 className="font-medium">
                                            {product.name}
                                        </h3>
                                        <p className="text-gray-500">
                                            Size: {product.size}
                                        </p>
                                        <p className="text-gray-500">
                                            Color: {product.color}
                                        </p>
                                    </div>                                    
                                </div>

                                <p className="font-medium">
                                    NPR {product.price ?.toLocaleString()}
                                </p>
                        </div>
                    ))}
                </div>

                <div className="flex justify-between items-center text-lg mb-4 font-medium">
                    <p>
                        Subtotal
                    </p>
                    <p>
                        NPR {cart.totalPrice?.toLocaleString()}
                    </p>
                </div>

                <div className="flex justify-between items-center text-lg mb-4 font-medium">
                    <p>
                        Delivery
                    </p>
                    <p>
                        Free
                    </p>
                </div>

                <div className="flex justify-between items-center text-lg mt-4 border-t pt-4 font-medium">
                    <p>
                        Total
                    </p>
                    <p>
                        NPR {cart.totalPrice?.toLocaleString()}
                    </p>
                </div>
            </div>           
        </div>
    )
}
