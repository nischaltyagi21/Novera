import { Program, Tutor, SubjectItem, ResourceArticle, FAQItem, Testimonial, StandardizedTest, UKAdmissionsTest } from '../types';

export const PROGRAMS: Program[] = [
  {
    id: 'ib-diploma',
    title: 'IB Diploma Programme',
    shortCode: 'IB Diploma',
    subtitle: 'Grades 11 – 12 (HL & SL)',
    description: 'Comprehensive 1-to-1 mentorship for Higher Level and Standard Level IB courses, Internal Assessments (IAs), Extended Essay (EE), and Theory of Knowledge (TOK).',
    grades: 'Grades 11 – 12',
    curriculum: 'International Baccalaureate',
    image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=800&q=80',
    keyFeatures: [
      'Mastery in HL & SL Mathematics (AA & AI), Physics, Chemistry, Economics & English',
      'One-on-one Extended Essay (EE) topic selection, research, and writing supervision',
      'Step-by-step Internal Assessment (IA) draft critiques aligned with official IB rubrics',
      'Examiner-level past paper walkthroughs and active command-term training'
    ],
    subjectsOffered: ['AA Math HL/SL', 'AI Math HL/SL', 'Physics HL/SL', 'Chemistry HL/SL', 'Biology HL/SL', 'Economics HL/SL', 'English A Lang & Lit']
  },
  {
    id: 'myp',
    title: 'IB Middle Years Programme',
    shortCode: 'MYP',
    subtitle: 'Grades 6 – 10',
    description: 'Build sharp analytical thinking, structured writing habits, and strong STEM foundations to seamlessly transition into the senior IB Diploma.',
    grades: 'Grades 6 – 10',
    curriculum: 'IB Middle Years',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    keyFeatures: [
      'Inquiry-driven mastery in Integrated Sciences, Mathematics, and Humanities',
      'Expert guidance for MYP eAssessments and the Personal Project',
      'Proactive bridging to high-school level algebra, scientific inquiry, and essay structure',
      'Personalized study management and executive functioning coaching'
    ],
    subjectsOffered: ['Integrated Sciences', 'Mathematics', 'Language & Literature', 'Individuals & Societies', 'Design & Technology']
  },
  {
    id: 'igcse',
    title: 'Cambridge & Edexcel IGCSE',
    shortCode: 'IGCSE',
    subtitle: 'Grades 9 – 10',
    description: 'High-precision exam preparation for Cambridge (CAIE) and Pearson Edexcel IGCSE specifications to achieve top grades (Grade 9 / A*).',
    grades: 'Grades 9 – 10',
    curriculum: 'British International',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80',
    keyFeatures: [
      'Rigorous past paper dissection and exact mark-scheme phrase training',
      'Focused revision roadmaps for Cambridge (0580/0607) and Edexcel specifications',
      'Targeted weak-spot diagnostics with weekly progress monitoring',
      'Systematic practice on high-mark multi-step calculation problems'
    ],
    subjectsOffered: ['Extended Maths', 'Additional Maths', 'Physics', 'Chemistry', 'Biology', 'Economics', 'Computer Science', 'English Language']
  },
  {
    id: 'a-level',
    title: 'GCE A-Level & Further Maths',
    shortCode: 'A-Level',
    subtitle: 'Grades 11 – 12 (AS & A2)',
    description: 'In-depth subject specialization for Pearson Edexcel, AQA, OCR, and CAIE boards, designed for students targeting Oxford, Cambridge, and top global universities.',
    grades: 'Grades 11 – 12',
    curriculum: 'British Curriculum',
    image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=800&q=80',
    keyFeatures: [
      'Targeted A* test strategies with complete exam-board marking accuracy',
      'Mastery of pure math proofs, mechanics, statistics, and advanced lab theory',
      'Personal statement alignment with higher-level academic exploration',
      'Integrated preparation for university entrance papers (MAT, PAT, STEP, TMUA)'
    ],
    subjectsOffered: ['Mathematics & Further Maths', 'Physics', 'Chemistry', 'Biology', 'Economics', 'Psychology', 'Computer Science']
  },
  {
    id: 'ap',
    title: 'Advanced Placement (AP)',
    shortCode: 'AP',
    subtitle: 'Grades 10 – 12',
    description: 'Targeted coaching to score top 5s on College Board AP exams, earn valuable university credits, and build a competitive profile for top US universities.',
    grades: 'Grades 10 – 12',
    curriculum: 'College Board AP',
    image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80',
    keyFeatures: [
      'Aligned with College Board standards and high-scoring Free Response Question (FRQ) formats',
      'Timed full-length mock diagnostics with detailed item-by-item analytics',
      'Deep dive into AP Calculus BC, Physics C, Chemistry, Micro/Macroeconomics, and Comp Sci A',
      'Strategic timeline planning to balance school GPA with May exam peaks'
    ],
    subjectsOffered: ['AP Calculus AB/BC', 'AP Physics C (Mech & E/M)', 'AP Chemistry', 'AP Biology', 'AP Micro/Macroeconomics', 'AP Computer Science A', 'AP Statistics']
  }
];

