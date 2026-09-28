import { useState, useCallback } from 'react';
import { TimerDisplay } from './components/TimerDisplay';
import { ModeSelector } from './components/ModeSelector';
import { Controls } from './components/Controls';
import { Settings } from './components/Settings';
import { Statistics } from './components/Statistics';
import { BackgroundControls } from './components/BackgroundControls';
import { useTimer } from './hooks/useTimer';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useBackgroundRotation } from './hooks/useBackgroundRotation';
import { BackgroundTheme } from './data/backgrounds';

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

interface BackgroundSettings {
  intervalMinutes: number;
  selectedCategories: string[];
  enabled: boolean;
}

const DEFAULT_DURATIONS: Durations = {
  focus: 25,
  shortBreak: 5,
  longBreak: 15,
};

const DEFAULT_BG_SETTINGS: BackgroundSettings = {
  intervalMinutes: 5,
  selectedCategories: [],
  enabled: true,
};

function App() {
  const [mode, setMode] = useState<Mode>('focus');
  const [durations, setDurations] = useLocalStorage<Durations>('pomodoro-durations', DEFAULT_DURATIONS);
  const [sessions, setSessions] = useLocalStorage<FocusSession[]>('pomodoro-sessions', []);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [bgSettingsOpen, setBgSettingsOpen] = useState(false);
  const [focusCount, setFocusCount] = useLocalStorage<number>('pomodoro-focus-count', 0);
  const [bgSettings, setBgSettings] = useLocalStorage<BackgroundSettings>('pomodoro-bg-settings', DEFAULT_BG_SETTINGS);

  const currentDuration = durations[mode] * 60;

  const {
    currentImage,
    currentCategory,
    currentCategoryIndex,
    currentImageIndex,
    theme,
    isTransitioning,
    filteredCategories,
    goToNext,
    goToPrevious,
    setSpecificImage,
  } = useBackgroundRotation({
    intervalMinutes: bgSettings.intervalMinutes,
    selectedCategories: bgSettings.selectedCategories,
    enabled: bgSettings.enabled,
  });

  const handleTimerComplete = useCallback(() => {
    // Play notification sound
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      oscillator.frequency.value = 800;
      oscillator.type = 'sine';
      gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.5);
      oscillator.start(audioCtx.currentTime);
      oscillator.stop(audioCtx.currentTime + 0.5);
    } catch {}

    // Browser notification
    if ('Notification' in window && Notification.permission === 'granted') {
      const title = mode === 'focus' ? 'Focus session complete!' : 'Break is over!';
      const body = mode === 'focus' ? 'Time for a break. Great work!' : 'Ready to focus again?';
      new Notification(title, { body });
    }

    if (mode === 'focus') {
      const today = new Date().toISOString().split('T')[0];
      const newSession: FocusSession = {
        date: today,
        duration: durations.focus * 60,
        completedAt: new Date().toISOString(),
      };
      setSessions((prev) => [...prev, newSession]);
      setFocusCount((prev) => prev + 1);
      const newCount = focusCount + 1;
      if (newCount % 4 === 0) {
        setMode('longBreak');
      } else {
        setMode('shortBreak');
      }
    } else {
      setMode('focus');
    }
  }, [mode, durations.focus, setSessions, setFocusCount, focusCount]);

  // Request notification permission on first interaction
  const requestNotificationPermission = useCallback(() => {
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission();
    }
  }, []);

  const { timeLeft, status, progress, start: timerStart, pause, reset } = useTimer({
    duration: currentDuration,
    onComplete: handleTimerComplete,
  });

  const start = useCallback(() => {
    requestNotificationPermission();
    timerStart();
  }, [requestNotificationPermission, timerStart]);

  const handleModeChange = (newMode: Mode) => {
    setMode(newMode);
  };

  const handleDurationsChange = (newDurations: Durations) => {
    setDurations(newDurations);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 transition-opacity duration-700 ease-in-out"
        style={{ opacity: isTransitioning ? 0 : 1 }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${currentImage.url})` }}
        />
        <div
          className="absolute inset-0 transition-colors duration-700"
          style={{ backgroundColor: theme.overlay }}
        />
        <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8">
        {/* Header */}
        <div className="w-full max-w-md mx-auto mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white drop-shadow-lg">Pomodoro</h1>
            <p className="text-sm text-white/70 drop-shadow">Stay focused, stay productive</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setBgSettingsOpen(true)}
              className="p-3 rounded-xl bg-white/20 backdrop-blur-md border border-white/20 text-white hover:bg-white/30 transition-all shadow-lg"
              aria-label="Background settings"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="9" cy="9" r="2" />
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
              </svg>
            </button>
            <button
              onClick={() => setSettingsOpen(true)}
              className="p-3 rounded-xl bg-white/20 backdrop-blur-md border border-white/20 text-white hover:bg-white/30 transition-all shadow-lg"
              aria-label="Settings"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mode Selector */}
        <div className="mb-8">
          <ModeSelector mode={mode} onModeChange={handleModeChange} theme={theme} />
        </div>

        {/* Timer Display */}
        <div className="mb-8">
          <TimerDisplay timeLeft={timeLeft} progress={progress} mode={mode} theme={theme} />
        </div>

        {/* Controls */}
        <div className="mb-8">
          <Controls status={status} onStart={start} onPause={pause} onReset={reset} theme={theme} />
        </div>

        {/* Background Controls */}
        <BackgroundControls
          theme={theme}
          currentCategory={currentCategory}
          currentCategoryIndex={currentCategoryIndex}
          currentImageIndex={currentImageIndex}
          totalImages={currentCategory.images.length}
          totalCategories={filteredCategories.length}
          onNext={goToNext}
          onPrevious={goToPrevious}
          onSelectImage={setSpecificImage}
          intervalMinutes={bgSettings.intervalMinutes}
          enabled={bgSettings.enabled}
        />

        {/* Statistics */}
        <div className="mt-6">
          <Statistics sessions={sessions} theme={theme} />
        </div>

        {/* Session dots indicator */}
        <div className="mt-6 flex items-center gap-2">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i < (focusCount % 4)
                  ? 'scale-100'
                  : 'bg-white/30 scale-90'
              }`}
              style={{
                backgroundColor: i < (focusCount % 4) ? theme.accent : undefined,
              }}
            />
          ))}
          <span className="text-xs text-white/60 ml-2 drop-shadow">
            {focusCount % 4}/4 until long break
          </span>
        </div>
      </div>

      {/* Settings Modal */}
      <Settings
        durations={durations}
        onDurationsChange={handleDurationsChange}
        isOpen={settingsOpen}
        onClose={() => setSettingsOpen(false)}
      />

      {/* Background Settings Modal */}
      <BackgroundSettingsModal
        settings={bgSettings}
        onSettingsChange={setBgSettings}
        isOpen={bgSettingsOpen}
        onClose={() => setBgSettingsOpen(false)}
        filteredCategories={filteredCategories}
        currentCategoryIndex={currentCategoryIndex}
        currentImageIndex={currentImageIndex}
        onSelectImage={setSpecificImage}
      />
    </div>
  );
}

