'use client';
import { useParams, useRouter } from 'next/navigation';
import { getLessonById } from '../../../data/lessonMock';

export default function LessonPage() {
  const { id } = useParams();
  const router = useRouter();
  const lesson = getLessonById(id as string);

  if (!lesson) return <div className="text-white p-8">Lesson not found.</div>;

  return (
    <div className="min-h-screen bg-black text-white font-[onest] flex flex-col items-center px-4 py-8">
      <div className="w-full max-w-md bg-black rounded-2xl shadow-md border-2 border-gray-800 p-6 flex flex-col items-center">
        <h1 className="text-2xl font-bold text-yellow-400 mb-4 text-center">{lesson.title}</h1>
        <div className="w-full flex justify-center mb-4">
          <div className="w-72 h-40 bg-neutral-900 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">[Video Placeholder]</span>
          </div>
        </div>
        <p className="text-gray-300 text-center mb-6">{lesson.description}</p>
        <button
          className="w-full bg-yellow-400 text-black font-bold py-3 px-6 rounded-xl text-lg shadow hover:bg-yellow-300 transition-colors"
          onClick={() => router.push(`/lesson/${lesson.id}/challenge`)}
        >
          🎮 Try It Now
        </button>
      </div>
    </div>
  );
} 