export const STANDARDIZED_TESTS: StandardizedTest[] = [
  {
    id: 'sat',
    name: 'Digital SAT',
    fullName: 'Scholastic Assessment Test',
    badge: '1550+ TARGET PROGRAM',
    targetAudience: 'High School Students (Grades 10–12) applying to top US & Global Colleges',
    averageScoreGain: '+180 Points',
    scoreScale: '400 – 1600',
    description: 'Master the adaptive Digital SAT format with proprietary Desmos calculator shortcuts, vocabulary in context analysis, and precision grammar strategies.',
    keyModules: [
      'Reading & Writing: Craft & Structure, Information & Ideas, Standard English Conventions',
      'Math: Algebra, Advanced Math (Functions & Quadratics), Problem Solving & Data Analysis, Geometry & Trig',
      'Desmos Speed Matrix: Graphing calculator efficiency strategies for sub-45s question resolution'
    ],
    strategies: [
      'Adaptive Module 2 optimization for maximum scoring ceiling',
      'Error classification system (conceptual, pacing, misread traps)',
      '10+ adaptive computer-based mock tests with score predictors'
    ],
    targetUniversities: ['Harvard', 'MIT', 'Stanford', 'Yale', 'Columbia', 'Princeton', 'UPenn', 'UC Berkeley']
  },
  {
    id: 'act',
    name: 'ACT',
    fullName: 'American College Testing',
    badge: '34-36 COMPOSITE PREP',
    targetAudience: 'Students targeting rapid-pace US college admissions testing',
    averageScoreGain: '+5.4 Composite Points',
    scoreScale: '1 – 36 Composite',
    description: 'Conquer the fast-paced ACT with specialized timing frameworks, scientific data interpretation drills, and comprehensive grammar mastery.',
    keyModules: [
      'English: Rhetorical skills, punctuation mechanics, sentence structure',
      'Mathematics: Pre-algebra through trigonometry with speed-tested formulas',
      'Reading: Rapid passage skimming, direct evidence retrieval under tight time limits',
      'Science: Data representation graphs, research summaries, and conflicting viewpoints'
    ],
    strategies: [
      'Strict pacing blueprints (e.g. Science 35-minute timing allocation)',
      'Direct elimination of standard ACT distractor answers',
      'Weekly timed sectional drills with detailed line-by-line review'
    ],
    targetUniversities: ['Chicago', 'Duke', 'Northwestern', 'Johns Hopkins', 'Dartmouth', 'Brown', 'Cornell', 'Georgetown']
  },
  {
    id: 'gmat',
    name: 'GMAT Focus Edition',
    fullName: 'Graduate Management Admission Test',
    badge: '705+ FOCUS / 740+ CLASSIC',
    targetAudience: 'Pre-MBA & Master’s Candidates targeting elite global business schools',
    averageScoreGain: '+90 Points',
    scoreScale: '205 – 805 (Focus)',
    description: 'Targeted preparation for the new GMAT Focus Edition, focusing on Data Insights, high-level Quantitative problem solving, and advanced Critical Reasoning.',
    keyModules: [
      'Quantitative Reasoning: Arithmetic, algebra, and problem-solving without calculators',
      'Verbal Reasoning: Critical Reasoning logic models and Reading Comprehension nuance',
      'Data Insights: Multi-Source Reasoning, Table Analysis, Graphics Interpretation, Two-Part Analysis'
    ],
    strategies: [
      'Question-edit feature strategy and section order customization',
      'Formal logic frameworks for assumption, weaken, and strengthen questions',
      'Mental arithmetic accelerators for calculator-free quantitative sections'
    ],
    targetUniversities: ['Stanford GSB', 'Harvard Business School', 'Wharton', 'INSEAD', 'London Business School', 'Columbia CBS', 'MIT Sloan']
  },
  {
    id: 'gre',
    name: 'GRE General Test',
    fullName: 'Graduate Record Examination',
    badge: '330+ QUANT & VERBAL',
    targetAudience: 'Candidates applying for competitive MS, MA, MBA, and PhD programs worldwide',
    averageScoreGain: '+14 Points Combined',
    scoreScale: '260 – 340 Combined + AWA',
    description: 'Targeted score maximization for the streamlined 1-hour-58-minute GRE, featuring advanced text completion, reading arguments, and quantitative problem solving.',
    keyModules: [
      'Quantitative: Arithmetic, algebra, geometry, data analysis with on-screen calculator tactics',
      'Verbal: Advanced contextual vocabulary, Text Completion, Sentence Equivalence, Reading Comprehension',
      'Analytical Writing: Issue Essay scoring rubric alignment and structured argumentation'
    ],
    strategies: [
      'High-frequency GRE vocabulary contextual mastery (1,200+ target words)',
      'Data interpretation shortcut techniques for complex multi-chart prompts',
      'Section-level adaptive scoring optimization'
    ],
    targetUniversities: ['Oxford', 'Cambridge', 'MIT', 'Stanford', 'Carnegie Mellon', 'Imperial College', 'ETH Zurich', 'NUS']
  }
];

