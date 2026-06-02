import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-black py-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="max-w-md">
            <h4 className="text-[11px] font-bold tracking-[0.4em] uppercase text-gray-400 mb-6">Contact</h4>
            <a href="mailto:waizhzq@gmail.com" className="text-3xl md:text-5xl font-bold uppercase tracking-tighter hover:text-purple-600 transition-colors">
              waizhzq@gmail.com
            </a>
          </div>
          
          <div className="text-right">
            <div className="flex space-x-8 mb-8 justify-end">
              <a href="#" className="text-[10px] font-bold uppercase tracking-widest hover:text-purple-600 transition-colors">Instagram</a>
              <a href="#" className="text-[10px] font-bold uppercase tracking-widest hover:text-purple-600 transition-colors">LinkedIn</a>
              <a href="#" className="text-[10px] font-bold uppercase tracking-widest hover:text-purple-600 transition-colors">Behance</a>
            </div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
              © {new Date().getFullYear()} Waiz Haziq — All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
