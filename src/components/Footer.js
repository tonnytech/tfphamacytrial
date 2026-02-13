import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Phone,
  Mail,
  MapPin,
  CreditCard,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

const Footer = () => {
  const branches = ["Umoja", "Rongai", "Utawala", "Karen"];

  return (
    <footer className='bg-primary2 text-surface-100'>
      {/* Upper Footer: Main Content */}
      <div className='max-w-7xl mx-auto px-4 py-12 md:py-16'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
          {/* Column 1: Brand & Bio */}
          <div className='space-y-6'>
            <div className='flex items-center'>
              <span className='text-3xl font-bold text-white'>TF</span>
              <span className='text-3xl font-bold text-primary1'>pharmacy</span>
            </div>
            <p className='text-sm text-fadedPrimary2 leading-relaxed'>
              Your neighborhood healthcare partner. We provide authentic
              medications, professional consultations, and clinical services
              across our four branches in Nairobi.
            </p>
            <div className='flex space-x-4'>
              <div className='bg-white/10 p-2 rounded-full hover:bg-primary1 transition-colors cursor-pointer'>
                <Facebook size={18} />
              </div>
              <div className='bg-white/10 p-2 rounded-full hover:bg-primary1 transition-colors cursor-pointer'>
                <Instagram size={18} />
              </div>
              <div className='bg-white/10 p-2 rounded-full hover:bg-primary1 transition-colors cursor-pointer'>
                <Twitter size={18} />
              </div>
            </div>
          </div>

          {/* Column 2: Our Offices */}
          <div>
            <h3 className='text-primary1 font-black uppercase text-xs tracking-widest mb-6'>
              Our Offices
            </h3>
            <ul className='space-y-4'>
              {branches.map((loc) => (
                <li
                  key={loc}
                  className='flex items-start space-x-3 group cursor-pointer'>
                  <MapPin size={16} className='text-primary1 mt-0.5' />
                  <div className='flex flex-col'>
                    <span className='text-sm font-bold text-white group-hover:text-primary1 transition-colors'>
                      TFpharmacy {loc}
                    </span>
                    <span className='text-[11px] text-fadedPrimary2 uppercase'>
                      Open 24/7
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Patient Services */}
          <div>
            <h3 className='text-primary1 font-black uppercase text-xs tracking-widest mb-6'>
              Patient Services
            </h3>
            <ul className='space-y-3'>
              {[
                "Prescription Upload",
                "Clinical Services",
                "Insurance Info",
                "Returns & Refunds",
                "Privacy Policy",
              ].map((link) => (
                <li
                  key={link}
                  className='flex items-center text-sm text-fadedPrimary2 hover:text-white transition-colors cursor-pointer group'>
                  <ChevronRight
                    size={14}
                    className='mr-2 text-primary1 opacity-0 group-hover:opacity-100 transition-all'
                  />
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Payment */}
          <div className='space-y-6'>
            <h3 className='text-primary1 font-black uppercase text-xs tracking-widest mb-6'>
              Contact Us
            </h3>
            <div className='space-y-4'>
              <a
                href='tel:+254700000000'
                className='flex items-center space-x-3 bg-white/5 p-3 rounded-xl border border-white/10 hover:border-primary1 transition-all'>
                <Phone size={18} className='text-primary1' />
                <span className='text-sm font-bold'>+254 700 000 000</span>
              </a>
              <div className='flex items-center space-x-3 text-sm px-3'>
                <Mail size={18} className='text-primary1' />
                <span>info@tfpharmacy.co.ke</span>
              </div>
            </div>

            <div className='pt-2 border-t border-white/10'>
              <p className='text-[10px] uppercase font-bold text-fadedPrimary2 mb-3'>
                Accepted Payments
              </p>
              <div className='flex items-center space-x-3 opacity-80'>
                <div className='bg-white px-2 py-1 rounded text-[10px] font-black text-green-600'>
                  M-PESA
                </div>
                <CreditCard size={20} />
                <ShieldCheck size={20} />
                <span className='text-[10px] font-bold'>NHIF</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Footer: Legal */}
      <div className='bg-black/20 py-6 border-t border-white/5'>
        <div className='max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='text-[11px] text-fadedPrimary2 font-medium'>
            © 2026 TFpharmacy Limited. All rights reserved.
          </p>
          <div className='flex items-center space-x-4'>
            <span className='text-[10px] bg-primary1/20 text-primary1 px-2 py-1 rounded font-bold border border-primary1/20'>
              MOH REG: PPB/2026/8842
            </span>
            <span className='text-[10px] text-fadedPrimary2 uppercase tracking-tighter'>
              Designed for Excellence
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