export const UK_ADMISSIONS_TESTS: UKAdmissionsTest[] = [
  {
    id: 'tmua',
    name: 'TMUA',
    fullName: 'Test of Mathematics for University Admission',
    targetDegree: 'Mathematics, Computer Science, Economics & Data Science',
    universities: ['University of Cambridge', 'Imperial College London', 'London School of Economics (LSE)', 'Warwick', 'Durham'],
    format: '2 Papers (75 min each) • 40 Multiple Choice Questions total',
    description: 'The TMUA assesses mathematical thinking and reasoning under novel problem contexts, testing your ability to construct rigorous proofs and identify logical fallacies.',
    skillsAssessed: [
      'Paper 1: Mathematical Knowledge applications (AS & A-Level pure mathematics in unfamiliar formats)',
      'Paper 2: Mathematical Reasoning (Propositional logic, necessary/sufficient conditions, proof by contradiction, counterexamples)'
    ],
    prepHighlights: [
      'Step-by-step logic drills covering contrapositives, quantifiers, and truth tables',
      'Complete paper-by-paper solutions for all past TMUA cycles with alternate short-cut methods',
      'Timed mock testing with personalized breakdown of time spent per question'
    ]
  },
  {
    id: 'tsa',
    name: 'TSA',
    fullName: 'Thinking Skills Assessment',
    targetDegree: 'PPE, Economics & Management, Experimental Psychology, Human Sciences',
    universities: ['University of Oxford', 'University College London (UCL)'],
    format: 'Section 1: 50 MCQs (90 min) • Section 2: Writing Task (30 min)',
    description: 'A rigorous test of generic problem-solving and critical reasoning abilities, serving as a primary shortlisting filter for competitive Oxford humanities and social sciences.',
    skillsAssessed: [
      'Problem Solving: Numerical reasoning, spatial reasoning, abstract problem models',
      'Critical Thinking: Identifying main conclusions, unstated assumptions, flaws in arguments, parallel reasoning',
      'Section 2 Essay: Constructing a coherent, balanced argumentative thesis under 30 minutes'
    ],
    prepHighlights: [
      'Formal critical thinking frameworks to spot flawed arguments instantly',
      'Speed-reading and graphical data extraction under tight 1.8-min-per-question limits',
      'Personalized feedback on practice essays by Oxford humanities graduates'
    ]
  },
  {
    id: 'ucat',
    name: 'UCAT',
    fullName: 'University Clinical Aptitude Test',
    targetDegree: 'Medicine (MBBS/MBChB) & Dentistry (BDS)',
    universities: ['Oxford', 'Cambridge', 'Imperial', 'UCL', 'King’s College London', 'Edinburgh', 'Manchester', 'Bristol'],
    format: '2 Hours Computer-Based • 5 Subtests • 228 Questions',
    description: 'The definitive clinical admissions test for entry into top medical and dental programs across the UK, Australia, and New Zealand.',
    skillsAssessed: [
      'Verbal Reasoning (44 questions): Rapid critical evaluation of clinical & scientific texts',
      'Decision Making (29 questions): Logic puzzles, syllogisms, Venn diagrams, probabilistic reasoning',
      'Quantitative Reasoning (36 questions): High-speed medical math, percentages, dosages, conversion rates',
      'Abstract Reasoning (50 questions): Pattern recognition across complex geometric shape sets',
      'Situational Judgement (66 questions): Ethical patient care, professional integrity, GMC guidelines (Band 1 Target)'
    ],
    prepHighlights: [
      'Sub-15-second pattern identification heuristics for Abstract Reasoning',
      'Speed keyboard shortcuts and mental estimation strategies for Quantitative subtests',
      'Comprehensive Situational Judgement coaching targeting Band 1 status'
    ]
  },
  {
    id: 'lnat',
    name: 'LNAT',
    fullName: 'National Admissions Test for Law',
    targetDegree: 'Law (LLB / BA Jurisprudence)',
    universities: ['Oxford', 'Cambridge', 'UCL', 'King’s College London', 'LSE', 'Bristol', 'Durham', 'Glasgow'],
    format: 'Section A: 42 MCQs (95 min) • Section B: 1 Essay from 3 choices (40 min)',
    description: 'Evaluates your aptitude for studying law through dense passage comprehension, inference deduction, and persuasive essay composition.',
    skillsAssessed: [
      'Section A: In-depth reading comprehension, deductive logic, identifying subtle biases, distinguishing fact from opinion',
      'Section B: Formulating sharp, persuasive legal and philosophical arguments with counter-arguments and clear rebuttals'
    ],
    prepHighlights: [
      'Detailed analytical breakdown of complex legal, ethical, and socio-political passages',
      'Essay structural templates modeled on top-scoring Oxford law submissions',
      'Timed practice sets with detailed rationales for ambiguous answer choices'
    ]
  }
];

