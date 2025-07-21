export interface Lesson {
  id: string;
  title: string;
  videoSrc: string;
  description: string;
  question: string;
  options: string[];
  answer: number; // index of correct option
  takeaway: string;
}

const lessons: Lesson[] = [
  {
    id: '1',
    title: 'What is an Atom?',
    videoSrc: '', // placeholder for now
    description: 'Atoms are the basic building blocks of matter.',
    question: 'What is the smallest unit of matter?',
    options: ['Molecule', 'Atom', 'Cell', 'Proton'],
    answer: 1,
    takeaway: 'Atoms are the smallest unit of matter that retain the properties of an element.'
  },
  // Add more lessons as needed
];

export function getLessonById(id: string): Lesson | undefined {
  return lessons.find(lesson => lesson.id === id);
} 