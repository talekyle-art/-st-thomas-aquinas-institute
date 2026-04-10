import { 
  UserCheck, 
  Camera, 
  GraduationCap, 
  BadgeCheck, 
  Heart, 
  Contact2, 
  FolderOpen,
  FileText
} from 'lucide-react';

const requirementItems = [
  { icon: UserCheck, title: "Age Eligibility", detail: "18 y/old above" },
  { icon: Camera, title: "Photo IDs", detail: "4pcs passport size and 1×1 size with full name" },
  { icon: GraduationCap, title: "Academic Records", detail: "Diploma or Transcript of Records" },
  { icon: BadgeCheck, title: "Birth Documents", detail: "PSA Birth Certificate" },
  { icon: Heart, title: "Civil Status", detail: "Marriage Certificate (if married)" },
  { icon: Contact2, title: "Identification", detail: "1 Valid ID (3 copies with 3 signatures)" },
  { icon: FolderOpen, title: "Submission Folder", detail: "1 long brown envelope", fullWidth: true },
];

export default function Requirements() {
  return (
    <section className="bg-surface-container-low dark:bg-surface-container py-24">
      <div className="container mx-auto px-6">
        <div className="bg-surface-container-lowest dark:bg-surface-container rounded-[2rem] overflow-hidden shadow-sm flex flex-col lg:flex-row">
          <div className="lg:w-1/3 bg-primary dark:bg-primary-container p-12 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <h2 className="font-serif text-4xl text-white mb-6 relative z-10">Requirements!</h2>
            <p className="text-white/70 relative z-10 leading-relaxed font-light">
              Please ensure all documents are ready and authentic to expedite your enrollment process. Original copies may be required for verification.
            </p>
            <div className="mt-12 relative z-10">
              <FileText className="w-16 h-16 text-secondary opacity-30" />
            </div>
          </div>
          
          <div className="lg:w-2/3 p-8 md:p-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-12">
              {requirementItems.map((item, index) => (
                <div key={index} className={`flex gap-4 ${item.fullWidth ? 'md:col-span-2' : ''}`}>
                  <div className="flex-shrink-0">
                    <item.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface dark:text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-on-surface-variant">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
