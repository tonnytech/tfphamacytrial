import React from "react";
import { Search } from "lucide-react";

const PharmacySearchBar = () => {
  return (
    <div className='bg-surface-100 py-3 px-4 border-b border-surface-200'>
      <div className='max-w-7xl mx-auto'>
        <div className='relative flex items-center w-full max-w-3xl mx-auto'>
          {/* Search Icon */}
          <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
            <Search className='h-5 w-5 text-surface-500' />
          </div>

          {/* Input Field */}
          <input
            type='text'
            className='block w-full pl-10 pr-3 py-2 border border-surface-200 rounded-full leading-5 bg-white placeholder-surface-500 focus:outline-none focus:ring-2 focus:ring-primary2 focus:border-primary2 sm:text-sm transition-all shadow-sm text-surface-900'
            placeholder='Search for medications, vitamins, or symptoms...'
          />

          {/* Search Button */}
          <button className='ml-3 hidden sm:block bg-primary1 hover:brightness-110 text-white px-6 py-2 rounded-full font-bold transition-all shadow-sm shadow-primary1/20'>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default PharmacySearchBar;
