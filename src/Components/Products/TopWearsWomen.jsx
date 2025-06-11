import { ProductGrid } from './ProductGrid'

export const TopWearsWomen = () => {

    const placeholderProducts = [
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

    return (
        <div>
            <h2 className='text-3xl text-center font-bold mb-4'>
                Top Wears for Women
            </h2>
            <ProductGrid products={placeholderProducts}/>
        </div>
    )
    }
