import { RiDeleteBin3Line } from "react-icons/ri";

export const CartContents = () => {

    const cartProducts = [
        {
            productId: 1,
            name: 'T-shirt',
            size: 'M',
            color: 'Red',
            quantity: 1,
            price: 15,
            image: "https://picsum.photos/200?random=1",
        },
        {
            productId: 2,
            name: 'Shoes',
            size: 42,
            color: 'White',
            quantity: 3,
            price: 45,
            image: "https://picsum.photos/200?random=2",
        },
    ]

    return (
        <div>
            {
                cartProducts.map((product, index) => (
                    <div 
                        key={index}
                        className="flex items-start justify-between py-4 border-b"    
                    >
                        
                            <div className="flex items-start">
                                <img 
                                    src={product.image} 
                                    alt={product.name}
                                    className="w-20 h-24 object-cover mr-4 rounded"
                                />

                                <div>
                                    <h3>
                                        {product.name}
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        size: {product.size} | color: {product.color}
                                    </p>
                                    
                                    <div className="flex items-center mt-2">
                                        <button className="border border-gray-400 rounded px-2 py-1 text-xl font-medium">
                                            -
                                        </button>

                                        <span className="mx-4">{product.quantity}</span>

                                        <button className="border border-gray-400 rounded px-2 py-1 text-xl font-medium">
                                            +
                                        </button>
                                    </div>  
                                </div>              
                            </div>
                            
                            <div>
                                <p className="font-semibold">
                                    NPR {product.price.toLocaleString()}
                                </p>

                                <button>
                                    <RiDeleteBin3Line className="h-6 w-6 mt-2 ml-4 text-red-600"/>
                                </button>
                            </div>
                    </div>
                ))
            }
        </div>
    )
    };
