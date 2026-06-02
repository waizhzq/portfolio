const About = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 border-l-8 border-purple-600 pl-6">About Me</h2>
        <div className="prose prose-purple lg:prose-xl text-gray-600 space-y-6">
          <p>
            My name is <span className="font-bold text-purple-700">Waiz Haziq</span> (MUHAMMAD BIN MOHD WAIZ SUHAIMI HAZIQ). 
            I am currently a student pursuing a Bachelor in Applied Linguistics and Business Administration with Honours (2025-2029).
          </p>
          <p>
            I have a strong academic and technical knowledge across digital marketing and graphic design. 
            I consider myself an ambivert—open-minded, disciplined, creative, and able to work effectively in a group. 
            This allows me to maintain excellent communication skills with friends and colleagues alike.
          </p>
          <p>
            Beyond my academic pursuits, I have a deep interest in technology and visual arts. I code for fun, 
            which complements my technical background in graphic design and digital media.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-purple-50 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-purple-900 mb-4">Languages</h3>
            <ul className="space-y-2 text-purple-800">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                Malay (Native)
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                English (Fluent - MUET Band 4.0)
              </li>
            </ul>
          </div>
          <div className="bg-purple-50 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-purple-900 mb-4">Personality</h3>
            <div className="flex flex-wrap gap-2">
              {['Ambivert', 'Open-minded', 'Disciplined', 'Creative', 'Team Player'].map((trait) => (
                <span key={trait} className="bg-white px-4 py-1 rounded-full text-purple-700 border border-purple-200 text-sm font-medium">
                  {trait}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
