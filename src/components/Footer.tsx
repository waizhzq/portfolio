import logo from '../assets/logo-splash.png';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-black py-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="max-w-md">
            <img src={logo} alt="wazi.gfx" className="h-16 w-auto mb-8" />
            <h4 className="text-[11px] font-bold tracking-[0.4em] uppercase text-gray-400 mb-6">Contact</h4>
            <a href="mailto:waizhzq@gmail.com" className="text-3xl md:text-5xl font-bold uppercase tracking-tighter hover:text-purple-600 transition-colors">
              waizhzq@gmail.com
            </a>
          </div>
          
          <div className="text-right">
            <div className="flex space-x-8 mb-8 justify-end">
              <a href="https://www.instagram.com/waizhzq" target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold uppercase tracking-widest hover:text-purple-600 transition-colors">Instagram</a>
              <a href="https://www.linkedin.com/in/waizhzq" target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold uppercase tracking-widest hover:text-purple-600 transition-colors">LinkedIn</a>
            </div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
              © {new Date().getFullYear()} Waiz Haziq — All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
