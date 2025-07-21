'use client';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { getLessonById } from '../../../data/lessonMock';

export default function LessonChallenge() {
  const { id } = useParams();
  const router = useRouter();
  const lesson = getLessonById(id as string);
  const [selected, setSelected] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [showNext, setShowNext] = useState(false);

  if (!lesson) return <div className="text-white p-8">Lesson not found.</div>;

  const handleSelect = (idx: number) => {
    setSelected(idx);
    if (idx === lesson.answer) {
      setFeedback('✅ Correct!');
      setTimeout(() => setShowNext(true), 700);
    } else {
      setFeedback('❌ Nope!');
      setTimeout(() => setFeedback(null), 700);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-[onest] flex flex-col items-center px-4 py-8">
      <div className="w-full max-w-md bg-black rounded-2xl shadow-md border-2 border-gray-800 p-6 flex flex-col items-center">
        <h2 className="text-xl font-bold text-yellow-400 mb-4 text-center">{lesson.title}</h2>
        <p className="text-gray-300 text-center mb-6">{lesson.question}</p>
        <div className="w-full flex flex-col gap-3 mb-4">
          {lesson.options.map((opt, idx) => (
            <button
              key={idx}
              className={`w-full py-3 rounded-xl font-bold text-lg border-2 transition-all shadow
                ${selected === idx
                  ? idx === lesson.answer
                    ? 'bg-green-500 border-green-400 text-black'
                    : 'bg-red-500 border-red-400 text-white'
                  : 'bg-neutral-900 border-gray-700 text-white hover:border-yellow-400 hover:bg-neutral-800'}
              `}
              disabled={selected !== null}
              onClick={() => handleSelect(idx)}
            >
              {opt}
            </button>
          ))}
        </div>
        {feedback && (
          <div className={`text-2xl font-bold mb-4 animate-bounce ${feedback.startsWith('✅') ? 'text-green-400' : 'text-red-400'}`}>{feedback}</div>
        )}
        {showNext && (
          <button
            className="w-full bg-yellow-400 text-black font-bold py-3 px-6 rounded-xl text-lg shadow hover:bg-yellow-300 transition-colors mt-2"
            onClick={() => router.push(`/lesson/${lesson.id}/complete`)}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
} 