export const TUTORS: Tutor[] = [
  {
    id: 'dr-sarah-johnson',
    name: 'Dr. Sarah Johnson',
    title: 'Lead Tutor in Mathematics & Physics',
    role: 'Senior STEM Specialist',
    university: 'University of Cambridge',
    degree: 'Ph.D. in Applied Mathematics',
    subjects: ['IB Math AA HL', 'A-Level Further Maths', 'AP Calculus BC', 'TMUA / STEP Prep'],
    curricula: ['IB Diploma', 'A-Level', 'AP', 'University Admissions'],
    experienceYears: 11,
    rating: 4.98,
    reviewsCount: 142,
    studentsTaught: 280,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    bio: 'Former Cambridge supervisor with over a decade of experience preparing students for top-tier STEM degrees. Sarah transforms complex calculus and proof theories into clear, structured frameworks, with 94% of her students earning top 7s or A*s.',
    achievements: [
      'Over 100 students admitted to Cambridge, Oxford, and Imperial STEM programs',
      'Author of comprehensive IB Mathematics Analysis & Approaches study guides',
      'Specialist mentor for TMUA & Cambridge STEP mathematics examinations'
    ],
    specialties: ['IB Internal Assessment Mentorship', 'TMUA & STEP Test Prep', 'Calculus & Proof Fluency']
  },
  {
    id: 'mr-james-parker',
    name: 'Mr. James Parker',
    title: 'Lead Tutor in Physics & Engineering',
    role: 'Physics Lead Tutor',
    university: 'University of Oxford',
    degree: 'M.Phys in Theoretical Physics',
    subjects: ['A-Level Physics', 'IB Physics HL', 'AP Physics C', 'PAT & ENGAA'],
    curricula: ['A-Level', 'IB Diploma', 'AP', 'Oxford Admissions'],
    experienceYears: 8,
    rating: 4.96,
    reviewsCount: 118,
    studentsTaught: 215,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    bio: 'Oxford physics graduate who demystifies advanced mechanics, electromagnetism, and quantum theory. James emphasizes first-principles thinking, rigorous past-paper technique, and effective problem-solving strategies.',
    achievements: [
      'Coached 40+ Oxford PAT candidates with an 82% interview invitation rate',
      '92% student score improvement rate within 3 months of 1-to-1 tutoring',
      'Deep expertise across CAIE, Pearson Edexcel, AQA, and College Board standards'
    ],
    specialties: ['Oxford PAT Exam Preparation', 'High-Level Physics Problem Solving', 'Physics IA & Lab Analysis']
  },
  {
    id: 'ms-priya-sharma',
    name: 'Ms. Priya Sharma',
    title: 'Lead Tutor in Economics & Standardized Testing',
    role: 'Economics & GMAT/GRE Specialist',
    university: 'London School of Economics (LSE)',
    degree: 'M.Sc. in Economics & Finance',
    subjects: ['IB Economics HL', 'A-Level Economics', 'GMAT Focus (Quant & DI)', 'GRE Quantitative'],
    curricula: ['IB Diploma', 'A-Level', 'AP', 'GMAT / GRE'],
    experienceYears: 7,
    rating: 4.95,
    reviewsCount: 96,
    studentsTaught: 185,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
    bio: 'Former financial analyst and LSE alumna with deep expertise in macroeconomic policy, microeconomic theory, and standardized quantitative reasoning. Priya helps students master real-world evaluation diagrams and achieve elite percentiles.',
    achievements: [
      'Mentored 50+ students to Grade 7 in IB Economics and straight A*s at A-Level',
      'GMAT students achieve an average score increase of +90 points on the Focus Edition',
      'Specialist in high-scoring essay evaluation frameworks and Data Insights timing'
    ],
    specialties: ['GMAT Focus Data Insights', 'IB Economics Extended Essay', 'LSE & Ivy League Admissions Profile']
  },
  {
    id: 'dr-daniel-lee',
    name: 'Dr. Daniel Lee',
    title: 'Lead Tutor in Chemistry & Pre-Med Admissions',
    role: 'Chemistry & UCAT Specialist',
    university: 'Imperial College London',
    degree: 'Ph.D. in Medicinal Chemistry',
    subjects: ['IB Chemistry HL', 'A-Level Chemistry', 'UCAT Clinical Prep', 'AP Chemistry'],
    curricula: ['IB Diploma', 'A-Level', 'AP', 'Medical Admissions'],
    experienceYears: 10,
    rating: 4.99,
    reviewsCount: 130,
    studentsTaught: 240,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    bio: 'Imperial College researcher and seasoned educator who breaks down complex organic reaction mechanisms, thermodynamics, and UCAT aptitude sections into clear, intuitive steps.',
    achievements: [
      'Guided over 80 pre-med applicants into top UK, US, and Australian medical schools',
      'Flawless 100% pass rate with over 90% scoring Grade 7 or A* in senior chemistry',
      'Proven UCAT preparation methodology averaging 2900+ (top 10th percentile)'
    ],
    specialties: ['UCAT Medical Admissions', 'Organic Synthesis Mechanisms', 'Chemistry IA & Practical Analysis']
  },
  {
    id: 'mr-alexander-vance',
    name: 'Mr. Alexander Vance',
    title: 'Senior SAT & ACT Master Coach',
    role: 'Standardized Test Lead',
    university: 'Yale University',
    degree: 'B.A. in English Literature & Statistics',
    subjects: ['Digital SAT (Math & R&W)', 'ACT (Composite 36 Prep)', 'GRE Verbal & AWA'],
    curricula: ['SAT', 'ACT', 'GRE'],
    experienceYears: 9,
    rating: 4.97,
    reviewsCount: 165,
    studentsTaught: 320,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80',
    bio: 'Yale graduate with a perfect 1600 SAT and 36 ACT score. Alexander has coached hundreds of international students to achieve top 1% standardized test results for Ivy League and Stanford admissions.',
    achievements: [
      'Average Digital SAT score improvement of +190 points',
      'Over 60 students achieved 1550+ on the Digital SAT in the past two test cycles',
      'Author of proprietary Desmos calculator speed strategy curriculum'
    ],
    specialties: ['Digital SAT Adaptive Tactics', 'ACT Timing & Science Strategy', 'Ivy League Profile Positioning']
  },
  {
    id: 'ms-clara-monroe',
    name: 'Ms. Clara Monroe',
    title: 'Lead Tutor in Law, TSA & Humanities',
    role: 'LNAT & Oxbridge Humanities Tutor',
    university: 'University of Oxford',
    degree: 'B.A. (First Class) in Jurisprudence (Law)',
    subjects: ['LNAT Law Admissions', 'TSA Critical Thinking', 'A-Level & IB English Literature', 'History'],
    curricula: ['LNAT', 'TSA', 'IB Diploma', 'A-Level'],
    experienceYears: 6,
    rating: 4.98,
    reviewsCount: 88,
    studentsTaught: 140,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
    bio: 'First Class Oxford law graduate specializing in the LNAT and TSA. Clara trains students to break down dense passages, spot unstated assumptions, and write compelling, well-reasoned argumentative essays.',
    achievements: [
      '78% of her LNAT students received offers from Oxford, Cambridge, UCL, or LSE',
      'Created structured argumentation frameworks for Section B legal essays',
      'Oxford Law Faculty prize winner with top-percentile TSA performance'
    ],
    specialties: ['LNAT Section A & B Mastery', 'TSA Critical Reasoning Logic', 'Oxford Law & PPE Interview Prep']
  }
];

