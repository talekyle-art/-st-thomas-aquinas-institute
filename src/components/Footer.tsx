import { Smartphone, AtSign, MapPin, Facebook, Mail } from 'lucide-react';
import logo from '../logo.png';

export default function Footer() {
  return (
    <footer id="footer" className="bg-primary text-white pt-16 pb-32 md:pb-16 relative overflow-hidden" role="contentinfo" aria-label="Footer">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-white/10 pb-16">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-4 mb-8">
            <img 
              src={logo} 
              alt="St. Thomas Aquinas Institute Logo" 
              className="w-16 h-16 object-contain bg-white rounded-full p-1"
              referrerPolicy="no-referrer"
            />
            <h4 className="font-serif text-2xl">St. Thomas Aquinas Institute of Caloocan Inc.</h4>
          </div>
          <p className="text-white/60 max-w-md leading-relaxed mb-8">
            Empowering individuals through high-quality vocational education and industry-standard training. Located at the heart of Caloocan City.
          </p>
          <nav aria-label="Social media links">
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61575428494672" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page (opens in new tab)"
                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
              >
                <Facebook className="w-5 h-5" aria-hidden="true" />
                <span className="text-sm font-medium">Facebook</span>
              </a>
              <a 
                href="https://mail.google.com/mail/?view=cm&to=thomas.center27@gmail.com"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Send email via Gmail (opens in new tab)"
                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
              >
                <Mail className="w-5 h-5" aria-hidden="true" />
                <span className="text-sm font-medium">Gmail</span>
              </a>
            </div>
          </nav>
        </div>
        
        <div className="lg:col-span-4 space-y-8">
          <section aria-labelledby="mission-heading">
            <h5 id="mission-heading" className="text-secondary font-bold uppercase tracking-widest text-xs mb-3">Mission</h5>
            <p className="text-white/70 text-sm leading-relaxed">
              To empower individuals' growth and develop through knowledge, skills and capabilities to drive better business performance. Enhancing programs requires establishing and sustaining partnerships with industry-based business and community.
            </p>
          </section>
          <section aria-labelledby="vision-heading">
            <h5 id="vision-heading" className="text-secondary font-bold uppercase tracking-widest text-xs mb-3">Vision</h5>
            <p className="text-white/70 text-sm leading-relaxed">
              A premier educational institution that provides students with the opportunity to develop high-quality skills and knowledge to prepare for their chosen career path.
            </p>
          </section>
        </div>
        
        <div className="lg:col-span-4">
          <section aria-labelledby="goal-heading" className="mb-8">
            <h5 id="goal-heading" className="text-secondary font-bold uppercase tracking-widest text-xs mb-3">Goal</h5>
            <ul className="text-white/70 text-sm space-y-2" aria-label="Institute goals">
              <li>• Produce knowledgeable, competent individuals who are employable;</li>
              <li>• Produce learners who are ready to perform the roles and accomplish work task with minimum supervision; and</li>
              <li>• Prepare individuals to meet the caring and challenging needs of the job, organization, and industry.</li>
            </ul>
          </section>
          
          <section aria-labelledby="contact-heading" className="space-y-4">
            <h5 id="contact-heading" className="text-secondary font-bold uppercase tracking-widest text-xs">Contact Us</h5>
            <nav aria-label="Contact links">
              <div className="space-y-3">
                <a href="tel:+639082367204" className="flex items-center gap-4 text-white/70 hover:text-white transition-colors" aria-label="Call us at +639082367204">
                  <Smartphone className="w-5 h-5" aria-hidden="true" />
                  <span className="font-medium">+639082367204</span>
                </a>
                <a href="https://mail.google.com/mail/?view=cm&to=thomas.center27@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white/70 hover:text-white transition-colors" aria-label="Send email via Gmail (opens in new tab)">
                  <AtSign className="w-5 h-5" aria-hidden="true" />
                  <span className="font-medium lowercase">thomas.center27@gmail.com</span>
                </a>
                <div className="flex items-center gap-4 text-white/70" aria-label="Our location">
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                  <span className="font-medium">Caloocan City, Philippines</span>
                </div>
              </div>
            </nav>
          </section>
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-white/40 uppercase tracking-widest font-bold">
        <p>© 2023 St. Thomas Aquinas Institute of Caloocan Inc. All Rights Reserved.</p>
        <p>TESDA Certified Training Center • Est. 1985</p>
      </div>
    </footer>
  );
}
