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
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={handleCancel} />
      <div className="relative bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md mx-4 transform transition-all">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Timer Settings</h2>
        
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Focus Duration (minutes)
            </label>
            <input
              type="number"
              min="1"
              max="120"
              value={localDurations.focus}
              onChange={(e) => setLocalDurations({ ...localDurations, focus: Math.max(1, parseInt(e.target.value) || 1) })}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Short Break Duration (minutes)
            </label>
            <input
              type="number"
              min="1"
              max="30"
              value={localDurations.shortBreak}
              onChange={(e) => setLocalDurations({ ...localDurations, shortBreak: Math.max(1, parseInt(e.target.value) || 1) })}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Long Break Duration (minutes)
            </label>
            <input
              type="number"
              min="1"
              max="60"
              value={localDurations.longBreak}
              onChange={(e) => setLocalDurations({ ...localDurations, longBreak: Math.max(1, parseInt(e.target.value) || 1) })}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
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
