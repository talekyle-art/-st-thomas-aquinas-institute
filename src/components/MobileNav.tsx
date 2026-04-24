import { Home, HelpCircle } from 'lucide-react';

export default function MobileNav() {
    return (
        <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-2 pb-safe bg-white border-t border-surface-container shadow-[0_-4px_20px_rgba(0,30,64,0.06)] z-50 rounded-t-xl">
            <a href="#" className="flex flex-col items-center justify-center rounded-xl px-4 py-1.5 text-on-surface-variant hover:text-secondary transition-colors">
                <Home className="w-5 h-5" />
                <span className="text-[11px] uppercase tracking-wider font-medium">Home</span>
            </a>
            <a href="#courses" className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1.5 hover:text-secondary transition-colors">
                <HelpCircle className="w-5 h-5" />
                <span className="text-[11px] uppercase tracking-wider font-medium">Courses</span>
            </a>
            <a href="#footer" className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1.5 hover:text-secondary transition-colors">
                <HelpCircle className="w-5 h-5" />
                <span className="text-[11px] uppercase tracking-wider font-medium">Contact</span>
            </a>
        </nav>
    );
}
