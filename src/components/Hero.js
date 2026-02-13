import React from "react";
import { ArrowRight, ShieldCheck, Clock, Star } from "lucide-react";

const Hero = () => {
  return (
    // Switched bg-white to surface-50 for a warmer, premium feel
    <section className='relative bg-surface-50 overflow-hidden border-b border-surface-200'>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center py-16 px-4 sm:px-6 lg:px-8'>
        {/* Left Content */}
        <div className='md:w-1/2 text-left space-y-6 z-10'>
          {/* Badge: Using custom surface border and brand green */}
          <div className='inline-flex items-center space-x-2 bg-fadedPrimary2/30 border border-primary2/20 px-3 py-1 rounded-full text-primary2'>
            <ShieldCheck size={16} />
            <span className='text-xs font-bold uppercase tracking-wider'>
              Ministry of Health Certified
            </span>
          </div>

          {/* Heading: Using surface-900 for a softer, professional black */}
          <h1 className='text-4xl md:text-6xl font-extrabold text-surface-900 leading-tight'>
            Your Health, <br />
            <span className='text-primary1 font-serif italic'>
              Our Priority.
            </span>
          </h1>

          {/* Text: Using surface-500 for better readability */}
          <p className='text-lg text-surface-500 max-w-lg'>
            Experience the gold standard in pharmaceutical care with our
            <span className='text-primary2 font-bold'>
              {" "}
              24-hour nationwide on-time delivery.{" "}
            </span>
            Trusted by thousands of families across the country, we provide
            reliable access to chronic medication and wellness essentials,
            exactly when you need them.
          </p>

          <div className='flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4'>
            {/* Primary Action: Brand Orange */}
            <button className='bg-primary1 text-white px-8 py-3 rounded-lg font-bold flex items-center justify-center hover:brightness-110 transition shadow-lg shadow-primary1/20'>
              Prescription only <ArrowRight size={18} className='ml-2' />
            </button>
            {/* Secondary Action: Brand Green */}
            <button className='border-2 border-primary2 text-primary2 px-8 py-3 rounded-lg font-bold hover:bg-fadedPrimary2/20 transition'>
              Shop Medicine and Vitamins
            </button>
          </div>

          <div className='flex items-center space-x-6 text-sm text-surface-500 pt-4'>
            <div className='flex items-center'>
              <Clock size={16} className='mr-2 text-primary2' />
              <span className='font-medium'>24/7 Support</span>
            </div>
            <div className='flex items-center font-medium'>
              <div className='flex text-primary1 mr-2'>
                <Star size={14} fill='currentColor' />
                <Star size={14} fill='currentColor' />
                <Star size={14} fill='currentColor' />
                <Star size={14} fill='currentColor' />
                <Star size={14} fill='currentColor' />
              </div>
              <span className='text-surface-900'>4.9/5 Rating</span>
            </div>
          </div>
        </div>

        {/* Right Image/Graphic */}
        <div className='hidden md:block md:w-1/2 mt-12 md:mt-0 relative'>
          {/* Animated Blobs: Now functional via your new config */}
          <div className='absolute -top-10 -left-10 w-72 h-72 bg-fadedPrimary1 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob'></div>
          <div className='absolute -bottom-10 right-10 w-72 h-72 bg-fadedPrimary2 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000'></div>

          <div className='relative'>
            <img
              src='https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=800'
              alt='Pharmacist helping customer'
              className='rounded-2xl shadow-2xl border-4 border-white'
            />

            {/* Floating Badge: Using Surface Grays for internal contrast */}
            <div className='absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center space-x-3 border border-surface-100'>
              <div className='bg-fadedPrimary2 p-2 rounded-full'>
                <Clock className='text-primary2' size={24} />
              </div>
              <div>
                <p className='text-[10px] uppercase tracking-widest text-surface-500 font-bold'>
                  Fast Delivery
                </p>
                <p className='text-sm font-bold text-primary2'>Under 30 Mins</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
