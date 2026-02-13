import React from "react";

const categories = [
  {
    name: "Pain Relief",
    img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=200",
    count: "120+ Items",
  },
  {
    name: "Cold & Flu",
    img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=200",
    count: "80+ Items",
  },
  {
    name: "Baby Care",
    img: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&q=80&w=200",
    count: "45+ Items",
  },
  {
    name: "Skin Care",
    img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=200",
    count: "90+ Items",
  },
  {
    name: "Supplements",
    img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=200",
    count: "150+ Items",
  },
  {
    name: "First Aid",
    img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=200",
    count: "30+ Items",
  },
];

const ShopByCategory = () => {
  return (
    <section className='py-12 bg-white'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='text-center mb-10'>
          <h2 className='text-2xl font-bold text-gray-900'>Shop by Category</h2>
          <div className='h-1 w-20 bg-blue-600 mx-auto mt-2 rounded-full'></div>
        </div>

        {/* Responsive Flex Wrapper */}
        <div className='flex flex-wrap justify-center gap-6 md:gap-10'>
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className='flex flex-col items-center group cursor-pointer w-[100px] md:w-[140px]'>
              {/* Circular Image Container */}
              <div className='relative w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-transparent group-hover:border-blue-500 transition-all duration-300 shadow-md'>
                <img
                  src={cat.img}
                  alt={cat.name}
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                />
                <div className='absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors'></div>
              </div>

              {/* Text Labels */}
              <h3 className='mt-4 text-xs md:text-sm font-bold text-gray-800 text-center group-hover:text-blue-600'>
                {cat.name}
              </h3>
              <span className='text-[10px] text-gray-400 font-medium'>
                {cat.count}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
