import { Megaphone } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-primary">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary-container)_0%,_transparent_70%)]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-8"
        >
          <h1 className="font-serif text-5xl md:text-7xl text-white leading-[1.1] mb-2 pt-16">
            St. Thomas Aquinas Institute of Caloocan Inc.
          </h1>
          
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary text-on-secondary rounded-md mt-6 mb-8 shadow-lg">
            <Megaphone className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-widest">Admissions Open</span>
          </div>
          
          <h2 className="font-serif text-3xl md:text-5xl text-white leading-[1.1] mb-8">
            <span className="text-secondary-fixed italic">Open for inquiries</span> and enrollees!
          </h2>
          
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mb-12 font-light leading-relaxed">
            Our programs designed to equip students with the knowledge and competencies needed for employment and livelihood opportunities. Guided by experienced trainers we are committed to producing job-ready and skilled professionals 
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a href="#footer" className="btn-secondary">
              Enroll Now
            </a>
            <a href="#courses" className="btn-outline">
              View Programs
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