export const SUBJECTS: SubjectItem[] = [
  {
    id: 'maths',
    name: 'Mathematics',
    category: 'Mathematics',
    iconName: 'Calculator',
    curricula: ['IB HL/SL', 'A-Level & Further Maths', 'IGCSE', 'AP Calc AB/BC', 'SAT/ACT Math', 'TMUA / STEP'],
    tutorCount: 18,
    description: 'Pure mathematics, calculus, linear algebra, statistics, and mechanics customized for school syllabi and university entrance exams.',
    topics: ['Calculus & Differential Equations', 'Algebra & Complex Numbers', 'Vectors & Matrix Geometry', 'Probability & Statistics', 'Logic & Mathematical Proofs']
  },
  {
    id: 'physics',
    name: 'Physics',
    category: 'Sciences',
    iconName: 'Zap',
    curricula: ['IB HL/SL', 'A-Level', 'IGCSE', 'AP Physics C (Mech & E/M)', 'PAT & ENGAA'],
    tutorCount: 14,
    description: 'Classical mechanics, electromagnetism, thermodynamics, waves, and quantum phenomena with a focus on problem-solving precision.',
    topics: ['Newtonian Mechanics & Dynamics', 'Electric & Magnetic Fields', 'Thermal & Kinetic Theory', 'Quantum & Nuclear Physics', 'Experimental Data Analysis']
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    category: 'Sciences',
    iconName: 'FlaskConical',
    curricula: ['IB HL/SL', 'A-Level', 'IGCSE', 'AP Chemistry', 'Pre-Med Prep'],
    tutorCount: 12,
    description: 'Organic reaction mechanisms, physical chemistry energetics, chemical equilibria, and analytical spectroscopy.',
    topics: ['Organic Synthesis & Reaction Mechanisms', 'Thermodynamics & Reaction Kinetics', 'Electrochemistry & Equilibrium', 'Spectroscopy & Structural Identification']
  },
  {
    id: 'biology',
    name: 'Biology',
    category: 'Sciences',
    iconName: 'Dna',
    curricula: ['IB HL/SL', 'A-Level', 'IGCSE', 'AP Biology', 'UCAT Biology Foundation'],
    tutorCount: 11,
    description: 'Molecular genetics, cell biochemistry, human physiology, evolutionary biology, and ecological systems.',
    topics: ['Molecular Genetics & DNA Technology', 'Cellular Respiration & Photosynthesis', 'Human Physiology & Organ Systems', 'Ecology & Biodiversity']
  },
  {
    id: 'economics',
    name: 'Economics',
    category: 'Humanities',
    iconName: 'TrendingUp',
    curricula: ['IB HL/SL', 'A-Level', 'IGCSE', 'AP Micro/Macro', 'GMAT / GRE Economics Foundations'],
    tutorCount: 10,
    description: 'Microeconomic market efficiency, macroeconomic policy, international trade dynamics, and development economics.',
    topics: ['Market Structures & Elasticity', 'Fiscal, Monetary & Supply-Side Policy', 'International Trade & Exchange Rates', 'Evaluation & Essay Techniques']
  },
  {
    id: 'business',
    name: 'Business Management',
    category: 'Humanities',
    iconName: 'Briefcase',
    curricula: ['IB HL/SL', 'A-Level', 'IGCSE'],
    tutorCount: 8,
    description: 'Strategic planning, financial accounting, marketing dynamics, operations management, and human resources.',
    topics: ['Corporate Strategy & Analysis', 'Financial Statements & Ratio Analysis', 'Global Marketing Strategy', 'Organizational Operations & Supply Chain']
  },
  {
    id: 'computer-science',
    name: 'Computer Science',
    category: 'Technology',
    iconName: 'Code',
    curricula: ['IB HL/SL', 'A-Level', 'IGCSE', 'AP Comp Sci A', 'TMUA CS Logic'],
    tutorCount: 9,
    description: 'Object-oriented programming, algorithms, data structures, computational logic, and systems architecture.',
    topics: ['Python & Java Programming', 'Algorithm Design & Big-O Complexity', 'Data Structures (Trees, Graphs, Queues)', 'Database Architecture & SQL Queries']
  },
  {
    id: 'psychology',
    name: 'Psychology',
    category: 'Humanities',
    iconName: 'Brain',
    curricula: ['IB HL/SL', 'A-Level', 'AP Psychology'],
    tutorCount: 7,
    description: 'Biological, cognitive, and sociocultural approaches to human behavior, research methodology, and psychological ethics.',
    topics: ['Cognitive Information Processing', 'Biological Bases of Behavior', 'Sociocultural Studies & Norms', 'Quantitative & Qualitative Research Methods']
  },
  {
    id: 'english',
    name: 'English & Literature',
    category: 'Languages',
    iconName: 'BookOpen',
    curricula: ['IB Literature / Lang & Lit', 'A-Level English', 'IGCSE', 'Digital SAT R&W', 'LNAT / TSA Writing'],
    tutorCount: 9,
    description: 'Critical textual analysis, structured essay composition, rhetoric, comparative literature, and standardized verbal mastery.',
    topics: ['Advanced Essay Structuring', 'Unseen Text Analysis & Poetry', 'Comparative Literature Syntheses', 'Rhetorical Devices & Argument Analysis']
  }
];

