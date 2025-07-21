'use client';

import React, { useState } from 'react';
import VideoCard from '../../components/VideoCard';
import TopicFilterBar from '../../components/TopicFilterBar';
import { videoFeed } from '../../data/videoFeed';

const userName = 'Alex';
const userCoins = 120;

const continueModules = [
  { id: 1, title: 'Atoms', emoji: '⚛️', status: 'Continue' },
  { id: 2, title: 'Molecules', emoji: '🧬', status: 'Start' },
  { id: 3, title: 'Reactions', emoji: '⚗️', status: 'Continue' },
  { id: 4, title: 'Energy', emoji: '⚡', status: 'Start' },
];

const topics = ['All', 'Physics', 'Chemistry', 'Biology', 'Coding', 'Space 🚀'];

export default function Dashboard() {
  const [selectedTopic, setSelectedTopic] = useState('All');
  const filteredFeed = selectedTopic === 'All'
    ? videoFeed
    : videoFeed.filter(item => item.subcategory === selectedTopic);

  return (
    <div className="min-h-screen bg-black font-[onest] text-white">
      {/* Top Bar */}
      <div className="sticky top-0 z-10 bg-black/80 backdrop-blur-md border-b border-gray-800 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <h1 className="text-lg font-bold text-white">Yo, {userName} 👋</h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1 bg-yellow-400 px-3 py-1 rounded-full">
            <span className="text-black font-bold">🪙</span>
            <span className="text-black font-bold text-sm">{userCoins} OnCoins</span>
          </div>
          <div className="flex space-x-2">
            <button className="p-2 text-white hover:text-yellow-400"><span role="img" aria-label="Home">🏠</span></button>
            <button className="p-2 text-white hover:text-yellow-400"><span role="img" aria-label="Library">📚</span></button>
            <button className="p-2 text-white hover:text-yellow-400"><span role="img" aria-label="Gift">🎁</span></button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-lg mx-auto px-2 py-6 space-y-6">
        <TopicFilterBar
          topics={topics}
          selectedTopic={selectedTopic}
          onSelectTopic={setSelectedTopic}
        />
        {/* Learning Feed */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Learning Feed</h3>
          <div className="overflow-y-auto max-h-[420px] flex flex-col gap-3 pr-1">
            {filteredFeed.map((item) => (
              <VideoCard
                key={item.id}
                title={item.title}
                subcategory={item.subcategory}
                coinReward={item.coinReward}
                onWatchTry={() => {}}
              />
            ))}
            {filteredFeed.length === 0 && (
              <div className="text-gray-400 text-center py-8">No lessons in this topic yet.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 