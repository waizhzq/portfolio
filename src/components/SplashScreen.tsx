import { motion } from 'framer-motion';
import splashLogo from '../assets/logo-splash.png';

const SplashScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2.5 }}
      onAnimationComplete={() => document.body.style.overflow = 'auto'}
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center pointer-events-none"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          duration: 1.2, 
          ease: "easeOut",
          opacity: { duration: 0.8 }
        }}
        className="relative"
      >
        <img src={splashLogo} alt="WaziENT" className="w-64 md:w-80" />
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
          className="h-1 bg-white mt-8"
        />
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;
