import React from "react";
import { Megaphone } from "lucide-react";

const AnnouncementBar = () => {
  return (
    <div className='bg-green-600 text-white py-2 px-4 shadow-inner'>
      <div className='max-w-7xl mx-auto flex items-center justify-center space-x-3'>
        {/* Icon with a slight pulse effect */}
        <div className='hidden sm:block'>
          <Megaphone size={18} className='animate-bounce' />
        </div>

        <p className='text-center text-sm md:text-base font-semibold tracking-wide'>
          Free delivery for orders over KSh 2,000! Anywhere ! At any time!
        </p>

        {/* Small "Shop Now" button */}
        <button className='hidden md:block bg-white text-green-700 px-3 py-0.5 rounded-md text-xs font-bold uppercase hover:bg-green-50 transition-colors'>
          Claim Offer
        </button>
      </div>
    </div>
  );
};

export default AnnouncementBar;
