const Education = () => {
  const education = [
    {
      school: "Applied Linguistics and Business Administration with Honours",
      degree: "Bachelor's Degree",
      period: "2025 - 2029",
      details: "Currently studying",
      highlight: "In progress"
    },
    {
      school: "SMK Jitra",
      degree: "Sijil Tinggi Persekolahan Malaysia (STPM)",
      period: "2023 - 2024",
      details: "Social Science",
      highlight: "PNGK (TBC)"
    },
    {
      school: "Sekolah Menengah Kebangsaan Bandar Baru Darulaman",
      degree: "SPM",
      period: "2022",
      details: "Technical Communication Graphics",
      highlight: "4A's"
    },
    {
      school: "Malaysian University English Test (MUET)",
      degree: "English Proficiency",
      period: "2024",
      details: "",
      highlight: "Band 4.0"
    }
  ];

  return (
    <div className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 border-l-8 border-purple-600 pl-6">Education</h2>
        <div className="space-y-12">
          {education.map((item, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-purple-100 pb-8 last:pb-0">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-600 shadow-[0_0_0_4px_rgba(147,51,234,0.1)]"></div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{item.school}</h3>
                  <p className="text-purple-600 font-semibold mt-1">{item.degree}</p>
                  {item.details && <p className="text-gray-600 mt-2 italic">{item.details}</p>}
                </div>
                <div className="mt-4 md:mt-0 md:text-right">
                  <span className="bg-purple-50 text-purple-700 px-4 py-1 rounded-full text-sm font-bold border border-purple-100">
                    {item.period}
                  </span>
                  <p className="text-purple-900 font-bold mt-2 text-lg">{item.highlight}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
