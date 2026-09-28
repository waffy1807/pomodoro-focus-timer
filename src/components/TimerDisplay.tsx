import React from 'react';

type Mode = 'focus' | 'shortBreak' | 'longBreak';

interface TimerDisplayProps {
  timeLeft: number;
  progress: number;
  mode: Mode;
}

const modeColors: Record<Mode, { ring: string; bg: string; text: string }> = {
  focus: { ring: '#ef4444', bg: 'bg-red-50', text: 'text-red-600' },
  shortBreak: { ring: '#10b981', bg: 'bg-emerald-50', text: 'text-emerald-600' },
  longBreak: { ring: '#3b82f6', bg: 'bg-blue-50', text: 'text-blue-600' },
};

export const TimerDisplay: React.FC<TimerDisplayProps> = ({ timeLeft, progress, mode }) => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const colors = modeColors[mode];

  const radius = 140;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - progress);

  return (
    <div className="relative flex items-center justify-center">
      <svg width="320" height="320" className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx="160"
          cy="160"
          r={radius}
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="8"
        />
        {/* Progress circle */}
        <circle
          cx="160"
          cy="160"
          r={radius}
          fill="none"
          stroke={colors.ring}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-1000 ease-linear"
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className={`text-6xl font-bold tracking-tight ${colors.text} tabular-nums`}>
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </span>
        <span className="text-sm text-gray-400 mt-2 uppercase tracking-wider">
          {mode === 'focus' ? 'Focus Time' : mode === 'shortBreak' ? 'Short Break' : 'Long Break'}
        </span>
      </div>
    </div>
  );
};
