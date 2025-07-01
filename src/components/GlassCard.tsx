
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

const GlassCard = ({ children, className = '', hover = true }: GlassCardProps) => {
  return (
    <div
      className={`
        bg-white/5 backdrop-blur-md border border-white/10 rounded-xl
        ${hover ? 'hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-green-400/10' : ''}
        transition-all duration-500 ease-out
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default GlassCard;
