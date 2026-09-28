import React from 'react';

type Mode = 'focus' | 'shortBreak' | 'longBreak';

interface ModeSelectorProps {
  mode: Mode;
  onModeChange: (mode: Mode) => void;
}

const modes: { key: Mode; label: string }[] = [
  { key: 'focus', label: 'Focus' },
  { key: 'shortBreak', label: 'Short Break' },
  { key: 'longBreak', label: 'Long Break' },
];

const modeStyles: Record<Mode, { active: string; hover: string }> = {
  focus: { active: 'bg-red-500 text-white shadow-lg shadow-red-200', hover: 'hover:bg-red-50 text-red-600' },
  shortBreak: { active: 'bg-emerald-500 text-white shadow-lg shadow-emerald-200', hover: 'hover:bg-emerald-50 text-emerald-600' },
  longBreak: { active: 'bg-blue-500 text-white shadow-lg shadow-blue-200', hover: 'hover:bg-blue-50 text-blue-600' },
};

export const ModeSelector: React.FC<ModeSelectorProps> = ({ mode, onModeChange }) => {
  return (
    <div className="flex gap-2 p-1 bg-gray-100 rounded-xl">
      {modes.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => onModeChange(key)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            mode === key ? modeStyles[key].active : `${modeStyles[key].hover} text-gray-500`
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};
