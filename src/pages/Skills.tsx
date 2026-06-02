const Skills = () => {
  const skills = [
    { name: "Fast learner", icon: "🚀" },
    { name: "Good Communication Skills", icon: "💬" },
    { name: "Good in Teamwork", icon: "🤝" },
    { name: "Photography & photo editing", icon: "📸" },
    { name: "Graphic design (Canva, Picsart, Photoshop)", icon: "🎨" },
    { name: "Social media marketing and digital advertising", icon: "📱" },
  ];

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="flex items-center p-6 bg-purple-50 rounded-xl border border-purple-100 hover:shadow-md transition duration-300">
              <span className="text-3xl mr-4">{skill.icon}</span>
              <span className="text-lg font-semibold text-gray-800">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
