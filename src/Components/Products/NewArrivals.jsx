import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { Link } from "react-router"

export const NewArrivals = () => {

  const scrollRef = useRef(null);
  const [scrollLeft, setScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const newArrivals = [
    {
      _id: '1',
      name: 'Stylish Jacket',
      price: 120,
      images: [
        {
          url: 'https://picsum.photos/500/500?random=1',
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: '2',
      name: 'Stylish Jacket',
      price: 120,
      images: [
        {
          url: 'https://picsum.photos/500/500?random=2',
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: '3',
      name: 'Stylish Jacket',
      price: 120,
      images: [
        {
          url: 'https://picsum.photos/500/500?random=3',
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: '4',
      name: 'Stylish Jacket',
      price: 120,
      images: [
        {
          url: 'https://picsum.photos/500/500?random=4',
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: '5',
      name: 'Stylish Jacket',
      price: 120,
      images: [
        {
          url: 'https://picsum.photos/500/500?random=5',
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: '6',
      name: 'Stylish Jacket',
      price: 120,
      images: [
        {
          url: 'https://picsum.photos/500/500?random=6',
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: '7',
      name: 'Stylish Jacket',
      price: 120,
      images: [
        {
          url: 'https://picsum.photos/500/500?random=7',
          altText: "Stylish Jacket",
        },
      ],
    },
  ];

  // Update Scroll Buttons
  const updateScrollButtons = () => {
    const container = scrollRef.current;
    console.log({
      scrollLeft: container.scrollLeft,
      clientWidth: container.clientWidth,
      containerScrollWidth: container.scrollWidth,
    });
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListner("scroll", updateScrollButtons);
      updateScrollButtons();
    }
  })

  return (
    <section className="bg-amber-900">
      <div className=" bg-amber-300 mb-17 relative text-center">
        <h2 className="text-2xl font-bold mb-4">
          Explore New Arrivals
        </h2>
        <p className="text-lg text-gray-600 mb-5">
          Watch our new arrivals and choose your trend. Be free to discover the latest styles.
        </p>

        {/* Scroll Buttons */}
        <div className="absolute bottom-[-30] right-0 space-x-2">
          <button className="bg-white text-black p-2 rounded border border-b-gray-500">
            <FiChevronLeft className="text-2xl"/>
          </button>
          <button className="bg-white text-black p-2 rounded border border-b-gray-500">
            <FiChevronRight className="text-2xl"/>
          </button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex overflow-x-scroll space-x-2 relative">
        {newArrivals.map((product) => (
          <div key={product._id} className="min-w-[100%] sm:min-w-[50%]s lg:min-w-[30%] relative">
            <img 
              src={product.images[0]?.url}
              alt={product.images[0]?.altText || product.name}
              className="w-full h-[400px] object-cover rounded-lg"
            />

            <div className="absolute bottom-0 left-0 right-0 backdrop-blur-md p-4 rounded-b-lg text-white">
              <Link className="block">
                <h4>{product.name}</h4>
                <p>NPR{product.price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
      
    </section>
  )
}
