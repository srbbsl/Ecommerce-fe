

const selectedProduct = {
    name: 'Stylish Jacket',
    price: 120,
    originalPrice: 150,
    description: 'Stylish Jacket perfect for any time',
    brand: 'WowBrand',
    material: 'Leather',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Red', 'Black'],
    images: [
        {
            url: 'https://picsum.photos/500/500?random=4',
            altText: 'Stylish Jacket 1',
        }, 
        {
            url: 'https://picsum.photos/500/500?random=3',
            altText: 'Stylish Jacket 1',
        },          
    ],
};
export const ProductDetails = () => {
  return (
    <div className="p-6">
        <div className="max-w-6xl mx-auto bg-amber-200 p-8 rounded-b-lg">
            <div className="flex flex-row md:flex-row">
                
                {/* Left Thumbnails */}
                <div className=" md:flex flex-col space-y-4 mr-6">
                    {selectedProduct.images.map((image, index) => ( 
                        <img
                            key={index}
                            src={image.url}
                            alt={image.altText || `Thumbnail ${index}`}
                            className="w-20 h-20 object-cover rounded-lg cursor-pointer border border-gray-500"
                        />                     
                    ))}
                </div>

                {/* Main Image */}
                <div className="md:w-1/2">
                    <div className="mb-4">
                        <img
                            src={selectedProduct.images[0]?.url}
                            alt= 'Main Product'
                            className="w-full h-auto object-cover rounded-lg"
                        />
                    </div>                   
                </div>

                    {/* MObile Thumbnail */}
                    <div className="md:hidden flex overscroll-x-auto space-x-4 mb-4">
                        {selectedProduct.images.map((image, index) => ( 
                            <img
                                key={index}
                                src={image.url}
                                alt={image.altText || `Thumbnail ${index}`}
                                className="w-20 h-20 object-cover rounded-lg cursor-pointer border border-gray-500"
                            />                     
                        ))}
                    </div>
                
            </div>
        </div>
    </div>
  )
}
