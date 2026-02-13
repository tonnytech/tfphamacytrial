import React from "react";

const products = [
  {
    id: 1,
    name: "Multivitamin",
    price: 1200,
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=300",
    onSale: true,
  },
  {
    id: 2,
    name: "Thermometer",
    price: 850,
    image:
      "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=300",
    onSale: false,
  },
  {
    id: 3,
    name: "Sanitizer",
    price: 450,
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=300",
    onSale: false,
  },
  {
    id: 4,
    name: "First Aid Kit",
    price: 2200,
    image:
      "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=300",
    onSale: true,
  },
  {
    id: 5,
    name: "Blood Pressure",
    price: 4500,
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=300",
    onSale: false,
  },
  {
    id: 6,
    name: "N95 Masks",
    price: 250,
    image:
      "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?auto=format&fit=crop&q=80&w=300",
    onSale: true,
  },
  {
    id: 7,
    name: "Vitamin C",
    price: 900,
    image:
      "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=300",
    onSale: false,
  },
  {
    id: 8,
    name: "Pain Relief",
    price: 350,
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=300",
    onSale: false,
  },
];

const QuickEssentials = () => {
  return (
    <section className='bg-surface-50 py-8 px-2 border-b border-surface-200'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex items-center justify-between mb-4 px-2'>
          <h2 className='text-xs md:text-sm font-bold text-surface-900 uppercase tracking-widest border-l-4 border-primary1 pl-3'>
            Quick Essentials
          </h2>
          <button className='text-[10px] font-bold text-primary2 uppercase hover:text-primary1 transition-colors'>
            View All
          </button>
        </div>

        {/* 4 columns on all screens, wrap to 2 rows automatically */}
        <div className='grid grid-cols-4 gap-2 md:gap-4'>
          {products.map((product) => (
            <div
              key={product.id}
              className='flex flex-col border border-surface-200 rounded-xl overflow-hidden bg-white hover:shadow-md transition-shadow duration-300'>
              {/* Image Container */}
              <div className='relative aspect-square bg-surface-100'>
                <img
                  src={product.image}
                  alt={product.name}
                  className='w-full h-full object-cover'
                  loading='lazy'
                />
                {product.onSale && (
                  <div className='absolute top-1 left-1 bg-primary1 text-[8px] text-white px-1.5 py-0.5 rounded shadow-sm font-black uppercase'>
                    Sale
                  </div>
                )}
              </div>

              {/* Content */}
              <div className='p-2 flex flex-col flex-grow'>
                <h3 className='text-[10px] md:text-xs font-bold text-surface-900 leading-tight line-clamp-2 h-7 md:h-8'>
                  {product.name}
                </h3>

                <div className='mt-auto pt-2 flex items-center justify-between'>
                  <div className='flex flex-col'>
                    <span className='text-[10px] md:text-sm font-black text-primary2 leading-none'>
                      KSh {product.price}
                    </span>
                  </div>

                  {/* Plus button using Primary Orange */}
                  {/* <button className='bg-primary1 text-white p-1 md:p-1.5 rounded-lg hover:brightness-110 active:scale-95 transition-all shadow-sm shadow-primary1/20'>
                    <Plus size={14} strokeWidth={3} />
                  </button> */}
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
