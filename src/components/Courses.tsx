import { ArrowRight, LucideIcon, Cake, CalendarDays } from 'lucide-react';
import { motion } from 'motion/react';

interface CourseCardProps {
  title: string;
  description: string;
  level: string;
  icon: LucideIcon;
}

export function CourseCard({ title, description, level, icon: Icon }: CourseCardProps) {
  return (
     <motion.div 
       whileHover={{ y: -5 }}
       className="group relative overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-xl transition-all duration-500"
     >
      <div className="absolute top-0 left-0 w-1.5 h-full bg-secondary"></div>
      <div className="p-8 md:p-12 flex flex-col h-full">
        <div className="w-16 h-16 bg-surface-container-high rounded-2xl flex items-center justify-center mb-8 group-hover:bg-secondary/10 transition-colors">
          <Icon className="w-8 h-8 text-secondary" />
        </div>
         <h3 className="font-serif text-3xl text-on-surface mb-4 leading-tight">{title}</h3>
        <p className="text-on-surface-variant mb-8 leading-relaxed">{description}</p>
        <div className="mt-auto flex items-center justify-between">
           <span className="text-[10px] font-bold uppercase tracking-wider text-secondary bg-secondary-fixed px-3 py-1 rounded-full">
            {level}
          </span>
          <a 
            href="#footer"
            className="text-secondary font-bold text-sm uppercase tracking-widest flex items-center gap-2 group/link"
          >
            Enroll Now 
            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Courses() {
  return (
    <section id="courses" className="py-24 px-6 container mx-auto">
      <div className="flex flex-col mb-16">
         <h2 className="font-serif text-4xl text-on-surface mb-2 italic">Open Courses!</h2>
        <div className="h-1 w-24 bg-secondary"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <CourseCard 
          title="Bread and Pastry Production NCII"
          description="Master the art of commercial baking, from artisan breads to delicate pastries, following international TESDA standards."
          level="NC II"
          icon={Cake}
        />
        <CourseCard 
          title="Events Management Services NCIII"
          description="Develop the high-level skills needed to plan, coordinate, and execute world-class corporate and social events."
          level="NC III"
          icon={CalendarDays}
        />
      </div>
    </section>
  );
}
