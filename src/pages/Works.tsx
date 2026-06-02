import { motion } from 'framer-motion';

const Works = () => {
  const works = [
    { title: "Jersey Design Collection", category: "Apparel / Graphic Design", year: "2026" },
    { title: "Blugrafix Rebrand", category: "Branding / Digital", year: "2025" },
    { title: "ZUS Coffee Visuals", category: "Photography", year: "2025" },
    { title: "Personal Portfolio", category: "Web Design / Coding", year: "2026" },
  ];

  return (
    <div className="bg-white min-h-screen pt-20 pb-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <h2 className="text-[11px] font-bold tracking-[0.4em] uppercase text-gray-400 mb-8">Selected Works</h2>
        <div className="space-y-12">
          {works.map((work, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-black pb-8 group-hover:border-purple-600 transition-colors duration-500">
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">{work.category}</p>
                  <h3 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter group-hover:pl-8 transition-all duration-500">{work.title}</h3>
                </div>
                <div className="mt-4 md:mt-0">
                  <p className="text-2xl font-black uppercase text-black">{work.year}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
