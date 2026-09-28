import { useState, useCallback } from 'react';
import { TimerDisplay } from './components/TimerDisplay';
import { ModeSelector } from './components/ModeSelector';
import { Controls } from './components/Controls';
import { Settings } from './components/Settings';
import { Statistics } from './components/Statistics';
import { useTimer } from './hooks/useTimer';
import { useLocalStorage } from './hooks/useLocalStorage';

type Mode = 'focus' | 'shortBreak' | 'longBreak';

interface Durations {
  focus: number;
  shortBreak: number;
  longBreak: number;
}

interface FocusSession {
  date: string;
  duration: number;
  completedAt: string;
}

const DEFAULT_DURATIONS: Durations = {
  focus: 25,
  shortBreak: 5,
  longBreak: 15,
};

function App() {
  const [mode, setMode] = useState<Mode>('focus');
  const [durations, setDurations] = useLocalStorage<Durations>('pomodoro-durations', DEFAULT_DURATIONS);
  const [sessions, setSessions] = useLocalStorage<FocusSession[]>('pomodoro-sessions', []);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [focusCount, setFocusCount] = useLocalStorage<number>('pomodoro-focus-count', 0);

  const currentDuration = durations[mode] * 60; // convert to seconds

  const handleTimerComplete = useCallback(() => {
    if (mode === 'focus') {
      const today = new Date().toISOString().split('T')[0];
      const newSession: FocusSession = {
        date: today,
        duration: durations.focus * 60,
        completedAt: new Date().toISOString(),
      };
      setSessions((prev) => [...prev, newSession]);
      setFocusCount((prev) => prev + 1);
      
      // Auto-switch to break after focus
      const newCount = focusCount + 1;
      if (newCount % 4 === 0) {
        setMode('longBreak');
      } else {
        setMode('shortBreak');
      }
    } else {
      // After break, switch back to focus
      setMode('focus');
    }
  }, [mode, durations.focus, setSessions, setFocusCount, focusCount]);

  const { timeLeft, status, progress, start, pause, reset } = useTimer({
    duration: currentDuration,
    onComplete: handleTimerComplete,
  });

  const handleModeChange = (newMode: Mode) => {
    setMode(newMode);
  };

  const handleDurationsChange = (newDurations: Durations) => {
    setDurations(newDurations);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex flex-col items-center justify-center px-4 py-8">
      {/* Header */}
      <div className="w-full max-w-md mx-auto mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Pomodoro</h1>
          <p className="text-sm text-gray-400">Stay focused, stay productive</p>
        </div>
        <button
          onClick={() => setSettingsOpen(true)}
          className="p-3 rounded-xl bg-white border border-gray-200 text-gray-500 hover:text-gray-700 hover:border-gray-300 transition-all shadow-sm"
          aria-label="Settings"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
        </button>
      </div>

      {/* Mode Selector */}
      <div className="mb-8">
        <ModeSelector mode={mode} onModeChange={handleModeChange} />
      </div>

      {/* Timer Display */}
      <div className="mb-8">
        <TimerDisplay timeLeft={timeLeft} progress={progress} mode={mode} />
      </div>

      {/* Controls */}
      <div className="mb-10">
        <Controls status={status} onStart={start} onPause={pause} onReset={reset} />
      </div>

      {/* Statistics */}
      <Statistics sessions={sessions} />

      {/* Settings Modal */}
      <Settings
        durations={durations}
        onDurationsChange={handleDurationsChange}
        isOpen={settingsOpen}
        onClose={() => setSettingsOpen(false)}
      />

      {/* Session dots indicator */}
      <div className="mt-6 flex items-center gap-2">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i < (focusCount % 4)
                ? 'bg-red-400 scale-100'
                : 'bg-gray-200 scale-90'
            }`}
          />
        ))}
        <span className="text-xs text-gray-400 ml-2">
          {focusCount % 4}/4 until long break
        </span>
      </div>
    </div>
  );
}

export default App;
