import { useEffect, useState } from "react";
import { useSearchParams } from "react-router"

export const FilterSideBar = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    const [filters, setFilters] = useState({
        category: '',
        gender: '',
        color: '',
        size: [],
        material: [],
        brand: [],
        minPrice: 0,
        maxPrice: 100,
    });

    const [priceRange, setPriceRange] = useState([0, 100]);

    const categories = ['Top Wear', 'Bottom Wear'];

    const colors = [
        'Red',
        'Blue',
        'Black',
        'Green',
        'Yellow',
        'Gray',
        'White',
        'Pink',
        'Beige',
        'Navy',
    ];

    const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

    const materials = [
        'Cotton',
        'Wool',
        'Denim',
        'Polyester',
        'Silk',
        'Linen',
        'Viscose',
        'Fleece',
    ];

    const brands = [
        'Urban Threads',
        'Modern Fit',
        'Street Style',
        'Beach Breeze',
        'Fashionista',
        'ChicStyle',
    ];

    const genders = ['Men', 'Women'];

    useEffect(() => {
        const params = Object.fromEntries([...searchParams]);

        setFilters({
            category: params.category || '',
            gender: params.gender || '',
            color: params.color || '',
            size: params.size ? params.size.split(',') : [],
            material: params.material ? params.material.split(',') : [],
            brand: params.brand ? params.brand.split(',') : [],
            minPrice: params.minPrice || 0,
            maxPrice: params.maxPrice || 100,
        });
        
        setPriceRange([0, params.maxPrice || 100]);
    }, [searchParams]);

    const handleFilterChange = (e) => {
        const { name, value, checked, type } = e.target;
        // console.log({name, value, checked, type});

        let newFilters = { ...filters };

        if (type === 'checkbox') {
            if (checked) {
                newFilters[name] = [...(newFilters[name] || []), value];
            } else {
                newFilters[name] = newFilters[name].filter((item) => item !== value);
            }
        } else {
            newFilters[name] = value;
        }

        setFilters(newFilters);
        console.log(newFilters)
    };

    return (
        <div className="p-4">
            <h3
                className="text-xl font-medium text-gray-800 mb-4"
            >
                Filter
            </h3>

            {/* Category Filter */}
            <div className="mb-6">
                <label
                    className="block text-gray-600 font-medium mb-2"
                >
                    Category
                </label>
                    {categories.map((category) => (
                        <div 
                            key={category}
                            className="flex items-center mb-1"
                        >
                            <input 
                                type="radio"
                                name="category"
                                value={category}
                                onChange={handleFilterChange}
                                className="mr-2 h-4 w-4 text-yellow-800 focus:ring-yellow-400 border-gray-300"
                            />
                            <span className="text-gray-700">{category}</span>
                        </div>
                    ))}
            </div>
            
            {/* Gender Filter */}
            <div className="mb-6">
                <label
                    className="block text-gray-600 font-medium mb-2"
                >
                    Gender
                </label>
                    {genders.map((gender) => (
                        <div 
                            key={gender}
                            className="flex items-center mb-1"
                        >
                            <input 
                                type="radio"
                                name="gender"
                                value={gender}
                                onChange={handleFilterChange}
                                className="mr-2 h-4 w-4 text-yellow-800 focus:ring-yellow-400 border-gray-300"
                            />
                            <span className="text-gray-700">{gender}</span>
                        </div>
                    ))}
            </div>
            
            {/* Color Filter */}
            <div className="mb-6">
                <label
                    className="block text-gray-600 font-medium mb-2"
                >
                        Color
                </label>

                <div className="flex flex-wrap gap-2">
                    {colors.map((color) => (
                        <button
                            key={color}
                            name="color"
                            value={color}
                            onClick={handleFilterChange}
                            className="border w-8 h-8 rounded-full border-gray-300 cursor-pointer transition hover:scale-105"
                            style={{ backgroundColor: color.toLowerCase() }}
                        ></button>
                    ))}
                </div>
            </div>

            {/* Size Filter */}
            <div className="mb-6">
                <label className="block text-gray-600 font-medium mb-2">
                    Size
                </label>

                {sizes.map((size) => (
                    <div
                        key={size}
                        className="flex items-center gap-2 mb-1"
                    >
                        <input
                            type='checkbox'
                            name="size"
                            value={size}
                            onChange={handleFilterChange}
                            className="border-gray-300 h-4 w-4 text-yellow-900 focus:ring-yellow-500"
                        />
                         <span className="text-gray-700">{size}</span>
                    </div>
                ))}
            </div>

            {/* Material Filter */}
            <div className="mb-6">
                <label className="block text-gray-600 font-medium mb-2">
                    Material
                </label>

                {materials.map((material) => (
                    <div
                        key={material}
                        className="flex items-center gap-2 mb-1"
                    >
                        <input
                            type='checkbox'
                            name="material"
                            value={material}
                            onChange={handleFilterChange}
                            className="border-gray-300 h-4 w-4 text-yellow-900 focus:ring-yellow-500"
                        />
                         <span className="text-gray-700">{material}</span>
                    </div>
                ))}
            </div>

            {/* Brand Filter */}
            <div className="mb-6">
                <label className="block text-gray-600 font-medium mb-2">
                    Brands
                </label>

                {brands.map((brand) => (
                    <div
                        key={brand}
                        className="flex items-center gap-2 mb-1"
                    >
                        <input
                            type='checkbox'
                            name="brand"
                            value={brand}
                            onChange={handleFilterChange}
                            className="border-gray-300 h-4 w-4 text-yellow-900 focus:ring-yellow-500"
                        />
                         <span className="text-gray-700">{brand}</span>
                    </div>
                ))}
            </div>

            {/* Price rang filter */}
            <div>
                <label>
                    Price Range
                </label>
                <input 
                    type="range"
                    name="priceRange"
                    min={0}
                    max={100}
                    className="bg-gray-300 rounded-lg w-full h-2 cursor-pointer"
                />
                
                <div className="flex justify-between text-gray-600 mt-2">
                    <span>NPR 0</span>
                    <span>NPR {priceRange[1]}</span>
                </div>
            </div>
        </div>
    );
};
