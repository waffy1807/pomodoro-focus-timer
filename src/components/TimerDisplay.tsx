import React from 'react';
import { BackgroundTheme } from '../data/backgrounds';

type Mode = 'focus' | 'shortBreak' | 'longBreak';

interface TimerDisplayProps {
  timeLeft: number;
  progress: number;
  mode: Mode;
  theme: BackgroundTheme;
}

const modeLabels: Record<Mode, string> = {
  focus: 'Focus Time',
  shortBreak: 'Short Break',
  longBreak: 'Long Break',
};

export const TimerDisplay: React.FC<TimerDisplayProps> = ({ timeLeft, progress, mode, theme }) => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const radius = 140;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - progress);

  return (
    <div className="relative flex items-center justify-center">
      {/* Glow effect behind the timer */}
      <div
        className="absolute w-72 h-72 rounded-full blur-3xl opacity-20 transition-colors duration-700"
        style={{ backgroundColor: theme.timerRing }}
      />
      
      <svg width="320" height="320" className="transform -rotate-90 drop-shadow-2xl relative">
        {/* Background circle */}
        <circle
          cx="160"
          cy="160"
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="8"
        />
        {/* Progress circle */}
        <circle
          cx="160"
          cy="160"
          r={radius}
          fill="none"
          stroke={theme.timerRing}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          style={{ transition: 'stroke-dashoffset 1s linear, stroke 0.7s ease' }}
          filter="drop-shadow(0 0 6px rgba(0,0,0,0.2))"
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span
          className="text-6xl font-bold tracking-tight tabular-nums text-white"
          style={{ textShadow: '0 2px 20px rgba(0,0,0,0.3), 0 0 40px rgba(0,0,0,0.1)' }}
        >
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </span>
        <span
          className="text-sm mt-2 uppercase tracking-wider font-medium"
          style={{ color: theme.accent, textShadow: '0 1px 8px rgba(0,0,0,0.3)' }}
        >
          {modeLabels[mode]}
        </span>
      </div>
    </div>
  );
};
