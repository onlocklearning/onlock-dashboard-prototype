'use client';

import React from 'react';
import VideoCard from '../../components/VideoCard';
import { videoFeed } from '../../data/videoFeed';

const userName = 'Alex';
const userCoins = 120;

const continueModules = [
  { id: 1, title: 'Atoms', emoji: '⚛️', status: 'Continue' },
  { id: 2, title: 'Molecules', emoji: '🧬', status: 'Start' },
  { id: 3, title: 'Reactions', emoji: '⚗️', status: 'Continue' },
  { id: 4, title: 'Energy', emoji: '⚡', status: 'Start' },
];

export default function Dashboard() {
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
        {/* Hero Section: Today's Challenge */}
        <div className="bg-black rounded-2xl p-5 shadow-md flex flex-col items-center text-center border-2 border-gray-800">
          <h2 className="text-xl font-bold text-yellow-400 mb-2">Watch this: What is an Atom?</h2>
          <div className="w-full flex justify-center mb-4">
            <div className="w-64 h-36 bg-neutral-900 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">[Video Placeholder]</span>
            </div>
          </div>
          <button className="w-full bg-yellow-400 text-black font-bold py-3 px-6 rounded-xl text-lg shadow hover:bg-yellow-300 transition-colors mb-2">Watch & Try</button>
          <p className="text-gray-400 text-sm flex items-center justify-center"><span className="mr-1">⏱️</span>Try in 60 seconds</p>
        </div>

        {/* Learning Feed */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Learning Feed</h3>
          <div className="overflow-y-auto max-h-[420px] flex flex-col gap-3 pr-1">
            {videoFeed.map((item) => (
              <VideoCard
                key={item.id}
                title={item.title}
                subcategory={item.subcategory}
                coinReward={item.coinReward}
                onWatchTry={() => {}}
              />
            ))}
          </div>
        </div>

        {/* Continue Learning Section (Optional) */}
        <div>
          <h3 className="text-md font-semibold text-white mb-2">Continue Learning (optional)</h3>
          <div className="overflow-x-auto">
            <div className="flex space-x-4 pb-2">
              {continueModules.map((mod) => (
                <div key={mod.id} className="flex-shrink-0 w-36 p-4 rounded-xl bg-black border-2 border-gray-800 shadow-md flex flex-col items-center hover:border-yellow-400 transition-all cursor-pointer">
                  <div className="text-2xl mb-2">{mod.emoji}</div>
                  <h4 className="font-semibold text-white text-sm mb-1">{mod.title}</h4>
                  <span className="text-xs text-yellow-400 mb-2">{mod.status}</span>
                  <button className="w-full bg-white text-black text-xs py-1.5 rounded-lg font-bold hover:bg-yellow-400 hover:text-black transition-colors">Go</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 