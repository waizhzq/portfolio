import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: "Graphic design (Canva, Picsart, Photoshop)", icon: "🎨" },
    { name: "Jersey Designing", icon: "👕" },
    { name: "Photography & photo editing", icon: "📸" },
    { name: "Social media marketing", icon: "📱" },
    { name: "Digital advertising", icon: "📊" },
    { name: "Fast learner", icon: "🚀" },
    { name: "Communication Skills", icon: "💬" },
    { name: "Teamwork", icon: "🤝" },
  ];

  return (
    <div className="bg-white min-h-screen pt-20 pb-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <h2 className="text-[11px] font-bold tracking-[0.4em] uppercase text-gray-400 mb-8">02 / Toolkit</h2>
            <h3 className="text-4xl font-bold uppercase tracking-tighter text-black leading-none">
              Skills & <br /> Expertise
            </h3>
          </div>
          
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black border border-black">
              {skills.map((skill, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-white p-12 group hover:bg-black transition-colors duration-500"
                >
                  <span className="text-3xl mb-6 block group-hover:scale-125 transition-transform duration-500">{skill.icon}</span>
                  <p className="text-xl font-bold uppercase tracking-tight text-black group-hover:text-white transition-colors duration-500">
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
