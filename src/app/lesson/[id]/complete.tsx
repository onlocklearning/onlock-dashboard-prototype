'use client';
import { useParams, useRouter } from 'next/navigation';
import { getLessonById } from '../../../data/lessonMock';

export default function LessonComplete() {
  const { id } = useParams();
  const router = useRouter();
  const lesson = getLessonById(id as string);

  if (!lesson) return <div className="text-white p-8">Lesson not found.</div>;

  return (
    <div className="min-h-screen bg-black text-white font-[onest] flex flex-col items-center px-4 py-8">
      <div className="w-full max-w-md bg-black rounded-2xl shadow-md border-2 border-gray-800 p-6 flex flex-col items-center">
        <div className="text-4xl mb-2">✅ You nailed it!</div>
        <div className="text-2xl text-yellow-400 font-bold mb-4">🎉 +10 OnCoins</div>
        <div className="text-lg text-white mb-6 text-center">🧠 Learned: <span className="text-yellow-400">{lesson.takeaway}</span></div>
        <div className="flex flex-col gap-3 w-full">
          <button
            className="w-full bg-yellow-400 text-black font-bold py-3 px-6 rounded-xl text-lg shadow hover:bg-yellow-300 transition-colors"
            onClick={() => router.push('/lesson/2')}
          >
            → Next Challenge
          </button>
          <button
            className="w-full bg-white text-black font-bold py-3 px-6 rounded-xl text-lg shadow hover:bg-yellow-100 transition-colors"
            onClick={() => router.push('/dashboard')}
          >
            🏠 Go Back to Dashboard
          </button>
          <button
            className="w-full bg-neutral-900 text-yellow-400 font-bold py-3 px-6 rounded-xl text-lg shadow hover:bg-neutral-800 transition-colors"
            onClick={() => router.push(`/lesson/${lesson.id}`)}
          >
            🔁 Replay Video
          </button>
        </div>
      </div>
    </div>
  );
} 