export const RESOURCE_ARTICLES: ResourceArticle[] = [
  {
    id: 'ib-vs-a-level',
    title: 'IB Diploma vs. A-Levels: Which Fits Your University Goals?',
    category: 'ACADEMIC GUIDE',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
    date: 'August 2026',
    excerpt: 'An in-depth comparison between the multi-disciplinary breadth of the International Baccalaureate and the deep subject specialization of British A-Levels.',
    content: [
      'Choosing between the IB Diploma and A-Levels is one of the most critical decisions for students in Grade 10 targeting top global universities in the UK, US, and Canada.',
      '1. Breadth vs. Specialization: The IB requires 6 subjects across STEM, languages, and humanities, alongside TOK, EE, and CAS. In contrast, A-Levels focus intensively on 3 or 4 chosen subjects, allowing deep specialization.',
      '2. Admissions Perspective: Top universities worldwide value both pathways equally. A-Levels allow targeted study for degree-specific admissions tests (like TMUA, PAT, or UCAT), whereas IB provides comprehensive academic versatility.',
      '3. Workload Structure: IB students manage continuous coursework assessments (IAs) throughout the two years, while A-Levels place major weight on final terminal examinations.',
      'Our advisors work with families to evaluate the student’s learning style, intended university major, and workload preferences to choose the best curriculum.'
    ],
    author: {
      name: 'Dr. Sarah Johnson',
      role: 'Lead STEM Advisor',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
    }
  },
  {
    id: 'how-to-improve-in-maths',
    title: 'How to Excel in Advanced High School Mathematics',
    category: 'STUDY STRATEGY',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
    date: 'July 2026',
    excerpt: 'Mastering senior math requires moving beyond rote memorization to first-principles problem solving and active error tracking.',
    content: [
      'Succeeding in IB Math AA HL or A-Level Further Maths demands genuine conceptual intuition rather than just memorizing formulas.',
      '1. Keep a Detailed Error Log: Record every mistake from homework and practice papers, categorizing them into conceptual gaps, calculation errors, or misread questions.',
      '2. First-Principles Thinking: Learn how core formulas and theorems are derived. This enables you to solve novel or unexpected exam questions confidently.',
      '3. Timed Past Paper Conditions: Practice under realistic timed constraints early. Pacing is often the key difference between an average grade and a top score.',
      '4. Active Problem Verbalization: Explaining your solution steps aloud to a tutor cements logical connections and clarifies underlying concepts.'
    ],
    author: {
      name: 'Mr. James Parker',
      role: 'Senior STEM Specialist',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
    }
  },
  {
    id: 'study-habits-high-achievers',
    title: 'Proven Study Habits of High-Scoring Students',
    category: 'EXAM TIPS',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80',
    date: 'July 2026',
    excerpt: 'Key strategies gathered from tutoring hundreds of students who achieved 42+ points in IB or straight A*s in A-Levels.',
    content: [
      'Long-term academic excellence comes from reliable daily systems rather than stressful last-minute cramming.',
      '1. Spaced Repetition over Massed Cramming: Reviewing key concepts in short, focused 25-minute sessions spaced across weeks dramatically increases long-term memory retention.',
      '2. The Feynman Technique: Explain complex concepts simply in your own words. Whenever you stumble, you pinpoint the exact area that needs review.',
      '3. Official Mark Scheme Calibration: Prioritize official past papers and examiner reports to learn the precise phrasing and steps required for full marks.',
      '4. Consistent Sleep & Cognitive Recovery: Memory consolidation takes place during deep sleep. Top students protect an 8-hour sleep routine during peak assessment periods.'
    ],
    author: {
      name: 'Ms. Priya Sharma',
      role: 'Academic Performance Advisor',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80'
    }
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How does 1-to-1 online tutoring work at Novera Education?',
    answer: 'All sessions are held live in our dedicated virtual classroom, featuring interactive two-way digital whiteboards, screen sharing, real-time document editing, and HD audio/video. Students receive structured lesson summaries and recording access after every class.',
    category: 'Tutoring Process'
  },
  {
    id: 'faq-2',
    question: 'Which curricula and test prep programs do you cover?',
    answer: 'We cover international high school curricula (IB Diploma, IB MYP, Cambridge/Edexcel IGCSE, GCE A-Level, and AP) as well as elite test prep: Standardized Tests (Digital SAT, ACT, GMAT Focus, GRE) and UK Admissions Tests (TMUA, TSA, UCAT, LNAT).',
    category: 'General'
  },
  {
    id: 'faq-3',
    question: 'How are tutors selected and matched with students?',
    answer: 'We accept only the top 3% of applicant educators, all graduates of Oxford, Cambridge, Imperial, and Ivy League universities with proven teaching records. During your consultation, we assess your curriculum, current grades, and goals to pair you with the ideal subject specialist.',
    category: 'Tutors & Matching'
  },
  {
    id: 'faq-4',
    question: 'What is included in the initial consultation and trial session?',
    answer: 'Your consultation includes a comprehensive diagnostic assessment of your syllabus standing, an introduction to your matched tutor, and a tailored learning roadmap with no long-term commitment required.',
    category: 'Trial & Booking'
  },
  {
    id: 'faq-5',
    question: 'Can we switch tutors or adjust our lesson schedule?',
    answer: 'Yes, absolutely. We prioritize the best learning fit. If you ever need a different teaching approach or schedule change, our academic coordinators will arrange a smooth reassignment immediately.',
    category: 'Tutors & Matching'
  },
  {
    id: 'faq-6',
    question: 'How do parents stay informed on student progress?',
    answer: 'Parents receive a concise digital lesson report after every session, detailing the concepts covered, homework feedback, syllabus mastery scores, and upcoming milestones. We also hold regular review check-ins.',
    category: 'Tutoring Process'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'Novera completely transformed my SAT strategy! In the English reading section, my tutor taught me how to eliminate distractor choices in inference questions, and in Maths, the Desmos shortcuts saved me 10+ minutes per module. My score jumped from 1340 to 1540 on test day!',
    studentName: 'Rohan Mehta',
    role: 'Digital SAT & AP Student',
    curriculum: 'Digital SAT (1540/1600)',
    scoreBeforeAfter: 'SAT: 1340 → 1540',
    universityAdmitted: 'UPenn Wharton (Economics)',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'test-2',
    quote: 'I was struggling with 15-mark and 25-mark evaluation essays in IB Economics and Paper 1 commentary in English Literature. My Novera tutor broke down precise essay blueprints with real-world context and thesis structures. I went from a 5 to a predicted 7 in both subjects!',
    studentName: 'Chloe Jenkins',
    role: 'IB Diploma Candidate',
    curriculum: 'IB Diploma (44/45)',
    scoreBeforeAfter: 'Economics & English: 5 → 7',
    universityAdmitted: 'London School of Economics (LSE)',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'test-3',
    quote: 'Preparing for AP Computer Science A and AP Calculus BC simultaneously was overwhelming until I started 1-on-1 sessions at Novera. Their recursion drills, Java OOP breakdowns, and FRQ scoring practice helped me secure a 5 in both AP CS A and AP Calculus BC!',
    studentName: 'Lucas Zhang',
    role: 'AP STEM Student',
    curriculum: 'AP (Calculus BC & Comp Sci A)',
    scoreBeforeAfter: 'AP Calculus & CS: 3 → 5 (Both)',
    universityAdmitted: 'Carnegie Mellon University (CS)',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'test-4',
    quote: 'In A-Level Psychology and History, my tutor taught me how to write top-band 16-mark essays with balanced methodological critique and historiographical evaluation. The structured feedback was instrumental in securing my A* in Psychology.',
    studentName: 'Ananya Patel',
    role: 'A-Level Humanities Student',
    curriculum: 'A-Level (A* A* A)',
    scoreBeforeAfter: 'Psychology: B → A*',
    universityAdmitted: 'University of Oxford (Experimental Psychology)',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'test-5',
    quote: 'Mastering rotational dynamics and Gauss’s law in AP Physics C felt impossible in class. Mr. James at Novera took me through first-principles derivations and timed past FRQs until everything clicked. I got a 5 in Mechanics and a 5 in E&M!',
    studentName: 'Daniel Kim',
    role: 'AP Physics & STEM Scholar',
    curriculum: 'AP Physics C (Mech & E/M)',
    scoreBeforeAfter: 'AP Physics C: Score 5 in Both',
    universityAdmitted: 'MIT (Mechanical Engineering)',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'test-6',
    quote: 'Novera’s 1-on-1 tutoring helped me overhaul my whole SAT pacing strategy. We focused intensely on eliminating vocabulary-in-context errors in English and tackling multi-step algebra questions in Math. My score went from 1380 to 1560!',
    studentName: 'Sophia Rodriguez',
    role: 'Standardized Test Candidate',
    curriculum: 'Digital SAT (1560/1600)',
    scoreBeforeAfter: 'SAT: 1380 → 1560',
    universityAdmitted: 'Stanford University (Economics)',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'test-7',
    quote: 'My IB Math AA HL grade rose from a 5 to a 7 in four months. The internal assessment feedback and calculus proof coaching secured my conditional offer at Cambridge. I could not have done it without Dr. Sarah!',
    studentName: 'Alexander Wright',
    role: 'IB Diploma Student',
    curriculum: 'IB Diploma (43/45)',
    scoreBeforeAfter: 'Math AA HL: 5 → 7',
    universityAdmitted: 'University of Cambridge (Engineering)',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'test-8',
    quote: 'Finding tutors who truly understood the exact marking rubrics of Edexcel A-Level Chemistry and Physics made all the difference. The structured 1-to-1 lessons gave me total confidence in Paper 3 experimental analysis.',
    studentName: 'Maya Chen',
    parentName: 'David & Helen Chen',
    role: 'A-Level Sciences Student',
    curriculum: 'A-Level (A* A* A*)',
    scoreBeforeAfter: 'Chemistry & Physics: B → A*',
    universityAdmitted: 'Imperial College London (Physics)',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'test-9',
    quote: 'The TMUA mathematical logic and counterexample drills for Paper 2 transformed how I tackle unfamiliar abstract problems. My tutor guided me through 10 years of past papers, helping me score in the top 5% globally.',
    studentName: 'Kavya Nair',
    role: 'Cambridge Mathematics Applicant',
    curriculum: 'TMUA & A-Level Further Maths',
    scoreBeforeAfter: 'TMUA Score: 7.8 (Top 5%)',
    universityAdmitted: 'University of Cambridge (Mathematics)',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'test-10',
    quote: 'We revamped my entire test preparation routine—mastering Reading & Writing context inferences and advanced AP Chemistry thermodynamics. Scored 1580 on the SAT and 5/5 in AP Chemistry on my first attempt!',
    studentName: 'Marcus Sterling',
    role: 'Ivy League Applicant',
    curriculum: 'Digital SAT (1580) & AP Chemistry',
    scoreBeforeAfter: 'SAT: 1410 → 1580 | AP: 5',
    universityAdmitted: 'Princeton University (Chemistry)',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'test-11',
    quote: 'Learning comparative literary analysis frameworks and argument synthesis helped me earn a 7 in IB English A Literature and 44 points overall in my IB Diploma. The weekly feedback on essay drafts was world-class.',
    studentName: 'Zara Al-Mansoor',
    role: 'IB Diploma Scholar',
    curriculum: 'IB Diploma (44/45)',
    scoreBeforeAfter: 'IB English Lit HL: 5 → 7',
    universityAdmitted: 'Yale University (Comparative Literature)',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'test-12',
    quote: 'The sub-15-second Abstract Reasoning shortcuts and ethical Situational Judgement coaching helped me score 3120 Band 1 on the UCAT, securing 4 medical school interview invitations and my first-choice offer!',
    studentName: 'Liam O’Connor',
    role: 'Pre-Med & UCAT Candidate',
    curriculum: 'UCAT (3120 Band 1)',
    scoreBeforeAfter: 'UCAT: 2580 → 3120 (Band 1)',
    universityAdmitted: 'University of Edinburgh (Medicine)',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80'
  }
];

