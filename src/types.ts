export interface Program {
  id: string;
  title: string;
  shortCode: string;
  subtitle: string;
  description: string;
  grades: string;
  curriculum: string;
  image: string;
  keyFeatures: string[];
  subjectsOffered: string[];
}

export interface Tutor {
  id: string;
  name: string;
  title: string;
  role: string;
  university: string;
  degree: string;
  subjects: string[];
  curricula: string[];
  experienceYears: number;
  rating: number;
  reviewsCount: number;
  studentsTaught: number;
  image: string;
  bio: string;
  achievements: string[];
  specialties: string[];
}

export interface SubjectItem {
  id: string;
  name: string;
  category: 'Sciences' | 'Mathematics' | 'Humanities' | 'Languages' | 'Technology';
  iconName: string;
  curricula: string[];
  tutorCount: number;
  description: string;
  topics: string[];
}

export interface ResourceArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  image: string;
  date: string;
  excerpt: string;
  content: string[];
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Tutoring Process' | 'Tutors & Matching' | 'Trial & Booking';
}

export interface StandardizedTest {
  id: string;
  name: string;
  fullName: string;
  badge: string;
  targetAudience: string;
  averageScoreGain: string;
  scoreScale: string;
  description: string;
  keyModules: string[];
  strategies: string[];
  targetUniversities: string[];
}

export interface UKAdmissionsTest {
  id: string;
  name: string;
  fullName: string;
  targetDegree: string;
  universities: string[];
  format: string;
  description: string;
  skillsAssessed: string[];
  prepHighlights: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  studentName: string;
  parentName?: string;
  role: string;
  curriculum: string;
  scoreBeforeAfter: string;
  universityAdmitted: string;
  avatar: string;
}

export interface ConsultationFormData {
  userType: 'Student' | 'Parent';
  fullName: string;
  email: string;
  phone: string;
  curriculum: string;
  gradeLevel: string;
  subjectsNeeded: string[];
  goals: string;
  preferredTimeSlot?: string;
  preferredTutorId?: string;
}
