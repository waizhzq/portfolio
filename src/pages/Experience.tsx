import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      company: "UUM Handball Club",
      role: "Vice President",
      period: "Current",
      description: [
        "Lead executive club operations and manage communication between members and university administration.",
        "Coordinate team training, logistics, and club events while fostering a collaborative athletic culture."
      ]
    },
    {
      company: "Freelance Designer",
      role: "Apparel & Graphic Specialist",
      period: "Ongoing",
      description: [
        "Specialize in custom jersey sublimation and high-quality promotional posters.",
        "Utilize advanced vector-based tools for precise, scalable, and print-ready graphics."
      ]
    },
    {
      company: "ZUS Coffee",
      role: "Part-Time Barista",
      period: "March - September 2025",
      description: [
        "Maintained high standards of beverage preparation in a fast-paced environment.",
        "Demonstrated strong teamwork, adaptability, and communication skills."
      ]
    },
    {
      company: "Blugrafix",
      role: "Digital Marketer & Graphics Designer",
      period: "2023 - 2024",
      description: [
        "Designed social media content, logos, and branding strategies for company projects.",
        "Created clothing graphics, patterns, and prints for various apparel."
      ]
    },
    {
      company: "Freelance",
      role: "Photographer",
      period: "Ongoing",
      description: [
        "Captured and edited event/portrait photography with high-quality post-processing.",
        "Provided creative direction to clients for premium visual outcomes."
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-20 pb-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <h2 className="text-[11px] font-bold tracking-[0.4em] uppercase text-gray-400 mb-8">04 / Career</h2>
            <h3 className="text-4xl font-bold uppercase tracking-tighter text-black leading-none">
              Professional <br /> Journey
            </h3>
          </div>
          
          <div className="lg:w-2/3">
            <div className="space-y-32">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="col-span-1">
                      <p className="text-[11px] font-bold tracking-widest text-gray-400 uppercase">{exp.period}</p>
                    </div>
                    <div className="col-span-3">
                      <h4 className="text-3xl font-bold uppercase tracking-tighter text-black mb-2">{exp.role}</h4>
                      <p className="text-xl font-bold text-purple-600 uppercase tracking-widest mb-6">{exp.company}</p>
                      <ul className="space-y-4">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-lg text-gray-600 border-l border-gray-200 pl-6 leading-relaxed">
                            {item}
                          </li>
                        ))}
                      </ul>
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

export default Experience;
