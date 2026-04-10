import React, { useState, useRef } from 'react';
import { 
  CheckCircle2, 
  Circle, 
  FileText, 
  User, 
  Camera, 
  GraduationCap, 
  BadgeCheck, 
  Heart, 
  Contact2, 
  FolderOpen,
  ChevronRight,
  LayoutDashboard,
  Clock,
  AlertCircle,
  UserCircle,
  ClipboardList,
  Save,
  Upload,
  X,
  FileCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Requirement {
  id: string;
  title: string;
  detail: string;
  icon: React.ElementType;
  status: 'pending' | 'completed' | 'reviewing';
  fileName?: string;
}

const initialRequirements: Requirement[] = [
  { id: 'age', title: "Age Eligibility", detail: "18 y/old above", icon: User, status: 'pending' },
  { id: 'photo', title: "Photo IDs", detail: "4pcs passport size and 1×1 size with full name", icon: Camera, status: 'pending' },
  { id: 'academic', title: "Academic Records", detail: "Diploma or Transcript of Records", icon: GraduationCap, status: 'pending' },
  { id: 'birth', title: "Birth Documents", detail: "PSA Birth Certificate", icon: BadgeCheck, status: 'pending' },
  { id: 'civil', title: "Civil Status", detail: "Marriage Certificate (if married)", icon: Heart, status: 'pending' },
  { id: 'id', title: "Identification", detail: "1 Valid ID (3 copies with 3 signatures)", icon: Contact2, status: 'pending' },
  { id: 'folder', title: "Submission Folder", detail: "1 long brown envelope", icon: FolderOpen, status: 'pending' },
];

const courses = [
  { id: 'baking', title: 'Bread and Pastry Production NCII', code: 'BPP-NC2' },
  { id: 'events', title: 'Events Management Services NCIII', code: 'EMS-NC3' },
];

type Tab = 'details' | 'requirements';

export default function EnrollmentDashboard() {
  const [activeTab, setActiveTab] = useState<Tab>('details');
  const [selectedCourse, setSelectedCourse] = useState(courses[0]);
  const [requirements, setRequirements] = useState(initialRequirements);
  const [studentInfo, setStudentInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    birthDate: '',
    address: '',
    gender: '',
    civilStatus: 'single'
  });
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [activeUploadId, setActiveUploadId] = useState<string | null>(null);

  const completedCount = requirements.filter(r => r.status === 'completed').length;
  const progress = Math.round((completedCount / requirements.length) * 100);

  const [uploadError, setUploadError] = useState<string | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && activeUploadId) {
      const error = validateFile(file);
      if (error) {
        setUploadError(error);
        setTimeout(() => setUploadError(null), 3000);
        setActiveUploadId(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
        return;
      }
      setRequirements(prev => prev.map(r => {
        if (r.id === activeUploadId) {
          return { 
            ...r, 
            status: 'completed', 
            fileName: file.name.substring(0, 50)
          };
        }
        return r;
      }));
    }
    setActiveUploadId(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const removeFile = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setRequirements(prev => prev.map(r => {
      if (r.id === id) {
        return { ...r, status: 'pending', fileName: undefined };
      }
      return r;
    }));
  };

  const triggerUpload = (id: string) => {
    setActiveUploadId(id);
    fileInputRef.current?.click();
  };

  const [isSaved, setIsSaved] = useState(false);

  const MAX_FILE_SIZE = 5 * 1024 * 1024;
  const ALLOWED_TYPES = ['application/pdf', 'image/jpeg', 'image/png'];

  const sanitizeInput = (value: string): string => {
    return value.replace(/[<>"'&]/g, '');
  };

  const validateFile = (file: File): string | null => {
    if (!ALLOWED_TYPES.includes(file.type)) {
      return 'Invalid file type. Only PDF, JPG, and PNG are allowed.';
    }
    if (file.size > MAX_FILE_SIZE) {
      return 'File size exceeds 5MB limit.';
    }
    return null;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setStudentInfo(prev => ({ ...prev, [name]: sanitizeInput(value) }));
    setIsSaved(false);
  };

  const handleSave = () => {
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="min-h-screen bg-surface-container-low dark:bg-surface-container-low pt-24 pb-12 px-6">
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileUpload} 
        className="hidden" 
        accept=".pdf,.jpg,.jpeg,.png"
      />
      
      <div className="container mx-auto max-w-6xl">
        {uploadError && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mb-6 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-xl flex items-center gap-2 text-red-700 dark:text-red-400 text-sm font-medium"
          >
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            {uploadError}
          </motion.div>
        )}
        <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-secondary font-bold uppercase tracking-widest text-xs mb-2">
              <LayoutDashboard className="w-4 h-4" />
              Student Portal
            </div>
            <h1 className="font-serif text-4xl text-primary dark:text-white">Enrollment Dashboard</h1>
          </div>
          
          <div className="bg-white dark:bg-surface-container p-4 rounded-xl shadow-sm border border-outline-variant/30 flex items-center gap-6">
            <div className="text-right">
              <span className="block text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Overall Progress</span>
              <span className="block text-2xl font-serif text-primary dark:text-white">{progress}%</span>
            </div>
            <div className="w-32 h-2 bg-surface-container rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className="h-full bg-secondary"
              />
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar - Navigation & Course */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-white dark:bg-surface-container rounded-2xl p-6 shadow-sm border border-outline-variant/30">
              <nav className="flex flex-col gap-2 mb-8">
                <button 
                  onClick={() => setActiveTab('details')}
                  className={`flex items-center gap-3 p-3 rounded-xl transition-all font-bold text-sm ${
                    activeTab === 'details' ? 'bg-primary text-white' : 'text-on-surface-variant hover:bg-surface-container'
                  }`}
                >
                  <UserCircle className="w-5 h-5" />
                  Student Information
                </button>
                <button 
                  onClick={() => setActiveTab('requirements')}
                  className={`flex items-center gap-3 p-3 rounded-xl transition-all font-bold text-sm ${
                    activeTab === 'requirements' ? 'bg-primary text-white' : 'text-on-surface-variant hover:bg-surface-container'
                  }`}
                >
                  <ClipboardList className="w-5 h-5" />
                  Requirements Checklist
                </button>
              </nav>

              <h3 className="font-bold text-on-surface dark:text-white mb-4 flex items-center gap-2">
                <FileText className="w-4 h-4 text-secondary" />
                Selected Program
              </h3>
              <div className="space-y-3">
                {courses.map(course => (
                  <button
                    key={course.id}
                    onClick={() => setSelectedCourse(course)}
                    className={`w-full text-left p-4 rounded-xl transition-all border-2 ${
                      selectedCourse.id === course.id 
                        ? 'border-secondary bg-secondary/5 dark:bg-secondary/10' 
                        : 'border-transparent bg-surface-container-low dark:bg-surface-container hover:bg-surface-container'
                    }`}
                  >
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-secondary mb-1">{course.code}</span>
                    <span className="block font-medium text-on-surface dark:text-white leading-tight">{course.title}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-primary text-white rounded-2xl p-6 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <h3 className="font-serif text-xl mb-2 relative z-10">Need Help?</h3>
              <p className="text-white/70 text-sm mb-4 relative z-10">Our registrar is available for any questions regarding your documents.</p>
              <a 
                href="tel:+639082367204"
                className="block w-full py-3 bg-secondary text-white rounded-lg font-bold uppercase tracking-widest text-xs hover:bg-secondary/90 transition-colors relative z-10 text-center"
              >
                Contact Support
              </a>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {activeTab === 'details' ? (
                <motion.div 
                  key="details"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white dark:bg-surface-container rounded-2xl shadow-sm border border-outline-variant/30 overflow-hidden"
                >
                  <div className="p-6 border-b border-outline-variant/30 bg-surface-container-lowest dark:bg-surface-container-low">
                    <h3 className="font-bold text-primary dark:text-white">Student Information</h3>
                    <p className="text-xs text-on-surface-variant">Please fill out all fields accurately as they will be used for your official records.</p>
                  </div>
                  
                  <div className="p-8 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">First Name</label>
                        <input 
                          type="text" 
                          name="firstName"
                          value={studentInfo.firstName}
                          onChange={handleInputChange}
                          className="w-full p-3 bg-surface-container-low dark:bg-surface-container rounded-xl border-transparent focus:bg-white dark:focus:bg-surface-container-low focus:border-secondary/30 focus:ring-0 transition-all"
                          placeholder="Juan"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Last Name</label>
                        <input 
                          type="text" 
                          name="lastName"
                          value={studentInfo.lastName}
                          onChange={handleInputChange}
                          className="w-full p-3 bg-surface-container-low dark:bg-surface-container rounded-xl border-transparent focus:bg-white dark:focus:bg-surface-container-low focus:border-secondary/30 focus:ring-0 transition-all"
                          placeholder="Dela Cruz"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Email Address</label>
                        <input 
                          type="email" 
                          name="email"
                          value={studentInfo.email}
                          onChange={handleInputChange}
                          className="w-full p-3 bg-surface-container-low dark:bg-surface-container rounded-xl border-transparent focus:bg-white dark:focus:bg-surface-container-low focus:border-secondary/30 focus:ring-0 transition-all"
                          placeholder="juan.delacruz@example.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Phone Number</label>
                        <input 
                          type="tel" 
                          name="phone"
                          value={studentInfo.phone}
                          onChange={handleInputChange}
                          className="w-full p-3 bg-surface-container-low dark:bg-surface-container rounded-xl border-transparent focus:bg-white dark:focus:bg-surface-container-low focus:border-secondary/30 focus:ring-0 transition-all"
                          placeholder="+63 9XX XXX XXXX"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Date of Birth</label>
                        <input 
                          type="date" 
                          name="birthDate"
                          value={studentInfo.birthDate}
                          onChange={handleInputChange}
                          className="w-full p-3 bg-surface-container-low dark:bg-surface-container rounded-xl border-transparent focus:bg-white dark:focus:bg-surface-container-low focus:border-secondary/30 focus:ring-0 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Civil Status</label>
                        <select 
                          name="civilStatus"
                          value={studentInfo.civilStatus}
                          onChange={handleInputChange}
                          className="w-full p-3 bg-surface-container-low dark:bg-surface-container rounded-xl border-transparent focus:bg-white dark:focus:bg-surface-container-low focus:border-secondary/30 focus:ring-0 transition-all"
                        >
                          <option value="single">Single</option>
                          <option value="married">Married</option>
                          <option value="widowed">Widowed</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Home Address</label>
                      <textarea 
                        name="address"
                        value={studentInfo.address}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full p-3 bg-surface-container-low dark:bg-surface-container rounded-xl border-transparent focus:bg-white dark:focus:bg-surface-container-low focus:border-secondary/30 focus:ring-0 transition-all"
                        placeholder="House No., Street, Barangay, City, Province"
                      />
                    </div>

                    <div className="pt-6 border-t border-outline-variant/20 flex justify-end items-center gap-4">
                      {isSaved && (
                        <motion.span 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-xs font-bold text-green-600 flex items-center gap-1"
                        >
                          <CheckCircle2 className="w-4 h-4" />
                          Information Saved!
                        </motion.span>
                      )}
                      <button 
                        onClick={handleSave}
                        className="btn-primary gap-2"
                      >
                        <Save className="w-4 h-4" />
                        Save Information
                      </button>
                    </div>
                  </div>
                </motion.div>

              ) : (
                <motion.div 
                  key="requirements"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white dark:bg-surface-container rounded-2xl shadow-sm border border-outline-variant/30 overflow-hidden"
                >
                  <div className="p-6 border-b border-outline-variant/30 flex items-center justify-between bg-surface-container-lowest dark:bg-surface-container-low">
                    <h3 className="font-bold text-primary dark:text-white">Document Checklist</h3>
                    <span className="text-xs text-on-surface-variant font-medium">
                      {completedCount} of {requirements.length} requirements met
                    </span>
                  </div>
                  
                  <div className="divide-y divide-outline-variant/20">
                    {requirements.map((req) => (
                      <div 
                        key={req.id}
                        className="p-6 flex items-start gap-4 hover:bg-surface-container-lowest transition-colors group"
                      >
                        <div className="mt-1">
                          {req.status === 'completed' ? (
                            <CheckCircle2 className="w-6 h-6 text-green-500" />
                          ) : req.status === 'reviewing' ? (
                            <Clock className="w-6 h-6 text-amber-500" />
                          ) : (
                            <Circle className="w-6 h-6 text-outline-variant" />
                          )}
                        </div>
                        
                        <div className="flex-grow">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className={`font-bold transition-colors ${req.status === 'completed' ? 'text-on-surface-variant' : 'text-primary dark:text-white'}`}>
                              {req.title}
                            </h4>
                            <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${
                              req.status === 'completed' ? 'bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-400' :
                              req.status === 'reviewing' ? 'bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-400' :
                              'bg-surface-container text-on-surface-variant'
                            }`}>
                              {req.status}
                            </span>
                          </div>
                          <p className="text-sm text-on-surface-variant leading-relaxed mb-3">
                            {req.detail}
                          </p>
                          
                          {req.fileName ? (
                            <div className="flex items-center gap-2 p-2 bg-surface-container-low rounded-lg border border-outline-variant/20 w-fit">
                              <FileCheck className="w-4 h-4 text-green-600" />
                              <span className="text-xs font-medium text-on-surface dark:text-white max-w-[150px] truncate">{req.fileName}</span>
                              <button 
                                onClick={(e) => removeFile(req.id, e)}
                                className="p-1 hover:bg-error-container hover:text-error rounded-full transition-colors"
                              >
                                <X className="w-3 h-3" />
                              </button>
                            </div>
                          ) : (
                            <button 
                              onClick={() => triggerUpload(req.id)}
                              className="flex items-center gap-2 px-4 py-2 bg-surface-container-high hover:bg-secondary hover:text-white rounded-lg transition-all text-xs font-bold uppercase tracking-widest"
                            >
                              <Upload className="w-4 h-4" />
                              Upload Document
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-8 bg-surface-container-low border-t border-outline-variant/30">
                    <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-secondary/20 shadow-sm">
                      <AlertCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-on-surface-variant leading-relaxed">
                        <strong className="text-on-surface dark:text-white block mb-1">Important Note:</strong>
                        Please bring the original copies of all uploaded documents to the campus for final verification. Enrollment is only finalized once physical documents are checked.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </main>
        </div>
      </div>
    </div>
  );
}


