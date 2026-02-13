import React from "react";
import { PhoneCall, MessageSquare, Truck, ClipboardCheck } from "lucide-react";

const CallToAction = () => {
  return (
    <section className='py-12 px-4'>
      <div className='max-w-7xl mx-auto'>
        {/* Main CTA Card */}
        <div className='relative bg-primary1 rounded-[2rem] overflow-hidden shadow-2xl shadow-primary1/30'>
          {/* Decorative Pattern Overlay */}
          <div className='absolute inset-0 opacity-10 pointer-events-none'>
            <div className='absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2'></div>
            <div className='absolute bottom-0 right-0 w-96 h-96 bg-primary2 rounded-full translate-x-1/3 translate-y-1/3'></div>
          </div>

          <div className='relative z-10 flex flex-col lg:flex-row items-center justify-between p-8 md:p-12 lg:p-16 gap-8'>
            {/* Text Content */}
            <div className='text-center lg:text-left space-y-4 max-w-2xl'>
              <h2 className='text-3xl md:text-5xl font-black text-white leading-tight'>
                Fastest Pharmacy <br />
                <span className='text-primary2 italic font-serif'>
                  Delivery in Kenya
                </span>
              </h2>
              <p className='text-white/90 text-lg md:text-xl font-medium leading-relaxed'>
                Join thousands of patients who trust us for{" "}
                <span className='underline decoration-primary2 underline-offset-4'>
                  on-time 24-hour delivery
                </span>
                . Whether it's an emergency or a monthly refill, we ensure your
                medication reaches you without delay.
              </p>

              {/* Trust Features */}
              <div className='flex flex-wrap justify-center lg:justify-start gap-4 pt-4'>
                <div className='flex items-center space-x-2 text-white bg-white/10 px-4 py-2 rounded-full border border-white/20 backdrop-blur-sm'>
                  <Truck size={18} />
                  <span className='text-xs font-bold uppercase'>
                    24/7 On-Time Delivery
                  </span>
                </div>
                <div className='flex items-center space-x-2 text-white bg-white/10 px-4 py-2 rounded-full border border-white/20 backdrop-blur-sm'>
                  <ClipboardCheck size={18} />
                  <span className='text-xs font-bold uppercase'>
                    Trusted by Thousands
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className='flex flex-col w-full sm:w-auto gap-4'>
              <button className='flex items-center justify-center space-x-3 bg-white text-primary1 px-8 py-4 rounded-2xl font-black text-lg hover:scale-105 transition-transform shadow-xl'>
                <MessageSquare size={22} />
                <span>WhatsApp Order</span>
              </button>

              <button className='flex items-center justify-center space-x-3 bg-primary2 text-white px-8 py-4 rounded-2xl font-black text-lg hover:brightness-110 transition-all border border-primary2/50 shadow-xl'>
                <PhoneCall size={22} />
                <span>Call Dispatch Line</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;