
import { useState } from 'react';
import GlassCard from '../components/GlassCard';
import { clubsData } from '../data/clubsData';

const Events = () => {
  const [filter, setFilter] = useState<string>('all');
  const events = clubsData.events;

  const filteredEvents = events.filter(event => 
    filter === 'all' || event.club === filter
  );

  const filters = [
    { key: 'all', label: 'All Events', color: '#00ff41' },
    { key: 'matrix', label: 'Matrix', color: '#00ff41' },
    { key: 'ecomm', label: 'Ecomm', color: '#008afb' },
    { key: 'psynapse', label: 'Psynapse', color: '#CC6CE7' }
  ];

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
            Upcoming <span className="text-green-400">Events</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join us for exciting technological showcases and competitions
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-purple-400 mx-auto mt-6"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filterOption) => (
            <button
              key={filterOption.key}
              onClick={() => setFilter(filterOption.key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === filterOption.key
                  ? 'text-black shadow-lg'
                  : 'text-gray-300 hover:text-white bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10'
              }`}
              style={filter === filterOption.key ? { 
                backgroundColor: filterOption.color,
                boxShadow: `0 0 20px ${filterOption.color}60`
              } : {}}
            >
              {filterOption.label}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="space-y-6">
          {filteredEvents.map((event, index) => (
            <GlassCard key={event.id} className="p-8 hover:scale-105 transition-transform duration-500">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg text-black ${
                    event.featured ? 'bg-gradient-to-r from-green-400 via-blue-400 to-purple-400' : ''
                  }`} style={!event.featured ? { 
                    backgroundColor: event.club === 'matrix' ? '#00ff41' : 
                                   event.club === 'ecomm' ? '#008afb' : 
                                   event.club === 'psynapse' ? '#CC6CE7' : '#00ff41'
                  } : {}}>
                    {event.club === 'all' ? 'MEP' : event.club.charAt(0).toUpperCase()}
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className={`text-2xl font-bold mb-2 md:mb-0 ${event.featured ? 'text-green-400' : 'text-white'}`}>
                      {event.title}
                    </h3>
                    <span className="text-gray-400 text-sm">
                      {formatDate(event.date)}
                    </span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {event.description}
                  </p>
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
