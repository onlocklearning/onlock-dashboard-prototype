'use client';

import React, { useState } from 'react';
import FilterBar from '../../components/FilterBar';
import VideoCard from '../../components/VideoCard';
import { lessons } from '../../data/lessons';

const modeOptions = ['General', 'Exam Prep'];
const subjectOptionsMap: Record<string, string[]> = {
  General: ["statistics", "functions"],
  "Exam Prep": ["A-Level", "AP", "IB", "SATs", "JEE"],
};

export default function Dashboard() {
  const [selectedMode, setSelectedMode] = useState<string | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [streakTooltip, setStreakTooltip] = useState(false);
  const streakDays = [
    { day: 'Mon', achieved: true },
    { day: 'Tue', achieved: true },
    { day: 'Wed', achieved: true },
    { day: 'Thu', achieved: true },
    { day: 'Fri', achieved: true },
    { day: 'Sat', achieved: false },
    { day: 'Sun', achieved: false },
  ];

  // Toggle mode: deselect if clicking same
  const handleModeSelect = (mode: string) => {
    if (selectedMode === mode) {
      setSelectedMode(null);
      setSelectedSubject(null);
    } else {
      setSelectedMode(mode);
      setSelectedSubject(null);
    }
  };
  // Toggle subject: deselect if clicking same
  const handleSubjectSelect = (subject: string) => {
    if (selectedSubject === subject) {
      setSelectedSubject(null);
    } else {
      setSelectedSubject(subject);
    }
  };

  const filteredLessons = lessons.filter(
    (lesson) =>
      (!selectedMode || lesson.mode === selectedMode) &&
      (!selectedSubject || lesson.subject === selectedSubject)
  );

  return (
    <div className="min-h-screen bg-black font-[onest] text-white">
      {/* Top Bar */}
      <div className="sticky top-0 z-10 bg-black/80 backdrop-blur-md border-b border-gray-800 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <h1 className="text-2xl text-white font-[onest] font-black tracking-tight lowercase">onlock</h1>
        </div>
        <div className="flex items-center space-x-4">
          {/* Daily Streak */}
          <button
            className="relative flex items-center space-x-1 bg-orange-400/80 px-3 py-1 rounded-full mr-2 cursor-pointer hover:bg-yellow-300/20 transition"
            onMouseEnter={() => setStreakTooltip(true)}
            onMouseLeave={() => setStreakTooltip(false)}
            onClick={() => alert('Rewards coming soon!')}
            type="button"
          >
            <span className="text-white text-lg">🔥</span>
            <span className="text-white font-bold text-sm">5</span>
            {streakTooltip && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 z-20 bg-black text-white rounded-xl shadow-lg p-3 min-w-max border-2 border-orange-400">
                <div className="text-xs font-bold mb-2 text-orange-300 text-center">7-Day Streak</div>
                <div className="flex space-x-2 justify-center">
                  {streakDays.map((d) => (
                    <div key={d.day} className="flex flex-col items-center">
                      <span className={`text-lg ${d.achieved ? 'text-orange-400' : 'text-gray-600'}`}>🔥</span>
                      <span className="text-xs mt-1">{d.day}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-lg mx-auto px-6 py-12 md:px-12 space-y-6">
        {/* Filter Bars Card */}
        <div className="bg-[#111827] rounded-xl p-4 shadow-md mt-6">
          <div className="mb-2 text-sm text-gray-300 font-semibold flex items-center gap-2">
            Choose Mode
          </div>
          <FilterBar
            options={modeOptions}
            selected={selectedMode}
            onSelect={handleModeSelect}
          />
          {selectedMode && (
            <>
              <div className="mb-2 mt-3 text-sm text-gray-300 font-semibold flex items-center gap-2">
                {selectedMode === 'Exam Prep' ? 'Pick Level' : 'Pick Subject'}
              </div>
              <FilterBar
                options={subjectOptionsMap[selectedMode]}
                selected={selectedSubject}
                onSelect={handleSubjectSelect}
              />
            </>
          )}
        </div>
        {/* Learning Feed */}
        <div>
          {/* Removed 'Learning Feed' subtitle and test tube emoji as requested */}
          <div className="overflow-y-auto max-h-[420px] md:min-h-[70vh] flex flex-col gap-y-6 pr-1 py-2">
            {filteredLessons.map((item) => (
              <VideoCard
                key={item.id}
                title={item.title}
                subcategory={item.subject}
                thumbnail={
                  item.id === 'stats-poisson' ? (
                    <video src="/gifs/poisson_cover.webm" className="w-24 aspect-[3/4] object-cover rounded-lg overflow-hidden" autoPlay loop muted playsInline />
                  ) : (
                    <div className="w-24 aspect-[3/4] bg-neutral-800 rounded-lg overflow-hidden" />
                  )
                }
                buttonClassName="ring-1 ring-yellow-500/10 shadow-lg hover:scale-[1.01] transition-transform"
              />
            ))}
            {filteredLessons.length === 0 && (
              <div className="text-gray-400 text-center py-8">No lessons in this selection yet.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 