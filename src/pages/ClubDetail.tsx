
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import { clubsData, ClubKey } from '../data/clubsData';

const ClubDetail = () => {
  const { clubId } = useParams<{ clubId: ClubKey }>();
  
  if (!clubId || !clubsData.clubs[clubId]) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Club Not Found</h1>
          <Link to="/clubs" className="text-buzz hover:underline">
            Back to Clubs
          </Link>
        </div>
      </div>
    );
  }

  const club = clubsData.clubs[clubId];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Link 
          to="/clubs" 
          className="inline-flex items-center text-gray-300 hover:text-buzz transition-colors mb-8"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Clubs
        </Link>

        {/* Header */}
        <div className="text-center mb-16">
          <div 
            className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center font-bold text-4xl text-white transition-all duration-300 bg-gradient-to-r from-buzz to-blue-400"
            style={{ 
              boxShadow: `0 0 40px rgba(0, 138, 251, 0.4)`
            }}
          >
            {club.name[0]}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {club.name}
          </h1>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-buzz to-blue-400"></div>
        </div>

        {/* About Section */}
        <GlassCard className="p-8 md:p-12 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">About {club.name}</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            {club.about}
          </p>
        </GlassCard>

        {/* Members Section */}
        <GlassCard className="p-8 md:p-12 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Our Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {club.members.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-2 border-buzz group-hover:border-blue-400 transition-all duration-300"
                  />
                  <div 
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-buzz"
                  />
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-sm text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Contact Section */}
        <GlassCard className="p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <a 
                href={`mailto:${club.contact.email}`}
                className="text-buzz hover:text-blue-400 hover:underline transition-colors"
              >
                {club.contact.email}
              </a>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Discord</h3>
              <span className="text-buzz">{club.contact.discord}</span>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default ClubDetail;
