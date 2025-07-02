
import GlassCard from '../components/GlassCard';
import { legalData } from '../data/legalData';

const TermsOfService = () => {
  const termsData = legalData.pages.terms;

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-buzz">Terms of Service</span>
          </h1>
          <p className="text-gray-400">Last updated: {termsData.lastUpdated}</p>
          <div className="w-24 h-1 bg-gradient-to-r from-buzz to-blue-400 mx-auto mt-6"></div>
        </div>

        <div className="space-y-6">
          {termsData.content.map((section, index) => (
            <GlassCard key={index} className="p-8">
              <h2 className="text-xl font-bold text-buzz mb-4">{section.heading}</h2>
              <p className="text-gray-300 leading-relaxed">{section.text}</p>
            </GlassCard>
          ))}
        </div>

        <GlassCard className="p-8 mt-8 text-center">
          <p className="text-gray-400">
            For questions about these terms, please{' '}
            <a href="/contact" className="text-buzz hover:underline">
              contact us
            </a>
          </p>
        </GlassCard>
      </div>
    </div>
  );
};

export default TermsOfService;
