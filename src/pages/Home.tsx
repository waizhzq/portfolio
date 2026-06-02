import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 tracking-tight">
              Hi, I'm <span className="text-purple-600">Waiz Haziq</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto">
              A Social Science student with a passion for digital marketing, graphic design, and coding for fun.
            </p>
            <div className="flex justify-center space-x-4">
              <Link to="/contact" className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition duration-300">
                Contact Me
              </Link>
              <Link to="/about" className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition duration-300">
                About Me
              </Link>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -u-translate-y-1/2 translate-x-1/2 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-50"></div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-purple-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Graphic Design</h3>
              <p className="text-gray-600">Creating branding strategies and visuals using Canva, Picsart, and Photoshop.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-purple-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Digital Marketing</h3>
              <p className="text-gray-600">Social media content creation and digital advertising strategies.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-purple-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Photography</h3>
              <p className="text-gray-600">Capturing and editing high-quality visuals for events and portraits.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
