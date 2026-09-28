import React from 'react';
import { BackgroundTheme } from '../data/backgrounds';

interface FocusSession {
  date: string;
  duration: number;
  completedAt: string;
}

interface StatisticsProps {
  sessions: FocusSession[];
  theme: BackgroundTheme;
}

function getTodayKey(): string {
  return new Date().toISOString().split('T')[0];
}

export const Statistics: React.FC<StatisticsProps> = ({ sessions, theme }) => {
  const todayKey = getTodayKey();
  
  const todaySessions = sessions.filter(s => s.date === todayKey);
  const totalFocusSeconds = todaySessions.reduce((sum, s) => sum + s.duration, 0);
  const totalFocusMinutes = Math.floor(totalFocusSeconds / 60);
  const totalFocusHours = Math.floor(totalFocusMinutes / 60);
  const remainingMinutes = totalFocusMinutes % 60;
  const sessionsCompleted = todaySessions.length;

  const formatTime = () => {
    if (totalFocusHours > 0) {
      return `${totalFocusHours}h ${remainingMinutes}m`;
    }
    return `${totalFocusMinutes}m`;
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white/15 backdrop-blur-md rounded-2xl p-5 border border-white/20 shadow-lg">
        <h3 className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-4">
          Today's Focus
        </h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="text-center p-3 bg-white/10 rounded-xl">
            <div className="text-2xl font-bold text-white drop-shadow">{formatTime()}</div>
            <div className="text-xs text-white/50 mt-1">Total Focus</div>
          </div>
          <div className="text-center p-3 bg-white/10 rounded-xl">
            <div className="text-2xl font-bold text-white drop-shadow">{sessionsCompleted}</div>
            <div className="text-xs text-white/50 mt-1">Sessions</div>
          </div>
        </div>
        
        {todaySessions.length > 0 && (
          <div className="mt-4 pt-3 border-t border-white/10">
            <div className="flex items-center justify-between text-sm">
              <span className="text-white/50">Last session</span>
              <span className="text-white font-medium">
                {Math.round(todaySessions[todaySessions.length - 1].duration / 60)} min
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
