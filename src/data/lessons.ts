export interface Lesson {
  id: string;
  title: string;
  mode: string;
  subject: string;
  coinReward: number;
  // ...other fields as needed
}

export const lessons: Lesson[] = [
  // General mode lessons
  {
    id: 'waves-intro',
    title: 'Intro to Waves',
    mode: 'General',
    subject: 'Physics',
    coinReward: 10,
  },
  {
    id: 'dna-basics',
    title: 'DNA Basics',
    mode: 'General',
    subject: 'Biology',
    coinReward: 9,
  },
  {
    id: 'chem-acids',
    title: 'Intro to Acids',
    mode: 'General',
    subject: 'Chemistry',
    coinReward: 10,
  },
  {
    id: 'python-basics',
    title: 'Python Basics',
    mode: 'General',
    subject: 'Coding',
    coinReward: 10,
  },
  // Exam Prep mode lessons
  {
    id: 'alevel-physics',
    title: 'A-Level Physics: Mechanics',
    mode: 'Exam Prep',
    subject: 'A-Level',
    coinReward: 12,
  },
  {
    id: 'ib-biology',
    title: 'IB Biology: Cells',
    mode: 'Exam Prep',
    subject: 'IB',
    coinReward: 11,
  },
  {
    id: 'jee-maths',
    title: 'JEE Maths: Calculus',
    mode: 'Exam Prep',
    subject: 'JEE',
    coinReward: 13,
  },
  {
    id: 'sats-chem',
    title: 'SATs Chemistry: Acids & Bases',
    mode: 'Exam Prep',
    subject: 'SATs',
    coinReward: 10,
  },
]; 