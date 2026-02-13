import React from "react";
import {
  Syringe,
  RotateCcw,
  Activity,
  Droplets,
  Pill,
  FlaskConical,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Immunization",
      icon: <Syringe size={22} />,
      color: "bg-fadedPrimary1 text-primary1", // Using your config colors
    },
    {
      title: "Refill Meds",
      icon: <RotateCcw size={22} />,
      color: "bg-fadedPrimary2 text-primary2",
    },
    {
      title: "Pressure Check",
      icon: <Activity size={22} />,
      color: "bg-fadedPrimary1 text-primary1",
    },
    {
      title: "Blood Sugar",
      icon: <Droplets size={22} />,
      color: "bg-fadedPrimary2 text-primary2",
    },
    {
      title: "Prescriptions",
      icon: <Pill size={22} />,
      color: "bg-fadedPrimary1 text-primary1",
    },
    {
      title: "Compounding",
      icon: <FlaskConical size={22} />,
      color: "bg-fadedPrimary2 text-primary2",
    },
  ];

  return (
    <section className='py-8 bg-surface-50'>
      <div className='max-w-7xl mx-auto px-4'>
        <h2 className='text-sm font-black text-primary2 mb-6 text-center uppercase tracking-widest'>
          Professional Clinical Services
        </h2>

        {/* 3 columns on mobile (grid-cols-3), 6 columns on desktop (md:grid-cols-6) */}
        <div className='grid grid-cols-3 md:grid-cols-6 gap-y-6 gap-x-2'>
          {services.map((service, idx) => (
            <div
              key={idx}
              className='flex flex-col items-center group cursor-pointer'>
              <div
                className={`
                ${service.color} 
                w-14 h-14 md:w-20 md:h-20 
                rounded-2xl flex items-center justify-center 
                shadow-sm border border-white group-hover:shadow-md 
                group-hover:-translate-y-1 transition-all duration-300
              `}>
                {service.icon}
              </div>
              <span className='mt-3 text-[10px] md:text-xs font-bold text-surface-900 text-center uppercase tracking-tighter leading-tight px-1'>
                {service.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
