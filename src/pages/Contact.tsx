import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="bg-white min-h-screen pt-20 pb-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row gap-20"
        >
          <div className="lg:w-1/3">
            <h2 className="text-[11px] font-bold tracking-[0.4em] uppercase text-gray-400 mb-8">05 / Connection</h2>
            <h3 className="text-4xl font-bold uppercase tracking-tighter text-black leading-none">
              Let's build <br /> something great
            </h3>
            
            <div className="mt-20 space-y-12">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Location</p>
                <p className="text-sm font-bold uppercase">Kedah, Malaysia</p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Socials</p>
                <div className="flex flex-col space-y-2">
                   <a href="#" className="text-sm font-bold uppercase hover:text-purple-600 transition-colors">Instagram</a>
                   <a href="#" className="text-sm font-bold uppercase hover:text-purple-600 transition-colors">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <form className="space-y-12">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-4">What's your name?</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-black py-4 text-2xl font-bold uppercase tracking-tighter focus:outline-none focus:border-purple-600 transition-colors"
                  placeholder="Type here..."
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-4">Your Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b border-black py-4 text-2xl font-bold uppercase tracking-tighter focus:outline-none focus:border-purple-600 transition-colors"
                  placeholder="email@address.com"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-4">Tell me about your project</label>
                <textarea 
                  className="w-full bg-transparent border-b border-black py-4 text-2xl font-bold uppercase tracking-tighter focus:outline-none focus:border-purple-600 transition-colors h-32 resize-none"
                  placeholder="Briefly describe..."
                />
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-12 py-6 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-purple-600 transition-colors"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
