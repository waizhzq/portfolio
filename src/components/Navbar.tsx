import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-black py-6 sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-baseline">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link to="/" className="text-sm font-bold tracking-widest uppercase">WAIZ HAZIQ</Link>
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
             <button className="text-sm font-bold tracking-widest uppercase">Menu</button>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
