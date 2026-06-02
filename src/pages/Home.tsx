import { motion } from 'framer-motion';
import profileImg from '../assets/profile.png';

const Home = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Main Title Section */}
      <section className="pt-20 pb-12 border-b border-black">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-[15vw] md:text-[12vw] leading-[0.9] font-black uppercase tracking-tighter text-black"
          >
            Waiz <br /> Haziq
            <span className="block text-[4vw] md:text-[2vw] tracking-[0.5em] text-purple-600 mt-4">wazi.gfx</span>
          </motion.h1>
          
          <div className="flex flex-col md:flex-row justify-between items-start mt-12 gap-8">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-lg md:text-xl font-medium max-w-xl uppercase tracking-tight"
            >
              Social Science Student & Graphic Designer. <br />
              Now pursuing degree at UUM. <br />
              Freelance Jersey Designing & Visual Creator.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-[11px] font-bold tracking-[0.2em] uppercase space-y-2"
            >
              <p>Based in Kedah, Malaysia</p>
              <p>Digital Marketing Specialist</p>
              <p>I code for fun</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Large Image Section */}
      <section className="py-12">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative w-full md:w-2/3 lg:w-1/2 aspect-[2/3] max-h-[85vh] overflow-hidden bg-gray-50 group border border-black"
          >
            <img 
              src={profileImg} 
              alt="Waiz Haziq" 
              className="w-full h-full object-cover object-[center_top] grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out group-hover:scale-105"
            />
            <div className="absolute bottom-8 left-8 text-white z-10 hidden md:block mix-blend-difference">
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase">Identity / 01</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-32 border-t border-black bg-black text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-6xl font-bold uppercase tracking-tighter"
          >
            "Creative, disciplined, and <br /> constantly learning."
          </motion.h2>
        </div>
      </section>
    </div>
  );
};

export default Home;
