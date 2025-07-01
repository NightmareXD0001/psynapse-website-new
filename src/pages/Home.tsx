
import { ArrowRight } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const Home = () => {
  const externalLinks = [
    {
      title: 'Gallery',
      description: 'Explore our visual journey',
      url: 'https://gallery.thematrixclan.com',
      color: 'from-green-400 to-emerald-500'
    },
    {
      title: 'Legacy',
      description: 'Our rich history and achievements',
      url: 'https://legacy.thematrixclan.com',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      title: 'Register for MEP 2025',
      description: 'Secure your spot at the symposium',
      url: 'https://mep.thematrixclan.com',
      color: 'from-purple-400 to-pink-500'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              The Matrix Clan
              <span className="block text-3xl md:text-5xl text-green-400 mt-4">
                presents
              </span>
            </h1>
            <div className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-8">
              MEP 2025
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Where technology meets innovation. Join us for the most anticipated symposium of the year.
            </p>
          </div>

          {/* External Links */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {externalLinks.map((link, index) => (
              <GlassCard key={link.title} className="p-6 group cursor-pointer transform hover:scale-105">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${link.color} mb-4 mx-auto flex items-center justify-center group-hover:shadow-lg transition-all duration-300`}>
                    <ArrowRight className="text-white transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{link.title}</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {link.description}
                  </p>
                </a>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Matrix Rain Effect (CSS Only) */}
      <div className="fixed inset-0 pointer-events-none opacity-10 z-0">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_98px,rgba(0,255,65,0.1)_100px)] animate-pulse" />
      </div>
    </div>
  );
};

export default Home;
