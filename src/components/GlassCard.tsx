
import { ReactNode, CSSProperties } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  style?: CSSProperties;
}

const GlassCard = ({ children, className = '', hover = true, style }: GlassCardProps) => {
  return (
    <div
      className={`
        bg-white/5 backdrop-blur-md border border-white/10 rounded-xl
        ${hover ? 'hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-matrix/10' : ''}
        transition-all duration-500 ease-out
        ${className}
      `}
      style={style}
    >
      {children}
    </div>
  );
};

export default GlassCard;
