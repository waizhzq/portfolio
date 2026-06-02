import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="bg-white min-h-screen pt-20 pb-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row gap-20"
        >
          <div className="lg:w-1/3">
            <h2 className="text-[11px] font-bold tracking-[0.4em] uppercase text-gray-400 mb-8">01 / Profile</h2>
            <h3 className="text-4xl font-bold uppercase tracking-tighter text-black leading-none">
              Behind the <br /> Vision
            </h3>
          </div>
          
          <div className="lg:w-2/3 space-y-12">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-2xl md:text-4xl font-medium tracking-tight leading-[1.2] text-black"
            >
              My name is Waiz Haziq. I'm a social science student turned degree student at <span className="underline decoration-purple-600">Universiti Utara Malaysia (UUM)</span>. 
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg text-gray-600 leading-relaxed">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <p>
                  I have a strong academic and technical knowledge across digital marketing and graphic design. 
                  My creative journey led me to specialize in branding strategies and freelance jersey designing, 
                  where I combine technical precision with visual storytelling.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <p>
                  As an ambivert, I thrive in collaborative environments, leveraging my communication skills to bridge ideas 
                  between team members. I am disciplined, open-minded, and I code for fun to expand my technical horizons.
                </p>
              </motion.div>
            </div>

            <div className="pt-12 border-t border-gray-200 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">Focus</p>
                <p className="text-sm font-bold uppercase">Jersey Design</p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">Education</p>
                <p className="text-sm font-bold uppercase">Degree @ UUM</p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">Language</p>
                <p className="text-sm font-bold uppercase">Malay / English</p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">Tech</p>
                <p className="text-sm font-bold uppercase">JS / TS / React</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
