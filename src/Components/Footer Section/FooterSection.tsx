// import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function FooterSection() {
    return(
    <footer className="bg-main border-t border-gray-800 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 text-left">
        
        {/* Column 1: Brand & About */}
        <div className="flex flex-col  relative bottom-15">
          <img src="/src/assets/images/Document from Seif Ahmad (1).png" className="object-contain h-fit" alt="" />
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Premium athletic wear designed for those who move with speed and grace. Experience the perfect blend of performance and style.
          </p>
        </div>

        {/* Column 2: Shop */}
        <div>
          <h3 className="text-text-base font-bold mb-6 tracking-widest uppercase text-xs">Shop</h3>
          <ul className="flex flex-col gap-3 text-gray-400 text-sm">
            <li className="hover:text-brand-hover transition-colors cursor-pointer">All Collections</li>
            <li className="hover:text-brand-hover transition-colors cursor-pointer">New Arrivals</li>
            <li className="hover:text-brand-hover transition-colors cursor-pointer">Best Sellers</li>
            <li className="hover:text-brand-hover transition-colors cursor-pointer">Men's Training</li>
          </ul>
        </div>

        {/* Column 3: Support */}
        <div>
          <h3 className="text-text-base font-bold mb-6 tracking-widest uppercase text-xs">Support</h3>
          <ul className="flex flex-col gap-3 text-gray-400 text-sm">
            <li className="hover:text-brand-hover transition-colors cursor-pointer">Order Tracking</li>
            <li className="hover:text-brand-hover transition-colors cursor-pointer">Returns & Exchanges</li>
            <li className="hover:text-brand-hover transition-colors cursor-pointer">Shipping Info</li>
            <li className="hover:text-brand-hover transition-colors cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* Column 4: Social & Copyright */}
        <div>
          <h3 className="text-text-base font-bold mb-6 tracking-widest uppercase text-xs">Follow Us</h3>
          <div className="flex gap-4">
             {/* Replace text with Icons when ready */}
             <div className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-brand-hover hover:text-main transition-all cursor-pointer">FB</div>
             <div className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-brand-hover hover:text-main transition-all cursor-pointer">IG</div>
             <div className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-brand-hover hover:text-main transition-all cursor-pointer">X</div>
          </div>
          <p className="mt-8 text-gray-500 text-[10px] uppercase tracking-widest">
            © {new Date().getFullYear()} GHZZAL Athletics.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-gray-900/50 text-center">
        <p className="text-gray-600 text-[10px] tracking-[0.3em] uppercase">
          Built for the Elite Performance
        </p>
      </div>
    </footer>
  );
  };
  
  ;