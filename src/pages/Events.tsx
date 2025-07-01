
import { ArrowRight } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import { clubsData } from '../data/clubsData';

const Events = () => {
  const events = clubsData.events;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-green-400">Event</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join us for the most anticipated technological showcase of the year
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-500 mx-auto mt-6"></div>
        </div>

        {/* Event */}
        <div className="flex justify-center">
          {events.map((event) => (
            <GlassCard key={event.id} className="p-8 hover:scale-105 transition-transform duration-500 max-w-2xl w-full">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-400 to-green-500 flex items-center justify-center font-bold text-2xl text-black mx-auto mb-6 shadow-lg shadow-green-400/30">
                  MEP
                </div>
                
                <h3 className="text-3xl font-bold text-green-400 mb-4">
                  {event.title}
                </h3>
                
                <p className="text-green-300 text-lg mb-4">
                  {formatDate(event.date)}
                </p>
                
                <p className="text-gray-300 leading-relaxed text-lg">
                  {event.description}
                </p>

                <div className="mt-8">
                  <a
                    href="https://mep.thematrixclan.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-400 to-green-500 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-green-400/30 transition-all duration-300"
                  >
                    Register Now
                    <ArrowRight className="ml-2" size={20} />
                  </a>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
