import React from 'react';
import { TimerStatus } from '../hooks/useTimer';

interface ControlsProps {
  status: TimerStatus;
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
}

export const Controls: React.FC<ControlsProps> = ({ status, onStart, onPause, onReset }) => {
  return (
    <div className="flex items-center gap-4">
      {status === 'running' ? (
        <button
          onClick={onPause}
          className="flex items-center gap-2 px-8 py-3 bg-gray-800 text-white rounded-xl font-medium hover:bg-gray-700 transition-all duration-200 shadow-lg shadow-gray-300 active:scale-95"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <rect x="6" y="4" width="4" height="16" rx="1" />
            <rect x="14" y="4" width="4" height="16" rx="1" />
          </svg>
          Pause
        </button>
      ) : (
        <button
          onClick={onStart}
          className="flex items-center gap-2 px-8 py-3 bg-gray-800 text-white rounded-xl font-medium hover:bg-gray-700 transition-all duration-200 shadow-lg shadow-gray-300 active:scale-95"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
          {status === 'paused' ? 'Resume' : 'Start'}
        </button>
      )}
      <button
        onClick={onReset}
        className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-600 rounded-xl font-medium hover:bg-gray-200 transition-all duration-200 active:scale-95"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 12a9 9 0 1 1 9 9 9.75 9.75 0 0 1-6.74-2.74L3 21" />
          <path d="M3 3v7h7" />
        </svg>
        Reset
      </button>
    </div>
  );
};
