import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/logo-splash.png';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-black py-4 sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link to="/" className="flex items-center group">
              <img src={logo} alt="wazi.gfx" className="h-10 md:h-12 w-auto group-hover:scale-105 transition-transform" />
              <span className="ml-4 text-xs font-black tracking-[0.3em] uppercase hidden sm:block">wazi.gfx</span>
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:flex items-center space-x-12"
          >
            <Link to="/" className="text-[11px] font-bold tracking-[0.2em] uppercase hover:text-purple-600 transition-colors">Home</Link>
            <Link to="/about" className="text-[11px] font-bold tracking-[0.2em] uppercase hover:text-purple-600 transition-colors">About</Link>
            <Link to="/works" className="text-[11px] font-bold tracking-[0.2em] uppercase hover:text-purple-600 transition-colors">Works</Link>
            <Link to="/contact" className="text-[11px] font-bold tracking-[0.2em] uppercase hover:text-purple-600 transition-colors">Get in Touch</Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:hidden"
          >
             <button className="text-[11px] font-bold tracking-widest uppercase border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors">Menu</button>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
