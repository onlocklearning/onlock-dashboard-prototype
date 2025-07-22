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
    <div className="flex items-center bg-black border-2 border-gray-700 rounded-xl shadow-md p-4 hover:border-yellow-400 hover:ring hover:ring-yellow-500/20 transition cursor-pointer w-full max-w-2xl mx-auto hover:scale-[1.005] transition-transform" onClick={onWatchTry}>
      {/* Thumbnail */}
      <div className="mr-4 flex flex-col items-center">
        {thumbnail ? (
          React.cloneElement(thumbnail as React.ReactElement, {
            className: `${(thumbnail as React.ReactElement).props.className || ''} shadow-md transition-transform hover:scale-105 rounded-lg overflow-hidden`,
          })
        ) : (
          <div className="w-24 aspect-[3/4] bg-gradient-to-br from-neutral-800 to-neutral-700 rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
            <div className="w-full h-full flex items-center justify-center text-gray-400 text-2xl">🎥</div>
          </div>
        )}
        {duration && <div className="text-xs text-gray-400 mt-2 flex items-center"><span className="mr-1">⏱</span>{duration}</div>}
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div className="flex items-center mb-1">
          {icon && <span className="mr-2">{icon}</span>}
          <h3 className="text-lg font-bold text-white">{title}</h3>
        </div>
        <p className="text-sm text-yellow-400 mb-2">{subcategory}</p>
        <div className="flex items-center justify-end mt-2">
          <button
            className={`ml-4 px-6 py-2 bg-yellow-400 text-black font-bold rounded-full shadow hover:bg-yellow-300 transition-colors ${buttonClassName || ''}`}
            onClick={onWatchTry}
          >
            watch & try
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoCard; 