export interface Lesson {
  id: string;
  title: string;
  mode: string;
  subject: string;
  coinReward: number;
  videoSrc?: string; // Add video source for course covers
}

export const lessons: Lesson[] = [
  // General mode lessons
  {
    id: 'stats-basics',
    title: 'Introduction to Statistics',
    mode: 'General',
    subject: 'statistics',
    coinReward: 10,
    videoSrc: '/gifs/test_1.mp4',
  },
  {
    id: 'stats-probability',
    title: 'Probability Fundamentals',
    mode: 'General',
    subject: 'statistics',
    coinReward: 9,
    videoSrc: '/gifs/test2.mp4',
  },
  {
    id: 'stats-poisson',
    title: 'Intro to Poisson Distribution',
    mode: 'General',
    subject: 'statistics',
    coinReward: 10,
    videoSrc: '/gifs/poisson_cover.webm',
  },
  {
    id: 'functions-basics',
    title: 'Function Basics',
    mode: 'General',
    subject: 'functions',
    coinReward: 10,
    videoSrc: '/gifs/test3.mp4',
  },
  {
    id: 'function-graphs',
    title: 'Graphing Functions',
    mode: 'General',
    subject: 'functions',
    coinReward: 9,
    videoSrc: '/gifs/test_1.mp4',
  },
  // Exam Prep mode lessons
  {
    id: 'alevel-vectors',
    title: 'A-Level Vector Questions',
    mode: 'Exam Prep',
    subject: 'A-Level',
    coinReward: 12,
    videoSrc: '/gifs/test2.mp4',
  },
  {
    id: 'ap-calc-ab',
    title: 'AP Calc AB Frq walkthrough',
    mode: 'Exam Prep',
    subject: 'AP',
    coinReward: 11,
    videoSrc: '/gifs/test3.mp4',
  },
  // Additional lessons to fill out the dashboard
  {
    id: 'ib-math-hl',
    title: 'IB Math HL Integration',
    mode: 'Exam Prep',
    subject: 'IB',
    coinReward: 13,
    videoSrc: '/gifs/test_1.mp4',
  },
  {
    id: 'sat-math',
    title: 'SAT Math Problem Solving',
    mode: 'Exam Prep',
    subject: 'SATs',
    coinReward: 8,
    videoSrc: '/gifs/test2.mp4',
  },
  {
    id: 'jee-physics',
    title: 'JEE Physics Mechanics',
    mode: 'Exam Prep',
    subject: 'JEE',
    coinReward: 15,
    videoSrc: '/gifs/test3.mp4',
  },
  {
    id: 'stats-advanced',
    title: 'Advanced Statistical Methods',
    mode: 'General',
    subject: 'statistics',
    coinReward: 12,
    videoSrc: '/gifs/test_1.mp4',
  },
  {
    id: 'functions-advanced',
    title: 'Advanced Function Analysis',
    mode: 'General',
    subject: 'functions',
    coinReward: 11,
    videoSrc: '/gifs/test2.mp4',
  },
]; 