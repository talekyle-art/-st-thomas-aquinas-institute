import { Phone, Mail, GraduationCap, Facebook } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 px-6 text-center bg-surface-container-lowest dark:bg-surface-container">
      <h3 className="font-serif text-4xl text-on-surface dark:text-white mb-4">Ready to start your future?</h3>
      <p className="text-on-surface-variant mb-12 max-w-xl mx-auto">Join our community of skilled professionals. Secure your slot for the upcoming semester today.</p>
      
      <div className="flex flex-wrap justify-center gap-6">
        <a href="tel:+639082367204" className="btn-secondary px-10 py-5 text-base gap-3 shadow-xl">
          <GraduationCap className="w-6 h-6" />
          Enroll Now
        </a>
        <a href="tel:+639082367204" className="btn-primary gap-3">
          <Phone className="w-5 h-5" />
          Call Registrar
        </a>
        <a href="https://mail.google.com/mail/?view=cm&to=thomas.center27@gmail.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 border-2 border-secondary text-secondary dark:text-secondary rounded-md font-bold uppercase tracking-widest text-sm hover:bg-secondary hover:text-white transition-all active:scale-95 gap-3">
          <Mail className="w-5 h-5" />
          Email Inquiry
        </a>
        <a href="https://www.facebook.com/profile.php?id=61575428494672" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-500 text-blue-500 rounded-md font-bold uppercase tracking-widest text-sm hover:bg-blue-500 hover:text-white transition-all active:scale-95 gap-3">
          <Facebook className="w-5 h-5" />
          Facebook
        </a>
      </div>
    </section>
  );
}
