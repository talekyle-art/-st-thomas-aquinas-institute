import { Verified, Moon, Sun } from 'lucide-react';
import logo from '../logo.png';
import { useContext } from 'react';
import { ThemeContext } from '../App';

export default function Navbar() {
  const { isDark, toggleDark } = useContext(ThemeContext);
  
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-surface-container-lowest/80 backdrop-blur-md shadow-sm flex justify-between items-center px-6 py-3">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 flex items-center justify-center">
          <img 
            src={logo} 
            alt="St. Thomas Aquinas Institute Logo" 
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-bold tracking-tight text-on-surface dark:text-white leading-none">St. Thomas Aquinas</span>
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-secondary">Institute of Caloocan Inc</span>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="hidden md:flex gap-6 items-center">
          <a href="#" className="text-on-surface dark:text-white hover:text-secondary font-bold transition-colors">Home</a>
          <a href="#courses" className="text-on-surface dark:text-white hover:text-secondary font-bold transition-colors">Courses</a>
          <a href="#footer" className="text-on-surface dark:text-white hover:text-secondary font-bold transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-surface-container-highest rounded-full">
          <Verified className="text-secondary w-4 h-4" />
          <span className="text-[10px] font-bold text-secondary tracking-wider uppercase">TESDA Accredited</span>
        </div>
        <button 
          onClick={toggleDark}
          className="p-2 rounded-full hover:bg-surface-container transition-colors"
          aria-label="Toggle dark mode"
        >
          {isDark ? <Sun className="w-5 h-5 text-secondary" /> : <Moon className="w-5 h-5 text-on-surface dark:text-white" />}
        </button>
      </div>
    </nav>
  );
}
