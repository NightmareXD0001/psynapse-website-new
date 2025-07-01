
import { Link } from 'react-router-dom';
import GlassCard from '../components/GlassCard';
import { clubsData } from '../data/clubsData';

const Clubs = () => {
  const clubs = Object.entries(clubsData.clubs);

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-green-400">Clubs</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover the three pillars that make up The Matrix Clan
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-purple-400 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {clubs.map(([key, club]) => (
            <Link key={key} to={`/clubs/${key}`}>
              <GlassCard className="p-8 h-full group cursor-pointer transform hover:scale-105">
                <div className="text-center">
                  <div 
                    className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center font-bold text-2xl text-black transition-all duration-300 group-hover:shadow-xl"
                    style={{ 
                      backgroundColor: club.color,
                      boxShadow: `0 0 30px ${club.color}40`
                    }}
                  >
                    {club.name[0]}
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-4">{club.name}</h2>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300 line-clamp-3">
                    {club.about}
                  </p>
                  <div className="mt-6 text-sm font-medium" style={{ color: club.color }}>
                    Learn More →
                  </div>
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clubs;
