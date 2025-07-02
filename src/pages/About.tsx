
import GlassCard from '../components/GlassCard';

const About = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-buzz">EcommBuzz</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-buzz to-blue-400 mx-auto"></div>
        </div>

        <div className="space-y-8">
          <GlassCard className="p-8 md:p-12">
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg md:text-xl">
                The EcommBuzz is the prestigious economics society of Mount St. Mary's School, Delhi Cantt. This dynamic club is designed for students with a keen interest in economics and business and offers them a platform to test and expand their existing knowledge.
              </p>
              <p className="text-lg md:text-xl">
                By fostering a community of like-minded individuals, the club encourages collaborative learning and intellectual growth among its members.
              </p>
            </div>
          </GlassCard>

          <GlassCard className="p-8 md:p-12">
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg md:text-xl">
                Central to club's mission is the development of students' interest in the <span className="text-buzz font-semibold">Economics and Business</span> fields. The club achieves this through a variety of engaging activities such as quizzes, debates, paper presentations, business pitches, and economic analyses.
              </p>
              <p className="text-lg md:text-xl">
                These activities not only provide practical experience but also help students hone their analytical and critical thinking skills, preparing them for future academic and professional endeavors.
              </p>
            </div>
          </GlassCard>

          <GlassCard className="p-8 md:p-12">
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg md:text-xl">
                One of the defining features of the EcommBuzz club is its enduring legacy at Mount St. Mary's School. While the membership may change annually, the buzz of excitement and intellectual curiosity never dies.
              </p>
              <p className="text-lg md:text-xl">
                The club continues to thrive year after year, making EcommBuzz one of the most established and respected societies within the school.
              </p>
            </div>
          </GlassCard>

          <GlassCard className="p-8 md:p-12 text-center">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white">Our Mission</h2>
              <blockquote className="text-xl md:text-2xl text-buzz font-medium italic">
                "Fostering economic minds, one idea at a time."
              </blockquote>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default About;
