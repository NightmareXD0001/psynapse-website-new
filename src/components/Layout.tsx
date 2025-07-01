
import { ReactNode } from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(0,255,65,0.1)_0%,transparent_50%)]" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,138,251,0.1)_0%,transparent_50%)]" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(204,108,231,0.1)_0%,transparent_50%)]" />
      
      <Navbar />
      
      <main className="relative z-10 pt-16">
        {children}
      </main>
    </div>
  );
};

export default Layout;
