
import { Link } from 'react-router-dom';
import GlassCard from './GlassCard';
import { legalData } from '../data/legalData';

const Footer = () => {
  const footerData = legalData.footer;

  return (
    <footer className="mt-20 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <GlassCard className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Logo/Brand */}
            <div className="text-center md:text-left">
              <Link to="/" className="text-2xl font-bold text-white hover:text-psynapse transition-colors">
                Psynapse
              </Link>
              <p className="text-gray-400 text-sm mt-2">
                Psychology Society - Mount St. Mary's School
              </p>
            </div>

            {/* Legal Links */}
            <div className="text-center">
              <div className="flex flex-wrap justify-center gap-6">
                {footerData.links.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-gray-300 hover:text-psynapse transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © 2024 Psynapse. All rights reserved.
              </p>
            </div>
          </div>
        </GlassCard>
      </div>
    </footer>
  );
};

export default Footer;
