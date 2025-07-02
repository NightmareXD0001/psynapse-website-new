
import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-black" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(0,138,251,0.05)_0%,transparent_50%)]" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,138,251,0.03)_0%,transparent_50%)]" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(0,138,251,0.02)_0%,transparent_50%)]" />
      
      <Navbar />
      
      <main className="relative z-10 pt-16 min-h-screen">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;
