
import { ArrowRight, Zap, Users, Calendar } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const Home = () => {
  const externalLinks = [
    {
      title: 'Gallery',
      description: 'Explore our visual journey',
      url: 'https://gallery.thematrixclan.com',
      icon: Users
    },
    {
      title: 'Legacy',
      description: 'Our rich history and achievements',
      url: 'https://legacy.thematrixclan.com/psynapse',
      icon: Zap
    },
    {
      title: 'Register for MEP 2025',
      description: 'Secure your spot at the symposium',
      url: 'https://mep.thematrixclan.com',
      icon: Calendar
    }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Lilac Digital Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-10">
          {/* Vertical lines */}
          <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_24px,rgba(183,148,246,0.1)_26px)]" />
          {/* Horizontal lines */}
          <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_24px,rgba(183,148,246,0.05)_26px)]" />
        </div>
        
        {/* Animated Lilac Lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-psynapse/20 to-transparent animate-pulse" style={{ animationDelay: '0s' }} />
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-psynapse/15 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-psynapse/25 to-transparent animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-6xl mx-auto">
          {/* Main Title */}
          <div className="mb-16 animate-fade-in">
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">
                <span className="block text-psynapse">PSYNAPSE</span>
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-psynapse to-purple-400 mx-auto mb-6"></div>
            </div>
            
            <div className="mb-8">
              <p className="text-2xl md:text-3xl text-gray-300 mb-4">Psychology Society</p>
              <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-psynapse via-purple-400 to-psynapse bg-clip-text text-transparent mb-6">
                Mount St. Mary's School
              </div>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
              Where <span className="text-psynapse font-semibold">psychology</span> meets{' '}
              <span className="text-psynapse font-semibold">innovation</span>. Join the most prestigious psychology society in Delhi Cantt.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mb-20">
            <GlassCard className="inline-block p-8 hover:scale-105 transition-all duration-500">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Join Psynapse?</h3>
              <a
                href="https://mep.thematrixclan.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-psynapse to-purple-400 text-white font-bold py-4 px-8 rounded-lg hover:shadow-lg hover:shadow-psynapse/50 transition-all duration-300 text-lg"
              >
                Join Now
                <ArrowRight className="transform group-hover:translate-x-1 transition-transform" />
              </a>
            </GlassCard>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {externalLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <GlassCard 
                  key={link.title} 
                  className="p-8 group cursor-pointer hover:scale-105 hover:bg-white/10 transition-all duration-500"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full text-center"
                  >
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-psynapse/20 to-purple-400/20 rounded-full flex items-center justify-center group-hover:from-psynapse/40 group-hover:to-purple-400/40 transition-all duration-300">
                      <IconComponent className="text-psynapse w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-psynapse transition-colors duration-300">
                      {link.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                      {link.description}
                    </p>
                  </a>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom Glow Effect */}
      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-psynapse/5 to-transparent pointer-events-none" />
    </div>
  );
};

export default Home;