// Background Settings Modal Component
interface BackgroundSettingsModalProps {
  settings: BackgroundSettings;
  onSettingsChange: (settings: BackgroundSettings) => void;
  isOpen: boolean;
  onClose: () => void;
  filteredCategories: { id: string; label: string; emoji: string; images: { url: string }[] }[];
  currentCategoryIndex: number;
  currentImageIndex: number;
  onSelectImage: (catIdx: number, imgIdx: number) => void;
}

function BackgroundSettingsModal({
  settings,
  onSettingsChange,
  isOpen,
  onClose,
  filteredCategories,
  currentCategoryIndex,
  currentImageIndex,
  onSelectImage,
}: BackgroundSettingsModalProps) {
  const [localSettings, setLocalSettings] = useState(settings);
  const [allCategories, setAllCategories] = useState<string[]>(settings.selectedCategories);

  const handleSave = () => {
    onSettingsChange(localSettings);
    onClose();
  };

  const handleCancel = () => {
    setLocalSettings(settings);
    onClose();
  };

  const toggleCategory = (id: string) => {
    setAllCategories(prev =>
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    );
    setLocalSettings(prev => ({
      ...prev,
      selectedCategories: prev.selectedCategories.includes(id)
        ? prev.selectedCategories.filter(c => c !== id)
        : [...prev.selectedCategories, id],
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={handleCancel} />
      <div className="relative bg-white rounded-2xl shadow-2xl p-6 w-full max-w-lg mx-4 max-h-[85vh] overflow-y-auto">
        <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
          </svg>
          Background Settings
        </h2>

        {/* Auto-rotation toggle */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-medium text-gray-700">Auto-rotate backgrounds</label>
            <button
              onClick={() => setLocalSettings(prev => ({ ...prev, enabled: !prev.enabled }))}
              className={`relative w-12 h-6 rounded-full transition-colors duration-200 ${
                localSettings.enabled ? 'bg-indigo-500' : 'bg-gray-300'
              }`}
            >
              <div
                className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${
                  localSettings.enabled ? 'translate-x-6' : 'translate-x-0.5'
                }`}
              />
            </button>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Change every (minutes)
            </label>
            <input
              type="number"
              min="1"
              max="60"
              value={localSettings.intervalMinutes}
              onChange={(e) => setLocalSettings({ ...localSettings, intervalMinutes: Math.max(1, parseInt(e.target.value) || 5) })}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Category selection */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-3">Background Categories</label>
          <div className="grid grid-cols-2 gap-2">
            {[
              { id: 'nature', label: 'Nature', emoji: '🌿' },
              { id: 'cityscape', label: 'Cityscape', emoji: '🏙️' },
              { id: 'clouds', label: 'Clouds', emoji: '☁️' },
              { id: 'ocean', label: 'Ocean', emoji: '🌊' },
              { id: 'mountains', label: 'Mountains', emoji: '🏔️' },
              { id: 'forest', label: 'Forest', emoji: '🌲' },
              { id: 'sunset', label: 'Sunset', emoji: '🌅' },
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => toggleCategory(cat.id)}
                className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-medium transition-all border ${
                  allCategories.includes(cat.id)
                    ? 'bg-indigo-50 border-indigo-300 text-indigo-700'
                    : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'
                }`}
              >
                <span>{cat.emoji}</span>
                <span>{cat.label}</span>
                {allCategories.includes(cat.id) && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="ml-auto">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                )}
              </button>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-2">Leave all unchecked to use all categories</p>
        </div>

        {/* Current background preview */}
        <div className="mb-4 pt-4 border-t border-gray-100">
          <label className="block text-sm font-medium text-gray-700 mb-3">Current Background</label>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-sm text-gray-500">
              {filteredCategories[currentCategoryIndex]?.label} • Image {currentImageIndex + 1} of {filteredCategories[currentCategoryIndex]?.images.length}
            </span>
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <button
            onClick={handleCancel}
            className="flex-1 px-4 py-3 bg-gray-100 text-gray-600 rounded-xl font-medium hover:bg-gray-200 transition-all"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="flex-1 px-4 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-all"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
