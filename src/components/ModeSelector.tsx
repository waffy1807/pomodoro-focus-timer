import React from 'react';
import { BackgroundTheme } from '../data/backgrounds';

type Mode = 'focus' | 'shortBreak' | 'longBreak';

interface ModeSelectorProps {
  mode: Mode;
  onModeChange: (mode: Mode) => void;
  theme: BackgroundTheme;
}

const modes: { key: Mode; label: string }[] = [
  { key: 'focus', label: 'Focus' },
  { key: 'shortBreak', label: 'Short Break' },
  { key: 'longBreak', label: 'Long Break' },
];

export const ModeSelector: React.FC<ModeSelectorProps> = ({ mode, onModeChange, theme }) => {
  return (
    <div className="flex gap-1 p-1.5 bg-white/15 backdrop-blur-md rounded-xl border border-white/20 shadow-lg">
      {modes.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => onModeChange(key)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            mode === key
              ? 'text-white shadow-md'
              : 'text-white/70 hover:text-white hover:bg-white/10'
          }`}
          style={{
            backgroundColor: mode === key ? theme.modeActive : 'transparent',
            color: mode === key ? theme.modeActiveText : undefined,
          }}
        >
          {label}
        </button>
      ))}
    </div>
  );
};
