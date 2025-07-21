import React from 'react';

interface FilterBarProps {
  options: string[];
  selected: string | null;
  onSelect: (option: string) => void;
  label?: string;
}

const FilterBar: React.FC<FilterBarProps> = ({ options, selected, onSelect, label }) => (
  <div className="w-full overflow-x-auto pb-2 mb-2 fade-in">
    {label && <div className="text-gray-300 text-sm mb-1 pl-1">{label}</div>}
    <div className="flex space-x-2 min-w-max">
      {options.map(option => (
        <button
          key={option}
          className={`px-4 py-2 rounded-full font-bold whitespace-nowrap border-2 transition-all shadow
            ${selected === option
              ? 'bg-yellow-400 text-black border-yellow-400'
              : 'bg-gray-800 text-white border-gray-700 hover:bg-yellow-400 hover:text-black hover:border-yellow-400'}
          `}
          onClick={() => onSelect(option)}
        >
          {option}
        </button>
      ))}
    </div>
  </div>
);

export default FilterBar; 