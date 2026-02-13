// import React from "react";
// import { MapPin } from "lucide-react";

// const LocationBar = () => {
//   const locations = ["Umoja", "Rongai", "Utawala", "Karen"];

//   return (
//     <div className='bg-white py-2 px-4 border-b border-gray-100'>
//       <div className='max-w-7xl mx-auto flex justify-center'>
//         {/* Main Pill Container */}
//         <div className='flex items-center space-x-2 md:space-x-6 overflow-x-auto no-scrollbar bg-blue-50 px-6 py-1.5 rounded-full border border-blue-100'>
//           <span className='hidden md:block text-xs font-bold text-blue-600 uppercase tracking-wider whitespace-nowrap mr-2'>
//             Our Branches:
//           </span>

//           {locations.map((loc) => (
//             <div
//               key={loc}
//               className='flex items-center space-x-1 text-gray-700 hover:text-blue-600 cursor-pointer transition-colors'>
//               <MapPin size={14} className='text-blue-500' />
//               <span className='text-sm font-medium whitespace-nowrap'>
//                 {loc}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LocationBar;

import React, { useState } from "react";
import { MapPin, X, Navigation, PhoneCall } from "lucide-react";

const PharmacyLocations = () => {
  const [activeMap, setActiveMap] = useState(null);

  const locations = [
    {
      id: "umoja",
      name: "Umoja",
      address: "Outer Ring Rd, Umoja",
      embed: "https://www.google.com/maps/embed?pb=...",
    },
    {
      id: "rongai",
      name: "Rongai",
      address: "Magadi Rd, Rongai",
      embed: "https://www.google.com/maps/embed?pb=...",
    },
    {
      id: "utawala",
      name: "Utawala",
      address: "Eastern Bypass, Utawala",
      embed: "https://www.google.com/maps/embed?pb=...",
    },
    {
      id: "karen",
      name: "Karen",
      address: "Ngong Rd, Karen",
      embed: "https://www.google.com/maps/embed?pb=...",
    },
  ];

  return (
    <section className='bg-surface-50 border-b border-surface-200'>
      <div className='max-w-7xl mx-auto px-4 py-4'>
        {/* Header Label */}
        <div className='flex items-center justify-center space-x-2 mb-4 text-primary2'>
          <MapPin size={16} />
          <span className='text-xs font-bold uppercase tracking-widest'>
            Our Main Offices
          </span>
        </div>

        {/* 2x2 Grid for Mobile, 4x1 for Desktop */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
          {locations.map((loc) => (
            <button
              key={loc.id}
              onClick={() => setActiveMap(loc)}
              className={`py-2.5 px-2 rounded-xl text-xs font-bold transition-all border flex items-center justify-center space-x-2 ${
                activeMap?.id === loc.id
                  ? "bg-primary1 text-white border-primary1 shadow-md shadow-primary1/20"
                  : "bg-white text-surface-900 border-surface-200 hover:border-primary2 hover:text-primary2"
              }`}>
              <MapPin
                size={14}
                className={
                  activeMap?.id === loc.id ? "text-white" : "text-primary2"
                }
              />
              <span>{loc.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Map Dropdown Section */}
      {activeMap && (
        <div className='relative animate-in fade-in zoom-in-95 duration-300 bg-white border-t border-surface-200'>
          {/* Map Controls */}
          <div className='max-w-7xl mx-auto p-4'>
            <div className='flex justify-between items-start mb-4'>
              <div>
                <h3 className='text-primary2 font-black text-sm uppercase'>
                  TFpharmacy {activeMap.name}
                </h3>
                <p className='text-[10px] text-surface-500 flex items-center mt-1 uppercase font-semibold'>
                  <Navigation size={10} className='mr-1 text-primary1' />{" "}
                  {activeMap.address}
                </p>
              </div>

              {/* Visible Close Button */}
              <button
                onClick={() => setActiveMap(null)}
                className='bg-surface-100 p-2 rounded-full text-surface-900 hover:bg-error/10 hover:text-error transition-colors'
                aria-label='Close Map'>
                <X size={20} />
              </button>
            </div>

            {/* Map Placeholder */}
            <div className='aspect-video w-full rounded-2xl overflow-hidden border border-surface-200 bg-surface-100'>
              <div className='w-full h-full flex items-center justify-center bg-surface-200 text-surface-500 italic text-xs'>
                {/* Replace with actual <iframe> when you have your API keys/links */}
                Google Map for {activeMap.name} Branch
              </div>
            </div>

            {/* Quick Action for Branch */}
            <div className='mt-4 grid grid-cols-2 gap-3'>
              <button className='flex items-center justify-center space-x-2 bg-primary2 text-white py-3 rounded-xl font-bold text-xs uppercase tracking-tight'>
                <PhoneCall size={14} />
                <span>Call Branch</span>
              </button>
              <button className='flex items-center justify-center space-x-2 border-2 border-primary1 text-primary1 py-3 rounded-xl font-bold text-xs uppercase tracking-tight'>
                <Navigation size={14} />
                <span>Directions</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PharmacyLocations;