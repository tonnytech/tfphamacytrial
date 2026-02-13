import React from "react";

const products = [
  {
    id: 1,
    name: "Multivitamin",
    price: 1200,
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    onSale: true,
  },
  {
    id: 2,
    name: "Digital Thermometer",
    price: 850,
    image:
      "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=800",
    onSale: false,
  },
  {
    id: 3,
    name: "Hand Sanitizer 500ml",
    price: 450,
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
    onSale: false,
  },
  {
    id: 4,
    name: "Compact First Aid Kit",
    price: 2200,
    image:
      "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=800",
    onSale: true,
  },
  {
    id: 5,
    name: "Blood Pressure Monitor",
    price: 4500,
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
    onSale: false,
  },
  {
    id: 6,
    name: "N95 Face Masks (10-pack)",
    price: 250,
    image:
      "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?auto=format&fit=crop&q=80&w=800",
    onSale: true,
  },
  {
    id: 7,
    name: "Vitamin C 1000mg",
    price: 900,
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    onSale: false,
  },
  {
    id: 8,
    name: "Paracetamol Pain Relief",
    price: 350,
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
    onSale: false,
  },
];

const QuickEssentials = () => {
  return (
    <section className='bg-surface-50 py-8 md:py-10 lg:py-12 border-b border-surface-200'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='flex items-center justify-between mb-5 md:mb-6'>
          <h2 className='text-lg sm:text-xl md:text-2xl font-bold text-surface-900 tracking-tight'>
            Quick Health Essentials
          </h2>
          <button className='text-sm sm:text-base font-medium text-primary1 hover:text-primary1/80 transition-colors flex items-center gap-1 group'>
            View All
            <span className='group-hover:translate-x-0.5 transition-transform'>
              →
            </span>
          </button>
        </div>

        {/* Product Grid */}
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5 lg:gap-6'>
          {products.map((product) => (
            <div
              key={product.id}
              className='group bg-white border border-surface-200 rounded-xl overflow-hidden hover:border-primary1/30 hover:shadow-xl transition-all duration-300 flex flex-col h-full'>
              {/* Image + Badge */}
              <div className='relative aspect-square bg-surface-100 overflow-hidden'>
                <img
                  src={product.image}
                  alt={product.name}
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out'
                  loading='lazy'
                />
                {product.onSale && (
                  <div className='absolute top-2 left-2 bg-primary1 text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-sm tracking-wide'>
                    SALE
                  </div>
                )}
              </div>

              {/* Details */}
              <div className='p-3 sm:p-4 flex flex-col flex-grow'>
                <h3 className='text-sm sm:text-base font-medium text-surface-900 line-clamp-2 min-h-[2.5rem] mb-2 group-hover:text-primary1 transition-colors duration-200'>
                  {product.name}
                </h3>

                <div className='mt-auto'>
                  <div className='flex items-baseline gap-2.5'>
                    <span className='text-lg sm:text-xl font-bold text-primary2'>
                      KSh {product.price.toLocaleString()}
                    </span>
                    {product.onSale && (
                      <span className='text-sm text-surface-500 line-through'>
                        KSh {Math.round(product.price * 1.25).toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickEssentials;
