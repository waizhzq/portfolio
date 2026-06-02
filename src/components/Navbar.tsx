import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-purple-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-purple-600">Waiz Haziq</Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-purple-600 font-medium">Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-purple-600 font-medium">About</Link>
            <Link to="/skills" className="text-gray-600 hover:text-purple-600 font-medium">Skills</Link>
            <Link to="/education" className="text-gray-600 hover:text-purple-600 font-medium">Education</Link>
            <Link to="/experience" className="text-gray-600 hover:text-purple-600 font-medium">Experience</Link>
            <Link to="/contact" className="text-gray-600 hover:text-purple-600 font-medium">Contact</Link>
          </div>
          {/* Mobile menu button could go here */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
