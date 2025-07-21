'use client';

import React from 'react';

interface VideoCardProps {
  title: string;
  subcategory: string;
  coinReward: number;
  onWatchTry?: () => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ title, subcategory, coinReward, onWatchTry }) => {
  return (
    <div className="flex items-center bg-black border-2 border-gray-700 rounded-xl shadow-md p-4 mb-4 hover:border-yellow-400 transition-colors w-full max-w-2xl mx-auto">
      {/* Video preview placeholder */}
      <div className="w-24 h-32 bg-neutral-900 rounded-lg flex items-center justify-center mr-4">
        <span className="text-gray-500">Video</span>
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
          <p className="text-sm text-yellow-400 mb-2">{subcategory}</p>
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="text-yellow-400 font-semibold">+{coinReward} OnCoins</span>
          <button
            className="ml-4 px-4 py-2 bg-yellow-400 text-black font-bold rounded-lg shadow hover:bg-yellow-300 transition-colors"
            onClick={onWatchTry}
          >
            Watch & Try
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoCard; 