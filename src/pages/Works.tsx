import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

// Import jersey designs
import design1 from '../assets/designs/1.png';
import design2 from '../assets/designs/asset2.png';
import design3 from '../assets/designs/finallooksabah.png';
import design4 from '../assets/designs/kpcpenangtakrawv2.png';
import design5 from '../assets/designs/NPfinallook.png';
import design6 from '../assets/designs/SHamDeisgnOffalternate.png';
import design7 from '../assets/designs/SHamDeisgnOffv2.png';
import design8 from '../assets/designs/SMEBANKMERCH.png';

const Works = () => {
  const [activeGallery, setActiveGallery] = useState<number | null>(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const works = [
    {
      title: "Freelance Designer",
      category: "Apparel & Branding",
      year: "Current",
      details: [
        "Specialize in apparel design, specifically focusing on custom jersey sublimation and high-quality promotional posters.",
        "Utilize advanced vector-based tools to create precise, scalable, and print-ready graphics for various clients and teams."
      ],
      images: [design1, design2, design3, design4, design5, design6, design7, design8]
    },
    {
      title: "ZUS Coffee",
      category: "Service & Operations",
      year: "2025",
      details: [
        "Delivered excellent customer service and maintained high standards of beverage preparation in a fast-paced environment.",
        "Demonstrated strong teamwork, adaptability, and communication skills while assisting with daily store operations."
      ]
    },
    {
      title: "Blugrafix",
      category: "Digital Marketing",
      year: "2023 - 2024",
      details: [
        "Designed social media content, logos, and marketing materials using Canva, Picsart, and Photoshop.",
        "Created branding strategies and visuals for various company projects.",
        "Designed clothing graphics, patterns, and prints for a variety of apparel."
      ]
    },
    {
      title: "Freelance Photographer",
      category: "Visual Arts",
      year: "Ongoing",
      details: [
        "Captured and edited photos for clients, focusing on events and portraits.",
        "Utilized Lightroom and Snapseed for high-quality post-processing.",
        "Provided creative direction to clients to ensure premium visual outcomes."
      ]
    }
  ];

  const nextImage = (images: string[]) => {
    setCurrentImgIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (images: string[]) => {
    setCurrentImgIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-white min-h-screen pt-20 pb-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <h2 className="text-[11px] font-bold tracking-[0.4em] uppercase text-gray-400 mb-16">Selected Portfolio</h2>
        <div className="space-y-24">
          {works.map((work, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group"
            >
              <div className="border-b border-black pb-12 group-hover:border-purple-600 transition-colors duration-500">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
                  <div>
                    <p className="text-[10px] font-bold text-purple-600 uppercase tracking-widest mb-4">{work.category}</p>
                    <h3 className="text-4xl md:text-7xl font-black uppercase tracking-tighter group-hover:pl-8 transition-all duration-500">
                      {work.title}
                    </h3>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <p className="text-2xl font-black uppercase text-black">{work.year}</p>
                  </div>
                </div>
                <div className="max-w-3xl mb-12">
                  <ul className="space-y-4">
                    {work.details.map((detail, i) => (
                      <li key={i} className="text-lg md:text-xl text-gray-600 font-medium leading-tight">
                        — {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {work.images && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setActiveGallery(index);
                      setCurrentImgIndex(0);
                    }}
                    className="px-8 py-4 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-purple-600 transition-colors duration-300 rounded-full"
                  >
                    View Project Designs
                  </motion.button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Gallery Overlay */}
      <AnimatePresence>
        {activeGallery !== null && works[activeGallery].images && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-12"
          >
            <button 
              onClick={() => setActiveGallery(null)}
              className="absolute top-8 right-8 text-white text-4xl hover:text-purple-500 transition-colors z-[60]"
            >
              ×
            </button>

            <div className="relative w-full h-full flex items-center justify-center">
              {/* Navigation Arrows */}
              <button 
                onClick={(e) => { e.stopPropagation(); prevImage(works[activeGallery].images!); }}
                className="absolute left-0 md:left-4 z-[60] text-white/50 hover:text-white text-4xl md:text-6xl p-4 transition-colors"
              >
                ←
              </button>
              
              <button 
                onClick={(e) => { e.stopPropagation(); nextImage(works[activeGallery].images!); }}
                className="absolute right-0 md:right-4 z-[60] text-white/50 hover:text-white text-4xl md:text-6xl p-4 transition-colors"
              >
                →
              </button>

              {/* Image Container */}
              <div className="w-full h-full flex flex-col items-center justify-center gap-4">
                <motion.div
                  key={currentImgIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center"
                >
                  <img 
                    src={works[activeGallery].images[currentImgIndex]} 
                    alt="Jersey Design"
                    className="max-w-full max-h-full object-contain shadow-2xl"
                  />
                </motion.div>
                
                {/* Counter */}
                <div className="text-white/40 text-[10px] font-bold tracking-[0.4em] uppercase">
                  {currentImgIndex + 1} / {works[activeGallery].images?.length}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Works;
