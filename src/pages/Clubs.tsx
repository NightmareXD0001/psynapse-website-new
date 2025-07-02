
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
            Our <span className="text-buzz">Clubs</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover the three pillars that make up EcommBuzz
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-buzz to-blue-400 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {clubs.map(([key, club]) => (
            <Link key={key} to={`/clubs/${key}`}>
              <GlassCard className="p-8 h-full group cursor-pointer transform hover:scale-105">
                <div className="text-center">
                  <div 
                    className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center font-bold text-2xl text-white transition-all duration-300 group-hover:shadow-xl bg-gradient-to-r from-buzz to-blue-400"
                    style={{ 
                      boxShadow: `0 0 30px rgba(0, 138, 251, 0.3)`
                    }}
                  >
                    {club.name[0]}
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-4">{club.name}</h2>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300 line-clamp-3">
                    {club.about}
                  </p>
                  <div className="mt-6 text-sm font-medium text-buzz">
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
