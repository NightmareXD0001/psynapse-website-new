
import GlassCard from '../components/GlassCard';

const About = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-matrix">The Matrix Clan</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-matrix-400 to-matrix-500 mx-auto"></div>
        </div>

        <div className="space-y-8">
          <GlassCard className="p-8 md:p-12">
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg md:text-xl">
                Founded in 2000, the Matrix Clan at Mount St. Mary School, Delhi Cantt., has evolved into a standout technology club in Delhi. Primarily composed of students from classes XI and XII, it also actively involves all Marians in exploring new technological frontiers.
              </p>
              <p className="text-lg md:text-xl">
                The club's strong presence at inter-school events underscores its reputation for technological prowess and innovation, consistently making an impact across the city.
              </p>
            </div>
          </GlassCard>

          <GlassCard className="p-8 md:p-12">
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg md:text-xl">
                Central to its activities is <span className="text-matrix font-semibold">Matrix Ecomm Psynapse</span>, an annual event co-founded by the club, which has become a cornerstone of the school's technological calendar. This event not only showcases the talents and innovations of students but also serves as a platform for them to demonstrate their skills and creativity.
              </p>
              <p className="text-lg md:text-xl">
                Beyond organizing events, the Matrix Clan plays a pivotal role in supporting various technological and design initiatives within the school, contributing significantly to its technological environment.
              </p>
            </div>
          </GlassCard>

          <GlassCard className="p-8 md:p-12 text-center">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white">Our Mission</h2>
              <blockquote className="text-xl md:text-2xl text-matrix font-medium italic">
                "To make a dent in the universe, one keystroke at a time."
              </blockquote>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default About;
