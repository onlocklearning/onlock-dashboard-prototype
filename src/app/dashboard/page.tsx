'use client';

import React, { useState } from 'react';
import FilterBar from '../../components/FilterBar';
import VideoCard from '../../components/VideoCard';
import { lessons } from '../../data/lessons';

const modeOptions = ['General', 'Exam Prep'];
const subjectOptionsMap: Record<string, string[]> = {
  General: ["Physics", "Biology", "Chemistry", "Coding"],
  "Exam Prep": ["A-Level", "IB", "JEE", "SATs"],
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
          {/* Coin Count */}
          <button
            className="flex items-center space-x-1 bg-yellow-400 px-3 py-1 rounded-full cursor-pointer hover:bg-yellow-300/20 transition"
            onClick={() => alert('Rewards coming soon!')}
            type="button"
          >
            <span className="text-black font-bold">🪙</span>
            <span className="text-black font-bold text-sm">120 OnCoins</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-lg mx-auto px-2 py-6 space-y-6">
        {/* Filter Bars Card */}
        <div className="bg-[#111827] rounded-xl p-4 shadow-md mt-6">
          <div className="mb-2 text-sm text-gray-300 font-semibold flex items-center gap-2">
            <span className="text-lg">🎯</span> Choose Mode
          </div>
          <FilterBar
            options={modeOptions}
            selected={selectedMode}
            onSelect={handleModeSelect}
          />
          {selectedMode && (
            <>
              <div className="mb-2 mt-3 text-sm text-gray-300 font-semibold flex items-center gap-2">
                <span className="text-lg">📚</span> Pick Subject
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
          <h3 className="text-lg font-semibold text-white mb-3">Learning Feed</h3>
          <div className="overflow-y-auto max-h-[420px] flex flex-col gap-y-4 pr-1">
            {filteredLessons.map((item) => (
              <VideoCard
                key={item.id}
                title={item.title}
                subcategory={item.subject}
                coinReward={item.coinReward}
                duration="2 min"
                icon={<span className="text-2xl">🧪</span>}
                thumbnail={<div className="w-16 h-16 bg-neutral-800 rounded-lg flex items-center justify-center text-gray-500 text-2xl">🎬</div>}
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