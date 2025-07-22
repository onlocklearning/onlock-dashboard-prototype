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
    id: 'stats-basics',
    title: 'Introduction to Statistics',
    mode: 'General',
    subject: 'statistics',
    coinReward: 10,
  },
  {
    id: 'stats-probability',
    title: 'Probability Fundamentals',
    mode: 'General',
    subject: 'statistics',
    coinReward: 9,
  },
  {
    id: 'stats-poisson',
    title: 'Intro to Poisson Distribution',
    mode: 'General',
    subject: 'statistics',
    coinReward: 10,
  },
  {
    id: 'functions-basics',
    title: 'Function Basics',
    mode: 'General',
    subject: 'functions',
    coinReward: 10,
  },
  {
    id: 'function-graphs',
    title: 'Graphing Functions',
    mode: 'General',
    subject: 'functions',
    coinReward: 9,
  },
  // Exam Prep mode lessons
  {
    id: 'alevel-vectors',
    title: 'A-Level Vector Questions',
    mode: 'Exam Prep',
    subject: 'A-Level',
    coinReward: 12,
  },
  {
    id: 'ap-calc-ab',
    title: 'AP Calc AB Frq walkthrough',
    mode: 'Exam Prep',
    subject: 'AP',
    coinReward: 11,
  },
]; 