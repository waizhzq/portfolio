import { motion } from 'framer-motion';

const Skills = () => {
  const technicalSkills = [
    { name: "Graphic & Apparel Design", details: "Photoshop, Canva, Picsart, Vector Graphics", icon: "🎨" },
    { name: "Photography & Editing", details: "Lightroom, Snapseed", icon: "📸" },
    { name: "Social Media Marketing", details: "Digital Advertising & Strategy", icon: "📱" },
  ];

  const softSkills = [
    { name: "Leadership", details: "Team Management", icon: "👑" },
    { name: "Fast Learner", details: "Adaptable & Proactive", icon: "🚀" },
    { name: "Communication", details: "Strong Interpersonal Skills", icon: "💬" },
  ];

  const certifications = [
    { name: "Basics of AutoCAD", school: "POLIMAS", icon: "📐" },
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
            <div className="space-y-16">
              {/* Technical */}
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-purple-600 mb-8">Technical Proficiency</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black border border-black">
                  {technicalSkills.map((skill, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white p-8 group hover:bg-black transition-colors duration-500"
                    >
                      <span className="text-2xl mb-4 block group-hover:scale-110 transition-transform duration-500">{skill.icon}</span>
                      <p className="text-lg font-bold uppercase tracking-tight text-black group-hover:text-white mb-2">{skill.name}</p>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{skill.details}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Soft Skills */}
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-purple-600 mb-8">Soft Skills</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black border border-black">
                  {softSkills.map((skill, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white p-8 group hover:bg-black transition-colors duration-500"
                    >
                      <span className="text-2xl mb-4 block group-hover:scale-110 transition-transform duration-500">{skill.icon}</span>
                      <p className="text-lg font-bold uppercase tracking-tight text-black group-hover:text-white mb-2">{skill.name}</p>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{skill.details}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-purple-600 mb-8">Certifications</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black border border-black">
                  {certifications.map((cert, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white p-8 group hover:bg-black transition-colors duration-500"
                    >
                      <span className="text-2xl mb-4 block group-hover:scale-110 transition-transform duration-500">{cert.icon}</span>
                      <p className="text-lg font-bold uppercase tracking-tight text-black group-hover:text-white mb-2">{cert.name}</p>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{cert.school}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
