const Experience = () => {
  const experiences = [
    {
      company: "Blugrafix",
      role: "Digital Marketer / Graphics Designer",
      period: "Present",
      description: [
        "Designed social media content, logos, and marketing materials using Canva, Picsart, and Photoshop.",
        "Created branding strategies and visuals for company projects.",
        "Designed clothing graphics, patterns, and prints for various apparel."
      ]
    },
    {
      company: "Freelance",
      role: "Photographer",
      period: "Ongoing",
      description: [
        "Captured and edited photos for clients, including events and portraits.",
        "Used Lightroom and Snapseed for post-processing.",
        "Provided creative directions to clients for high-quality visuals."
      ]
    },
    {
      company: "Sultan Abdul Halim Mu’adzam Shah Polytechnic (POLIMAS)",
      role: "AutoCAD Course",
      period: "Completed",
      description: [
        "Participated in a Basics of AutoCAD Course.",
        "Gained fundamental skills in 2D and 3D drafting."
      ]
    }
  ];

  return (
    <div className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 border-l-8 border-purple-600 pl-6">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-purple-50 p-8 rounded-3xl border border-purple-100">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{exp.role}</h3>
                  <p className="text-purple-600 text-lg font-semibold">{exp.company}</p>
                </div>
                <span className="mt-2 md:mt-0 bg-white text-purple-700 px-4 py-1 rounded-full text-sm font-bold border border-purple-200">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-3">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-purple-600 mr-3 mt-1.5">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
