import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      school: "Universiti Utara Malaysia (UUM)",
      degree: "Bachelor in Applied Linguistics and Business Administration with Honours",
      period: "2025 - 2029",
      details: "Current Study",
      highlight: "In Progress"
    },
    {
      school: "SMK Jitra",
      degree: "Sijil Tinggi Persekolahan Malaysia (STPM)",
      period: "2023 - 2024",
      details: "Social Science",
      highlight: "Completed"
    },
    {
      school: "SMK Bandar Baru Darulaman",
      degree: "SPM",
      period: "2022",
      details: "Technical Communication Graphics",
      highlight: "4A's"
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-20 pb-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <h2 className="text-[11px] font-bold tracking-[0.4em] uppercase text-gray-400 mb-8">03 / Learning</h2>
            <h3 className="text-4xl font-bold uppercase tracking-tighter text-black leading-none">
              Educational <br /> Path
            </h3>
          </div>
          
          <div className="lg:w-2/3">
            <div className="space-y-24">
              {education.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 border-b border-black pb-8">
                    <div className="flex-grow">
                      <p className="text-[11px] font-bold tracking-widest text-purple-600 uppercase mb-4">{item.period}</p>
                      <h4 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-black group-hover:pl-4 transition-all duration-500">
                        {item.school}
                      </h4>
                      <p className="text-lg text-gray-500 mt-2 font-medium uppercase tracking-tighter">{item.degree}</p>
                    </div>
                    <div className="md:text-right">
                      <p className="text-xl font-black uppercase text-black">{item.highlight}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
