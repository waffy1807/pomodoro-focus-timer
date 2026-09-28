import React, { useState } from 'react';

interface Durations {
  focus: number;
  shortBreak: number;
  longBreak: number;
}

interface SettingsProps {
  durations: Durations;
  onDurationsChange: (durations: Durations) => void;
  isOpen: boolean;
  onClose: () => void;
}

export const Settings: React.FC<SettingsProps> = ({ durations, onDurationsChange, isOpen, onClose }) => {
  const [localDurations, setLocalDurations] = useState(durations);

  const handleSave = () => {
    onDurationsChange(localDurations);
    onClose();
  };

  const handleCancel = () => {
    setLocalDurations(durations);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={handleCancel} />
      <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-8 w-full max-w-md mx-4 transform transition-all border border-white/20">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800">Timer Settings</h2>
            <p className="text-sm text-gray-400">Customize your focus sessions</p>
          </div>
        </div>
        
        <div className="space-y-5">
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-600 mb-2">
              <span className="w-2 h-2 rounded-full bg-red-400"></span>
              Focus Duration (minutes)
            </label>
            <input
              type="number"
              min="1"
              max="120"
              value={localDurations.focus}
              onChange={(e) => setLocalDurations({ ...localDurations, focus: Math.max(1, parseInt(e.target.value) || 1) })}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400/50 focus:border-red-300 transition-all bg-gray-50/50"
            />
          </div>
          
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-600 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Short Break Duration (minutes)
            </label>
            <input
              type="number"
              min="1"
              max="30"
              value={localDurations.shortBreak}
              onChange={(e) => setLocalDurations({ ...localDurations, shortBreak: Math.max(1, parseInt(e.target.value) || 1) })}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-300 transition-all bg-gray-50/50"
            />
          </div>
          
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-600 mb-2">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              Long Break Duration (minutes)
            </label>
            <input
              type="number"
              min="1"
              max="60"
              value={localDurations.longBreak}
              onChange={(e) => setLocalDurations({ ...localDurations, longBreak: Math.max(1, parseInt(e.target.value) || 1) })}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-300 transition-all bg-gray-50/50"
            />
          </div>
        </div>

        <div className="flex gap-3 mt-8">
          <button
            onClick={handleCancel}
            className="flex-1 px-4 py-3 bg-gray-100 text-gray-600 rounded-xl font-medium hover:bg-gray-200 transition-all"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="flex-1 px-4 py-3 bg-gray-800 text-white rounded-xl font-medium hover:bg-gray-700 transition-all"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
