import React from 'react';

interface TopicFilterBarProps {
  topics: string[];
  selectedTopic: string;
  onSelectTopic: (topic: string) => void;
}

const TopicFilterBar: React.FC<TopicFilterBarProps> = ({ topics, selectedTopic, onSelectTopic }) => {
  return (
    <div className="w-full overflow-x-auto pb-2 mb-4">
      <div className="flex space-x-3 min-w-max">
        {topics.map((topic) => (
          <button
            key={topic}
            className={`px-4 py-2 rounded-full font-bold whitespace-nowrap border-2 transition-colors shadow
              ${selectedTopic === topic
                ? 'bg-yellow-400 text-black border-yellow-400'
                : 'bg-gray-800 text-white border-gray-700 hover:bg-yellow-400 hover:text-black hover:border-yellow-400'}
            `}
            onClick={() => onSelectTopic(topic)}
          >
            {topic}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TopicFilterBar; 