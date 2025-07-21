'use client';

import React from 'react';

interface VideoCardProps {
  title: string;
  subcategory: string;
  coinReward: number;
  onWatchTry?: () => void;
  duration?: string;
  icon?: React.ReactNode;
  thumbnail?: React.ReactNode;
  buttonClassName?: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ title, subcategory, coinReward, onWatchTry, duration, icon, thumbnail, buttonClassName }) => {
  return (
    <div className="flex items-center bg-black border-2 border-gray-700 rounded-xl shadow-md p-4 hover:border-yellow-400 transition-colors w-full max-w-2xl mx-auto hover:scale-[1.01] transition-transform">
      {/* Thumbnail */}
      <div className="mr-4 flex flex-col items-center">
        {thumbnail ? (
          thumbnail
        ) : (
          <div className="w-16 h-16 bg-neutral-800 rounded-lg flex items-center justify-center text-gray-500 text-2xl">🎬</div>
        )}
        {duration && <div className="text-xs text-gray-400 mt-2 flex items-center"><span className="mr-1">⏱</span>{duration}</div>}
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div className="flex items-center mb-1">
          {icon && <span className="mr-2">{icon}</span>}
          <h3 className="text-lg font-bold text-white">{title}</h3>
        </div>
        <p className="text-sm text-yellow-400 mb-2">{subcategory}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-yellow-400 font-semibold">+{coinReward} OnCoins</span>
          <button
            className={`ml-4 px-4 py-2 bg-yellow-400 text-black font-bold rounded-lg shadow hover:bg-yellow-300 transition-colors ${buttonClassName || ''}`}
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