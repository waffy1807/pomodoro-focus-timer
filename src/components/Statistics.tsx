import React from 'react';

interface FocusSession {
  date: string; // YYYY-MM-DD
  duration: number; // in seconds
  completedAt: string; // ISO string
}

interface StatisticsProps {
  sessions: FocusSession[];
}

function getTodayKey(): string {
  return new Date().toISOString().split('T')[0];
}

export const Statistics: React.FC<StatisticsProps> = ({ sessions }) => {
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
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 shadow-sm">
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
          Today's Focus
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3 bg-gray-50 rounded-xl">
            <div className="text-2xl font-bold text-gray-800">{formatTime()}</div>
            <div className="text-xs text-gray-400 mt-1">Total Focus</div>
          </div>
          <div className="text-center p-3 bg-gray-50 rounded-xl">
            <div className="text-2xl font-bold text-gray-800">{sessionsCompleted}</div>
            <div className="text-xs text-gray-400 mt-1">Sessions</div>
          </div>
        </div>
        
        {todaySessions.length > 0 && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Last session</span>
              <span className="text-gray-700 font-medium">
                {Math.round(todaySessions[todaySessions.length - 1].duration / 60)} min
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
