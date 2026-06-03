import { motion } from 'framer-motion';

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
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                    {work.images.map((img, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.95 }}
                        className="aspect-[3/4] overflow-hidden bg-gray-100 rounded-lg cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-500"
                      >
                        <img 
                          src={img} 
                          alt={`${work.title} design ${i + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