export const STATS = [
  { value: '98.4%', label: 'Top-Tier Grade Rate (7s / A*s / 5s)', suffix: '' },
  { value: '43.2', label: 'Average IB Diploma Score', suffix: '/45' },
  { value: '100%', label: 'Oxbridge & Ivy League Specialist Tutors', suffix: '' },
  { value: '18+', label: 'Countries with Active Students & Families', suffix: '' }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Diagnostic Assessment',
    description: 'We evaluate your current syllabus mastery, key strengths, learning style, and target university admission goals.',
    iconName: 'UserCheck',
    details: 'Comprehensive diagnostic review by our senior academic team.'
  },
  {
    step: '02',
    title: 'Expert Tutor Matching',
    description: 'We match you with a specialized tutor from Oxford, Cambridge, or an Ivy League university who matches your subject and learning style.',
    iconName: 'Users',
    details: 'Hand-picked from the top 3% of expert educators.'
  },
  {
    step: '03',
    title: 'Personalized 1-to-1 Lessons',
    description: 'Engaging, interactive online sessions focused on conceptual clarity, problem-solving, and exam technique.',
    iconName: 'Laptop',
    details: 'Interactive digital whiteboard, real-time notes, and recorded lesson access.'
  },
  {
    step: '04',
    title: 'Score Elevation & Mastery',
    description: 'Ongoing past-paper practice, exam timing mastery, coursework feedback, and regular parent progress reports.',
    iconName: 'GraduationCap',
    details: 'Continuous progress tracking and targeted score improvement.'
  }
];

