
import GlassCard from '../components/GlassCard';

const About = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-psynapse">Psynapse</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-psynapse to-purple-400 mx-auto"></div>
        </div>

        <div className="space-y-8">
          <GlassCard className="p-8 md:p-12">
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg md:text-xl">
                Psychology, the scientific study of behavior and mental processes, explores human cognition, emotions, motivations, and behaviors. By examining patterns, underlying mechanisms, and conducting empirical research, psychologists strive to understand how and why individuals think, feel, and act.
              </p>
              <p className="text-lg md:text-xl">
                This field spans from studying personality traits and developmental stages to understanding societal trends, providing a comprehensive framework for the diversity and nuances of human experiences.
              </p>
            </div>
          </GlassCard>

          <GlassCard className="p-8 md:p-12">
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg md:text-xl">
                Key areas of psychology include <span className="text-psynapse font-semibold">cognitive, emotional, behavioral, and social psychology</span>. Cognitive psychology focuses on mental processes like memory and decision-making, while emotional psychology examines emotions and their regulation.
              </p>
              <p className="text-lg md:text-xl">
                Behavioral psychology studies how behaviors are learned and modified, emphasizing conditioning and reinforcement. Social psychology investigates the impact of social contexts on behavior and cognition, exploring topics such as conformity and group dynamics. Additionally, clinical and counseling psychology address mental health disorders, employing evidence-based interventions to promote psychological well-being and personal growth.
              </p>
            </div>
          </GlassCard>

          <GlassCard className="p-8 md:p-12">
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg md:text-xl">
                Psychology extends to broader societal issues, with community psychology examining the influence of social systems on community well-being and advocating for systemic change. Advances in neuroscience and interdisciplinary research further evolve the field, bridging brain function and psychological phenomena.
              </p>
              <p className="text-lg md:text-xl">
                Collaborations with experts in medicine, education, and economics help address complex societal challenges and enhance human capabilities. Ultimately, psychology illuminates human nature, contributing to improved mental health outcomes, resilience, and appreciation of human diversity.
              </p>
            </div>
          </GlassCard>

          <GlassCard className="p-8 md:p-12 text-center">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white">Our Mission</h2>
              <blockquote className="text-xl md:text-2xl text-psynapse font-medium italic">
                "Understanding minds, transforming lives."
              </blockquote>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default About;
