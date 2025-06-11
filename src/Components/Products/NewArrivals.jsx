import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { Link } from "react-router"

export const NewArrivals = () => {

  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(false);

  const scroll = (direction) => {
    const scrollAmount = direction === 'left' ? -500 : 500;
    scrollRef.current.scrollBy({ left: scrollAmount, behaviour: 'smooth' });
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };
  
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

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
    
    if (container) {
      const leftScroll = container.scrollLeft;
      const rightScrollable = container.scrollWidth > leftScroll + container.clientWidth;
      setCanScrollLeft(leftScroll > 0);
      setCanScrollRight(rightScrollable);
    }

    console.log({
      scrollLeft: container.scrollLeft,
      clientWidth: container.clientWidth,
      containerScrollWidth: container.scrollWidth,
    });
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons();
      return () => container.removeEventListener('Scroll', updateScrollButtons);
    }
  }, []);

  return (
    <section className="lg:px-0">
      <div className="mb-17 relative text-center">
        <h2 className="text-2xl font-bold mb-4">
          Explore New Arrivals
        </h2>
        <p className="text-lg text-gray-600">
          Watch our new arrivals and choose your trend. Be free to discover the latest styles.
        </p>

        {/* Scroll Buttons */}
        <div className="absolute bottom-[-30] right-0 space-x-2">
          <button 
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`p-1 rounded border border-gray-300 ${
              canScrollLeft
              ? "bg-white text-black"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
              <FiChevronLeft className="text-2xl"/>
          </button>
          <button 
            onClick={() => scroll('right')}
            className={`p-1 rounded border border-gray-300 ${
              canScrollRight
              ? "bg-white text-black"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
              <FiChevronRight className="text-2xl"/>
          </button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div 
        ref={scrollRef} 
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUpOrLeave}
        className={`flex overflow-x-scroll space-x-2 relative ml-2 ${isDragging ? 'curser-grabbing' : 'curser-grab'}`}
      >
          {newArrivals.map((product) => (
            <div key={product._id} className="min-w-[100%] sm:min-w-[50%]s lg:min-w-[30%] relative">
              <img 
                src={product.images[0]?.url}
                alt={product.images[0]?.altText || product.name}
                className="w-full h-[400px] object-cover rounded-lg"
                draggable='false'
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
