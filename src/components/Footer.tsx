import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center gap-2">
            <p className="text-gray-400">
              Made with
            </p>
            <Heart size={18} className="text-red-500 fill-current animate-pulse" />
            <p className="text-gray-400">
              by <span className="text-white font-semibold">Subiksha S</span>
            </p>
          </div>

          <div className="text-gray-400 text-sm">
            <p>2025 Subiksha S. All rights reserved.</p>
          </div>

          <div className="text-gray-500 text-xs">
            <p>Aspiring Engineer | AI & Web Development Enthusiast</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
