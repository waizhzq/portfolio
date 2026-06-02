import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo-splash.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Works', path: '/works' },
    { name: 'Education', path: '/education' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white border-b border-black py-4 sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link to="/" className="flex items-center group" onClick={() => setIsOpen(false)}>
              <img src={logo} alt="wazi.gfx" className="h-10 md:h-12 w-auto group-hover:scale-105 transition-transform" />
              <span className="ml-4 text-xs font-black tracking-[0.3em] uppercase hidden sm:block">wazi.gfx</span>
            </Link>
          </motion.div>
          
          {/* Desktop Menu */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:flex items-center space-x-12"
          >
            {menuItems.slice(0, 3).map((item) => (
              <Link key={item.name} to={item.path} className="text-[11px] font-bold tracking-[0.2em] uppercase hover:text-purple-600 transition-colors">{item.name}</Link>
            ))}
            <Link to="/contact" className="text-[11px] font-bold tracking-[0.2em] uppercase hover:text-purple-600 transition-colors text-purple-600">Get in Touch</Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:hidden"
          >
             <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-[11px] font-bold tracking-widest uppercase border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors z-[60] relative"
             >
              {isOpen ? 'Close' : 'Menu'}
             </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
            className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center p-6 md:hidden"
          >
            <div className="flex flex-col space-y-8 text-center">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <Link 
                    to={item.path} 
                    onClick={() => setIsOpen(false)}
                    className="text-4xl font-black uppercase tracking-tighter hover:text-purple-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-12 text-center"
            >
              <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Kedah, Malaysia</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
