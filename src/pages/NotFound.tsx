
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import GlassCard from "../components/GlassCard";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <GlassCard className="p-12">
          <div className="mb-8">
            <div className="text-8xl font-bold text-buzz mb-4">404</div>
            <div className="w-24 h-1 bg-gradient-to-r from-buzz to-blue-400 mx-auto mb-6"></div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Page Not Found
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            The page you're looking for doesn't exist in EcommBuzz. 
            <br className="hidden md:block" />
            It might have been moved, deleted, or you entered the wrong URL.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-buzz to-blue-400 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-buzz/30 transition-all duration-300"
            >
              <Home className="mr-2" size={20} />
              Return Home
            </Link>
            
            <button 
              onClick={() => window.history.back()} 
              className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <ArrowLeft className="mr-2" size={20} />
              Go Back
            </button>
          </div>
        </GlassCard>
      </div>
      
      {/* Blue Digital Background */}
      <div className="fixed inset-0 pointer-events-none opacity-5 z-0">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_98px,rgba(0,138,251,0.1)_100px)] animate-pulse" />
      </div>
    </div>
  );
};

export default NotFound;
