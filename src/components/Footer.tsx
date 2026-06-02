const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xl font-bold mb-4">Waiz Haziq</p>
        <p className="text-purple-200 mb-8">Social Science Student & Graphic Designer</p>
        <div className="flex justify-center space-x-6 mb-8">
          {/* Social icons could go here */}
        </div>
        <p className="text-purple-400 text-sm">
          &copy; {new Date().getFullYear()} Waiz Haziq. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
