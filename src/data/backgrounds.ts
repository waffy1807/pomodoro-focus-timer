export interface BackgroundTheme {
  timerRing: string;
  timerText: string;
  accent: string;
  accentLight: string;
  buttonBg: string;
  buttonText: string;
  secondaryBg: string;
  secondaryText: string;
  modeActive: string;
  modeActiveText: string;
  overlay: string;
}

export interface BackgroundImage {
  url: string;
  theme: BackgroundTheme;
}

export interface BackgroundCategory {
  id: string;
  label: string;
  emoji: string;
  images: BackgroundImage[];
}

// Using picsum.photos for reliable image loading
const P = (seed: string) => `https://picsum.photos/seed/${seed}/1920/1080`;

export const backgroundCategories: BackgroundCategory[] = [
  {
    id: 'nature',
    label: 'Nature',
    emoji: '🌿',
    images: [
      { url: P('nature-meadow-1'), theme: { timerRing: '#22c55e', timerText: '#166534', accent: '#4ade80', accentLight: '#dcfce7', buttonBg: '#166534', buttonText: '#fff', secondaryBg: '#f0fdf4', secondaryText: '#166534', modeActive: '#22c55e', modeActiveText: '#fff', overlay: 'rgba(0,40,0,0.25)' } },
      { url: P('nature-forest-2'), theme: { timerRing: '#84cc16', timerText: '#3f6212', accent: '#a3e635', accentLight: '#ecfccb', buttonBg: '#3f6212', buttonText: '#fff', secondaryBg: '#f7fee7', secondaryText: '#3f6212', modeActive: '#84cc16', modeActiveText: '#fff', overlay: 'rgba(20,40,0,0.2)' } },
      { url: P('nature-valley-3'), theme: { timerRing: '#16a34a', timerText: '#14532d', accent: '#4ade80', accentLight: '#dcfce7', buttonBg: '#14532d', buttonText: '#fff', secondaryBg: '#f0fdf4', secondaryText: '#14532d', modeActive: '#16a34a', modeActiveText: '#fff', overlay: 'rgba(0,30,0,0.3)' } },
      { url: P('nature-river-4'), theme: { timerRing: '#10b981', timerText: '#064e3b', accent: '#34d399', accentLight: '#d1fae5', buttonBg: '#064e3b', buttonText: '#fff', secondaryBg: '#ecfdf5', secondaryText: '#064e3b', modeActive: '#10b981', modeActiveText: '#fff', overlay: 'rgba(0,30,15,0.25)' } },
      { url: P('nature-lake-5'), theme: { timerRing: '#059669', timerText: '#064e3b', accent: '#6ee7b7', accentLight: '#d1fae5', buttonBg: '#064e3b', buttonText: '#fff', secondaryBg: '#ecfdf5', secondaryText: '#064e3b', modeActive: '#059669', modeActiveText: '#fff', overlay: 'rgba(0,35,15,0.25)' } },
      { url: P('nature-hills-6'), theme: { timerRing: '#34d399', timerText: '#065f46', accent: '#6ee7b7', accentLight: '#d1fae5', buttonBg: '#065f46', buttonText: '#fff', secondaryBg: '#ecfdf5', secondaryText: '#065f46', modeActive: '#34d399', modeActiveText: '#fff', overlay: 'rgba(0,30,15,0.2)' } },
      { url: P('nature-garden-7'), theme: { timerRing: '#22c55e', timerText: '#14532d', accent: '#86efac', accentLight: '#dcfce7', buttonBg: '#14532d', buttonText: '#fff', secondaryBg: '#f0fdf4', secondaryText: '#14532d', modeActive: '#22c55e', modeActiveText: '#fff', overlay: 'rgba(0,30,0,0.3)' } },
      { url: P('nature-field-8'), theme: { timerRing: '#15803d', timerText: '#14532d', accent: '#4ade80', accentLight: '#bbf7d0', buttonBg: '#14532d', buttonText: '#fff', secondaryBg: '#f0fdf4', secondaryText: '#14532d', modeActive: '#15803d', modeActiveText: '#fff', overlay: 'rgba(0,30,0,0.3)' } },
      { url: P('nature-grass-9'), theme: { timerRing: '#65a30d', timerText: '#365314', accent: '#a3e635', accentLight: '#ecfccb', buttonBg: '#365314', buttonText: '#fff', secondaryBg: '#f7fee7', secondaryText: '#365314', modeActive: '#65a30d', modeActiveText: '#fff', overlay: 'rgba(20,30,0,0.2)' } },
      { url: P('nature-waterfall-10'), theme: { timerRing: '#0d9488', timerText: '#134e4a', accent: '#5eead4', accentLight: '#ccfbf1', buttonBg: '#134e4a', buttonText: '#fff', secondaryBg: '#f0fdfa', secondaryText: '#134e4a', modeActive: '#0d9488', modeActiveText: '#fff', overlay: 'rgba(0,30,25,0.25)' } },
      { url: P('nature-spring-11'), theme: { timerRing: '#059669', timerText: '#064e3b', accent: '#34d399', accentLight: '#d1fae5', buttonBg: '#064e3b', buttonText: '#fff', secondaryBg: '#ecfdf5', secondaryText: '#064e3b', modeActive: '#059669', modeActiveText: '#fff', overlay: 'rgba(0,25,15,0.25)' } },
      { url: P('nature-path-12'), theme: { timerRing: '#047857', timerText: '#022c22', accent: '#6ee7b7', accentLight: '#d1fae5', buttonBg: '#022c22', buttonText: '#fff', secondaryBg: '#ecfdf5', secondaryText: '#022c22', modeActive: '#047857', modeActiveText: '#fff', overlay: 'rgba(0,20,10,0.3)' } },
      { url: P('nature-pond-13'), theme: { timerRing: '#16a34a', timerText: '#14532d', accent: '#86efac', accentLight: '#dcfce7', buttonBg: '#14532d', buttonText: '#fff', secondaryBg: '#f0fdf4', secondaryText: '#14532d', modeActive: '#16a34a', modeActiveText: '#fff', overlay: 'rgba(0,30,0,0.2)' } },
      { url: P('nature-trail-14'), theme: { timerRing: '#15803d', timerText: '#14532d', accent: '#4ade80', accentLight: '#bbf7d0', buttonBg: '#14532d', buttonText: '#fff', secondaryBg: '#f0fdf4', secondaryText: '#14532d', modeActive: '#15803d', modeActiveText: '#fff', overlay: 'rgba(0,25,0,0.3)' } },
    ],
  },
  {
    id: 'cityscape',
    label: 'Cityscape',
    emoji: '🏙️',
    images: [
      { url: P('city-newyork-1'), theme: { timerRing: '#6366f1', timerText: '#312e81', accent: '#818cf8', accentLight: '#e0e7ff', buttonBg: '#312e81', buttonText: '#fff', secondaryBg: '#eef2ff', secondaryText: '#312e81', modeActive: '#6366f1', modeActiveText: '#fff', overlay: 'rgba(10,10,40,0.35)' } },
      { url: P('city-skyline-2'), theme: { timerRing: '#8b5cf6', timerText: '#4c1d95', accent: '#a78bfa', accentLight: '#ede9fe', buttonBg: '#4c1d95', buttonText: '#fff', secondaryBg: '#f5f3ff', secondaryText: '#4c1d95', modeActive: '#8b5cf6', modeActiveText: '#fff', overlay: 'rgba(20,10,40,0.35)' } },
      { url: P('city-downtown-3'), theme: { timerRing: '#f59e0b', timerText: '#78350f', accent: '#fbbf24', accentLight: '#fef3c7', buttonBg: '#78350f', buttonText: '#fff', secondaryBg: '#fffbeb', secondaryText: '#78350f', modeActive: '#f59e0b', modeActiveText: '#fff', overlay: 'rgba(30,20,0,0.3)' } },
      { url: P('city-street-4'), theme: { timerRing: '#64748b', timerText: '#1e293b', accent: '#94a3b8', accentLight: '#f1f5f9', buttonBg: '#1e293b', buttonText: '#fff', secondaryBg: '#f8fafc', secondaryText: '#1e293b', modeActive: '#64748b', modeActiveText: '#fff', overlay: 'rgba(10,15,25,0.35)' } },
      { url: P('city-bridge-5'), theme: { timerRing: '#0ea5e9', timerText: '#0c4a6e', accent: '#38bdf8', accentLight: '#e0f2fe', buttonBg: '#0c4a6e', buttonText: '#fff', secondaryBg: '#f0f9ff', secondaryText: '#0c4a6e', modeActive: '#0ea5e9', modeActiveText: '#fff', overlay: 'rgba(0,15,35,0.3)' } },
      { url: P('city-towers-6'), theme: { timerRing: '#a855f7', timerText: '#581c87', accent: '#c084fc', accentLight: '#f3e8ff', buttonBg: '#581c87', buttonText: '#fff', secondaryBg: '#faf5ff', secondaryText: '#581c87', modeActive: '#a855f7', modeActiveText: '#fff', overlay: 'rgba(25,5,40,0.35)' } },
      { url: P('city-night-7'), theme: { timerRing: '#ec4899', timerText: '#831843', accent: '#f472b6', accentLight: '#fce7f3', buttonBg: '#831843', buttonText: '#fff', secondaryBg: '#fdf2f8', secondaryText: '#831843', modeActive: '#ec4899', modeActiveText: '#fff', overlay: 'rgba(35,5,25,0.3)' } },
      { url: P('city-urban-8'), theme: { timerRing: '#f97316', timerText: '#7c2d12', accent: '#fb923c', accentLight: '#ffedd5', buttonBg: '#7c2d12', buttonText: '#fff', secondaryBg: '#fff7ed', secondaryText: '#7c2d12', modeActive: '#f97316', modeActiveText: '#fff', overlay: 'rgba(35,15,0,0.3)' } },
      { url: P('city-buildings-9'), theme: { timerRing: '#3b82f6', timerText: '#1e3a5f', accent: '#60a5fa', accentLight: '#dbeafe', buttonBg: '#1e3a5f', buttonText: '#fff', secondaryBg: '#eff6ff', secondaryText: '#1e3a5f', modeActive: '#3b82f6', modeActiveText: '#fff', overlay: 'rgba(5,15,40,0.35)' } },
      { url: P('city-aerial-10'), theme: { timerRing: '#14b8a6', timerText: '#134e4a', accent: '#2dd4bf', accentLight: '#ccfbf1', buttonBg: '#134e4a', buttonText: '#fff', secondaryBg: '#f0fdfa', secondaryText: '#134e4a', modeActive: '#14b8a6', modeActiveText: '#fff', overlay: 'rgba(0,25,25,0.3)' } },
      { url: P('city-modern-11'), theme: { timerRing: '#7c3aed', timerText: '#3b0764', accent: '#a78bfa', accentLight: '#ede9fe', buttonBg: '#3b0764', buttonText: '#fff', secondaryBg: '#f5f3ff', secondaryText: '#3b0764', modeActive: '#7c3aed', modeActiveText: '#fff', overlay: 'rgba(20,5,45,0.35)' } },
      { url: P('city-architecture-12'), theme: { timerRing: '#06b6d4', timerText: '#164e63', accent: '#22d3ee', accentLight: '#cffafe', buttonBg: '#164e63', buttonText: '#fff', secondaryBg: '#ecfeff', secondaryText: '#164e63', modeActive: '#06b6d4', modeActiveText: '#fff', overlay: 'rgba(0,20,35,0.3)' } },
      { url: P('city-tokyo-13'), theme: { timerRing: '#e11d48', timerText: '#881337', accent: '#fb7185', accentLight: '#ffe4e6', buttonBg: '#881337', buttonText: '#fff', secondaryBg: '#fff1f2', secondaryText: '#881337', modeActive: '#e11d48', modeActiveText: '#fff', overlay: 'rgba(40,5,15,0.3)' } },
      { url: P('city-london-14'), theme: { timerRing: '#4f46e5', timerText: '#1e1b4b', accent: '#818cf8', accentLight: '#e0e7ff', buttonBg: '#1e1b4b', buttonText: '#fff', secondaryBg: '#eef2ff', secondaryText: '#1e1b4b', modeActive: '#4f46e5', modeActiveText: '#fff', overlay: 'rgba(10,10,45,0.35)' } },
    ],
  },
  {
    id: 'clouds',
    label: 'Clouds',
    emoji: '☁️',
    images: [
      { url: P('clouds-sky-1'), theme: { timerRing: '#60a5fa', timerText: '#1e40af', accent: '#93c5fd', accentLight: '#dbeafe', buttonBg: '#1e40af', buttonText: '#fff', secondaryBg: '#eff6ff', secondaryText: '#1e40af', modeActive: '#60a5fa', modeActiveText: '#fff', overlay: 'rgba(10,20,50,0.15)' } },
      { url: P('clouds-blue-2'), theme: { timerRing: '#818cf8', timerText: '#3730a3', accent: '#a5b4fc', accentLight: '#e0e7ff', buttonBg: '#3730a3', buttonText: '#fff', secondaryBg: '#eef2ff', secondaryText: '#3730a3', modeActive: '#818cf8', modeActiveText: '#fff', overlay: 'rgba(15,15,50,0.2)' } },
      { url: P('clouds-sunset-3'), theme: { timerRing: '#c084fc', timerText: '#6b21a8', accent: '#d8b4fe', accentLight: '#f3e8ff', buttonBg: '#6b21a8', buttonText: '#fff', secondaryBg: '#faf5ff', secondaryText: '#6b21a8', modeActive: '#c084fc', modeActiveText: '#fff', overlay: 'rgba(30,10,45,0.2)' } },
      { url: P('clouds-white-4'), theme: { timerRing: '#38bdf8', timerText: '#075985', accent: '#7dd3fc', accentLight: '#e0f2fe', buttonBg: '#075985', buttonText: '#fff', secondaryBg: '#f0f9ff', secondaryText: '#075985', modeActive: '#38bdf8', modeActiveText: '#fff', overlay: 'rgba(5,20,45,0.15)' } },
      { url: P('clouds-dreamy-5'), theme: { timerRing: '#a78bfa', timerText: '#4c1d95', accent: '#c4b5fd', accentLight: '#ede9fe', buttonBg: '#4c1d95', buttonText: '#fff', secondaryBg: '#f5f3ff', secondaryText: '#4c1d95', modeActive: '#a78bfa', modeActiveText: '#fff', overlay: 'rgba(20,10,45,0.2)' } },
      { url: P('clouds-soft-6'), theme: { timerRing: '#93c5fd', timerText: '#1e3a8a', accent: '#bfdbfe', accentLight: '#dbeafe', buttonBg: '#1e3a8a', buttonText: '#fff', secondaryBg: '#eff6ff', secondaryText: '#1e3a8a', modeActive: '#93c5fd', modeActiveText: '#fff', overlay: 'rgba(10,15,45,0.15)' } },
      { url: P('clouds-fluffy-7'), theme: { timerRing: '#7dd3fc', timerText: '#0c4a6e', accent: '#bae6fd', accentLight: '#e0f2fe', buttonBg: '#0c4a6e', buttonText: '#fff', secondaryBg: '#f0f9ff', secondaryText: '#0c4a6e', modeActive: '#7dd3fc', modeActiveText: '#fff', overlay: 'rgba(5,15,40,0.15)' } },
      { url: P('clouds-cirrus-8'), theme: { timerRing: '#67e8f9', timerText: '#155e75', accent: '#a5f3fc', accentLight: '#cffafe', buttonBg: '#155e75', buttonText: '#fff', secondaryBg: '#ecfeff', secondaryText: '#155e75', modeActive: '#67e8f9', modeActiveText: '#fff', overlay: 'rgba(5,20,35,0.15)' } },
      { url: P('clouds-pink-9'), theme: { timerRing: '#f472b6', timerText: '#9d174d', accent: '#f9a8d4', accentLight: '#fce7f3', buttonBg: '#9d174d', buttonText: '#fff', secondaryBg: '#fdf2f8', secondaryText: '#9d174d', modeActive: '#f472b6', modeActiveText: '#fff', overlay: 'rgba(40,10,30,0.15)' } },
      { url: P('clouds-golden-10'), theme: { timerRing: '#fbbf24', timerText: '#78350f', accent: '#fcd34d', accentLight: '#fef3c7', buttonBg: '#78350f', buttonText: '#fff', secondaryBg: '#fffbeb', secondaryText: '#78350f', modeActive: '#fbbf24', modeActiveText: '#fff', overlay: 'rgba(35,20,0,0.15)' } },
      { url: P('clouds-orange-11'), theme: { timerRing: '#fb923c', timerText: '#7c2d12', accent: '#fdba74', accentLight: '#ffedd5', buttonBg: '#7c2d12', buttonText: '#fff', secondaryBg: '#fff7ed', secondaryText: '#7c2d12', modeActive: '#fb923c', modeActiveText: '#fff', overlay: 'rgba(40,15,0,0.15)' } },
      { url: P('clouds-rose-12'), theme: { timerRing: '#f9a8d4', timerText: '#831843', accent: '#fbcfe8', accentLight: '#fce7f3', buttonBg: '#831843', buttonText: '#fff', secondaryBg: '#fdf2f8', secondaryText: '#831843', modeActive: '#ec4899', modeActiveText: '#fff', overlay: 'rgba(40,10,25,0.15)' } },
      { url: P('clouds-violet-13'), theme: { timerRing: '#a78bfa', timerText: '#5b21b6', accent: '#c4b5fd', accentLight: '#ede9fe', buttonBg: '#5b21b6', buttonText: '#fff', secondaryBg: '#f5f3ff', secondaryText: '#5b21b6', modeActive: '#a78bfa', modeActiveText: '#fff', overlay: 'rgba(25,10,45,0.2)' } },
      { url: P('clouds-azure-14'), theme: { timerRing: '#60a5fa', timerText: '#1e40af', accent: '#93c5fd', accentLight: '#dbeafe', buttonBg: '#1e40af', buttonText: '#fff', secondaryBg: '#eff6ff', secondaryText: '#1e40af', modeActive: '#60a5fa', modeActiveText: '#fff', overlay: 'rgba(10,20,50,0.15)' } },
    ],
  },
  {
    id: 'ocean',
    label: 'Ocean',
    emoji: '🌊',
    images: [
      { url: P('ocean-waves-1'), theme: { timerRing: '#0ea5e9', timerText: '#0c4a6e', accent: '#38bdf8', accentLight: '#e0f2fe', buttonBg: '#0c4a6e', buttonText: '#fff', secondaryBg: '#f0f9ff', secondaryText: '#0c4a6e', modeActive: '#0ea5e9', modeActiveText: '#fff', overlay: 'rgba(0,15,40,0.25)' } },
      { url: P('ocean-beach-2'), theme: { timerRing: '#06b6d4', timerText: '#155e75', accent: '#22d3ee', accentLight: '#cffafe', buttonBg: '#155e75', buttonText: '#fff', secondaryBg: '#ecfeff', secondaryText: '#155e75', modeActive: '#06b6d4', modeActiveText: '#fff', overlay: 'rgba(0,20,35,0.2)' } },
      { url: P('ocean-tropical-3'), theme: { timerRing: '#14b8a6', timerText: '#134e4a', accent: '#2dd4bf', accentLight: '#ccfbf1', buttonBg: '#134e4a', buttonText: '#fff', secondaryBg: '#f0fdfa', secondaryText: '#134e4a', modeActive: '#14b8a6', modeActiveText: '#fff', overlay: 'rgba(0,25,25,0.2)' } },
      { url: P('ocean-cyan-4'), theme: { timerRing: '#22d3ee', timerText: '#155e75', accent: '#67e8f9', accentLight: '#cffafe', buttonBg: '#155e75', buttonText: '#fff', secondaryBg: '#ecfeff', secondaryText: '#155e75', modeActive: '#22d3ee', modeActiveText: '#fff', overlay: 'rgba(0,20,35,0.2)' } },
      { url: P('ocean-deep-5'), theme: { timerRing: '#0284c7', timerText: '#0c4a6e', accent: '#38bdf8', accentLight: '#bae6fd', buttonBg: '#0c4a6e', buttonText: '#fff', secondaryBg: '#f0f9ff', secondaryText: '#0c4a6e', modeActive: '#0284c7', modeActiveText: '#fff', overlay: 'rgba(0,15,40,0.25)' } },
      { url: P('ocean-coast-6'), theme: { timerRing: '#0891b2', timerText: '#164e63', accent: '#22d3ee', accentLight: '#cffafe', buttonBg: '#164e63', buttonText: '#fff', secondaryBg: '#ecfeff', secondaryText: '#164e63', modeActive: '#0891b2', modeActiveText: '#fff', overlay: 'rgba(0,20,35,0.25)' } },
      { url: P('ocean-teal-7'), theme: { timerRing: '#0d9488', timerText: '#134e4a', accent: '#5eead4', accentLight: '#ccfbf1', buttonBg: '#134e4a', buttonText: '#fff', secondaryBg: '#f0fdfa', secondaryText: '#134e4a', modeActive: '#0d9488', modeActiveText: '#fff', overlay: 'rgba(0,25,20,0.25)' } },
      { url: P('ocean-sea-8'), theme: { timerRing: '#0ea5e9', timerText: '#075985', accent: '#7dd3fc', accentLight: '#e0f2fe', buttonBg: '#075985', buttonText: '#fff', secondaryBg: '#f0f9ff', secondaryText: '#075985', modeActive: '#0ea5e9', modeActiveText: '#fff', overlay: 'rgba(0,15,40,0.2)' } },
      { url: P('ocean-aqua-9'), theme: { timerRing: '#06b6d4', timerText: '#0e7490', accent: '#67e8f9', accentLight: '#cffafe', buttonBg: '#0e7490', buttonText: '#fff', secondaryBg: '#ecfeff', secondaryText: '#0e7490', modeActive: '#06b6d4', modeActiveText: '#fff', overlay: 'rgba(0,20,35,0.2)' } },
      { url: P('ocean-blue-10'), theme: { timerRing: '#0284c7', timerText: '#0c4a6e', accent: '#38bdf8', accentLight: '#bae6fd', buttonBg: '#0c4a6e', buttonText: '#fff', secondaryBg: '#f0f9ff', secondaryText: '#0c4a6e', modeActive: '#0284c7', modeActiveText: '#fff', overlay: 'rgba(0,15,40,0.25)' } },
      { url: P('ocean-navy-11'), theme: { timerRing: '#2563eb', timerText: '#1e3a5f', accent: '#60a5fa', accentLight: '#dbeafe', buttonBg: '#1e3a5f', buttonText: '#fff', secondaryBg: '#eff6ff', secondaryText: '#1e3a5f', modeActive: '#2563eb', modeActiveText: '#fff', overlay: 'rgba(5,15,45,0.25)' } },
      { url: P('ocean-emerald-12'), theme: { timerRing: '#10b981', timerText: '#064e3b', accent: '#34d399', accentLight: '#d1fae5', buttonBg: '#064e3b', buttonText: '#fff', secondaryBg: '#ecfdf5', secondaryText: '#064e3b', modeActive: '#10b981', modeActiveText: '#fff', overlay: 'rgba(0,25,15,0.2)' } },
      { url: P('ocean-surf-13'), theme: { timerRing: '#0ea5e9', timerText: '#0c4a6e', accent: '#38bdf8', accentLight: '#e0f2fe', buttonBg: '#0c4a6e', buttonText: '#fff', secondaryBg: '#f0f9ff', secondaryText: '#0c4a6e', modeActive: '#0ea5e9', modeActiveText: '#fff', overlay: 'rgba(0,15,40,0.25)' } },
      { url: P('ocean-tide-14'), theme: { timerRing: '#0891b2', timerText: '#164e63', accent: '#22d3ee', accentLight: '#cffafe', buttonBg: '#164e63', buttonText: '#fff', secondaryBg: '#ecfeff', secondaryText: '#164e63', modeActive: '#0891b2', modeActiveText: '#fff', overlay: 'rgba(0,20,35,0.25)' } },
    ],
  },
  {
    id: 'mountains',
    label: 'Mountains',
    emoji: '🏔️',
    images: [
      { url: P('mountain-peak-1'), theme: { timerRing: '#64748b', timerText: '#1e293b', accent: '#94a3b8', accentLight: '#f1f5f9', buttonBg: '#1e293b', buttonText: '#fff', secondaryBg: '#f8fafc', secondaryText: '#1e293b', modeActive: '#64748b', modeActiveText: '#fff', overlay: 'rgba(15,20,30,0.3)' } },
      { url: P('mountain-snow-2'), theme: { timerRing: '#475569', timerText: '#0f172a', accent: '#94a3b8', accentLight: '#e2e8f0', buttonBg: '#0f172a', buttonText: '#fff', secondaryBg: '#f1f5f9', secondaryText: '#0f172a', modeActive: '#475569', modeActiveText: '#fff', overlay: 'rgba(10,15,25,0.35)' } },
      { url: P('mountain-alpine-3'), theme: { timerRing: '#3b82f6', timerText: '#1e3a5f', accent: '#60a5fa', accentLight: '#dbeafe', buttonBg: '#1e3a5f', buttonText: '#fff', secondaryBg: '#eff6ff', secondaryText: '#1e3a5f', modeActive: '#3b82f6', modeActiveText: '#fff', overlay: 'rgba(10,15,40,0.25)' } },
      { url: P('mountain-indigo-4'), theme: { timerRing: '#6366f1', timerText: '#312e81', accent: '#818cf8', accentLight: '#e0e7ff', buttonBg: '#312e81', buttonText: '#fff', secondaryBg: '#eef2ff', secondaryText: '#312e81', modeActive: '#6366f1', modeActiveText: '#fff', overlay: 'rgba(15,10,40,0.3)' } },
      { url: P('mountain-violet-5'), theme: { timerRing: '#8b5cf6', timerText: '#4c1d95', accent: '#a78bfa', accentLight: '#ede9fe', buttonBg: '#4c1d95', buttonText: '#fff', secondaryBg: '#f5f3ff', secondaryText: '#4c1d95', modeActive: '#8b5cf6', modeActiveText: '#fff', overlay: 'rgba(20,10,40,0.3)' } },
      { url: P('mountain-green-6'), theme: { timerRing: '#22c55e', timerText: '#14532d', accent: '#4ade80', accentLight: '#dcfce7', buttonBg: '#14532d', buttonText: '#fff', secondaryBg: '#f0fdf4', secondaryText: '#14532d', modeActive: '#22c55e', modeActiveText: '#fff', overlay: 'rgba(0,25,10,0.25)' } },
      { url: P('mountain-grey-7'), theme: { timerRing: '#6b7280', timerText: '#1f2937', accent: '#9ca3af', accentLight: '#f3f4f6', buttonBg: '#1f2937', buttonText: '#fff', secondaryBg: '#f9fafb', secondaryText: '#1f2937', modeActive: '#6b7280', modeActiveText: '#fff', overlay: 'rgba(15,15,20,0.3)' } },
      { url: P('mountain-sky-8'), theme: { timerRing: '#0ea5e9', timerText: '#0c4a6e', accent: '#38bdf8', accentLight: '#e0f2fe', buttonBg: '#0c4a6e', buttonText: '#fff', secondaryBg: '#f0f9ff', secondaryText: '#0c4a6e', modeActive: '#0ea5e9', modeActiveText: '#fff', overlay: 'rgba(5,15,35,0.25)' } },
      { url: P('mountain-dark-9'), theme: { timerRing: '#475569', timerText: '#0f172a', accent: '#94a3b8', accentLight: '#e2e8f0', buttonBg: '#0f172a', buttonText: '#fff', secondaryBg: '#f1f5f9', secondaryText: '#0f172a', modeActive: '#475569', modeActiveText: '#fff', overlay: 'rgba(10,10,20,0.35)' } },
      { url: P('mountain-misty-10'), theme: { timerRing: '#6366f1', timerText: '#312e81', accent: '#818cf8', accentLight: '#e0e7ff', buttonBg: '#312e81', buttonText: '#fff', secondaryBg: '#eef2ff', secondaryText: '#312e81', modeActive: '#6366f1', modeActiveText: '#fff', overlay: 'rgba(15,10,40,0.3)' } },
      { url: P('mountain-forest-11'), theme: { timerRing: '#10b981', timerText: '#064e3b', accent: '#34d399', accentLight: '#d1fae5', buttonBg: '#064e3b', buttonText: '#fff', secondaryBg: '#ecfdf5', secondaryText: '#064e3b', modeActive: '#10b981', modeActiveText: '#fff', overlay: 'rgba(0,20,10,0.25)' } },
      { url: P('mountain-stone-12'), theme: { timerRing: '#78716c', timerText: '#292524', accent: '#a8a29e', accentLight: '#f5f5f4', buttonBg: '#292524', buttonText: '#fff', secondaryBg: '#fafaf9', secondaryText: '#292524', modeActive: '#78716c', modeActiveText: '#fff', overlay: 'rgba(15,12,10,0.3)' } },
      { url: P('mountain-night-13'), theme: { timerRing: '#3b82f6', timerText: '#1e3a5f', accent: '#60a5fa', accentLight: '#dbeafe', buttonBg: '#1e3a5f', buttonText: '#fff', secondaryBg: '#eff6ff', secondaryText: '#1e3a5f', modeActive: '#3b82f6', modeActiveText: '#fff', overlay: 'rgba(5,10,35,0.35)' } },
      { url: P('mountain-ridge-14'), theme: { timerRing: '#6366f1', timerText: '#312e81', accent: '#818cf8', accentLight: '#e0e7ff', buttonBg: '#312e81', buttonText: '#fff', secondaryBg: '#eef2ff', secondaryText: '#312e81', modeActive: '#6366f1', modeActiveText: '#fff', overlay: 'rgba(15,10,40,0.3)' } },
    ],
  },
  {
    id: 'forest',
    label: 'Forest',
    emoji: '🌲',
    images: [
      { url: P('forest-deep-1'), theme: { timerRing: '#15803d', timerText: '#14532d', accent: '#4ade80', accentLight: '#bbf7d0', buttonBg: '#14532d', buttonText: '#fff', secondaryBg: '#f0fdf4', secondaryText: '#14532d', modeActive: '#15803d', modeActiveText: '#fff', overlay: 'rgba(0,25,5,0.35)' } },
      { url: P('forest-pine-2'), theme: { timerRing: '#166534', timerText: '#052e16', accent: '#22c55e', accentLight: '#dcfce7', buttonBg: '#052e16', buttonText: '#fff', secondaryBg: '#f0fdf4', secondaryText: '#052e16', modeActive: '#166534', modeActiveText: '#fff', overlay: 'rgba(0,20,0,0.4)' } },
      { url: P('forest-moss-3'), theme: { timerRing: '#65a30d', timerText: '#365314', accent: '#a3e635', accentLight: '#ecfccb', buttonBg: '#365314', buttonText: '#fff', secondaryBg: '#f7fee7', secondaryText: '#365314', modeActive: '#65a30d', modeActiveText: '#fff', overlay: 'rgba(15,25,0,0.3)' } },
      { url: P('forest-teal-4'), theme: { timerRing: '#047857', timerText: '#022c22', accent: '#10b981', accentLight: '#d1fae5', buttonBg: '#022c22', buttonText: '#fff', secondaryBg: '#ecfdf5', secondaryText: '#022c22', modeActive: '#047857', modeActiveText: '#fff', overlay: 'rgba(0,20,10,0.4)' } },
      { url: P('forest-light-5'), theme: { timerRing: '#15803d', timerText: '#14532d', accent: '#86efac', accentLight: '#bbf7d0', buttonBg: '#14532d', buttonText: '#fff', secondaryBg: '#f0fdf4', secondaryText: '#14532d', modeActive: '#15803d', modeActiveText: '#fff', overlay: 'rgba(0,20,5,0.35)' } },
      { url: P('forest-dark-6'), theme: { timerRing: '#166534', timerText: '#052e16', accent: '#4ade80', accentLight: '#dcfce7', buttonBg: '#052e16', buttonText: '#fff', secondaryBg: '#f0fdf4', secondaryText: '#052e16', modeActive: '#166534', modeActiveText: '#fff', overlay: 'rgba(0,15,0,0.4)' } },
      { url: P('forest-emerald-7'), theme: { timerRing: '#059669', timerText: '#064e3b', accent: '#34d399', accentLight: '#d1fae5', buttonBg: '#064e3b', buttonText: '#fff', secondaryBg: '#ecfdf5', secondaryText: '#064e3b', modeActive: '#059669', modeActiveText: '#fff', overlay: 'rgba(0,20,10,0.35)' } },
      { url: P('forest-mint-8'), theme: { timerRing: '#0d9488', timerText: '#134e4a', accent: '#2dd4bf', accentLight: '#ccfbf1', buttonBg: '#134e4a', buttonText: '#fff', secondaryBg: '#f0fdfa', secondaryText: '#134e4a', modeActive: '#0d9488', modeActiveText: '#fff', overlay: 'rgba(0,20,15,0.35)' } },
      { url: P('forest-leaf-9'), theme: { timerRing: '#15803d', timerText: '#14532d', accent: '#4ade80', accentLight: '#bbf7d0', buttonBg: '#14532d', buttonText: '#fff', secondaryBg: '#f0fdf4', secondaryText: '#14532d', modeActive: '#15803d', modeActiveText: '#fff', overlay: 'rgba(0,20,5,0.35)' } },
      { url: P('forest-tree-10'), theme: { timerRing: '#166534', timerText: '#052e16', accent: '#22c55e', accentLight: '#dcfce7', buttonBg: '#052e16', buttonText: '#fff', secondaryBg: '#f0fdf4', secondaryText: '#052e16', modeActive: '#166534', modeActiveText: '#fff', overlay: 'rgba(0,15,0,0.4)' } },
      { url: P('forest-fern-11'), theme: { timerRing: '#047857', timerText: '#022c22', accent: '#10b981', accentLight: '#d1fae5', buttonBg: '#022c22', buttonText: '#fff', secondaryBg: '#ecfdf5', secondaryText: '#022c22', modeActive: '#047857', modeActiveText: '#fff', overlay: 'rgba(0,15,10,0.4)' } },
      { url: P('forest-jungle-12'), theme: { timerRing: '#065f46', timerText: '#022c22', accent: '#34d399', accentLight: '#d1fae5', buttonBg: '#022c22', buttonText: '#fff', secondaryBg: '#ecfdf5', secondaryText: '#022c22', modeActive: '#065f46', modeActiveText: '#fff', overlay: 'rgba(0,15,10,0.4)' } },
      { url: P('forest-woods-13'), theme: { timerRing: '#166534', timerText: '#052e16', accent: '#4ade80', accentLight: '#dcfce7', buttonBg: '#052e16', buttonText: '#fff', secondaryBg: '#f0fdf4', secondaryText: '#052e16', modeActive: '#166534', modeActiveText: '#fff', overlay: 'rgba(0,15,0,0.4)' } },
      { url: P('forest-sun-14'), theme: { timerRing: '#15803d', timerText: '#14532d', accent: '#86efac', accentLight: '#bbf7d0', buttonBg: '#14532d', buttonText: '#fff', secondaryBg: '#f0fdf4', secondaryText: '#14532d', modeActive: '#15803d', modeActiveText: '#fff', overlay: 'rgba(0,20,5,0.35)' } },
    ],
  },
  {
    id: 'sunset',
    label: 'Sunset',
    emoji: '🌅',
    images: [
      { url: P('sunset-orange-1'), theme: { timerRing: '#f97316', timerText: '#7c2d12', accent: '#fb923c', accentLight: '#ffedd5', buttonBg: '#7c2d12', buttonText: '#fff', secondaryBg: '#fff7ed', secondaryText: '#7c2d12', modeActive: '#f97316', modeActiveText: '#fff', overlay: 'rgba(40,15,0,0.25)' } },
      { url: P('sunset-red-2'), theme: { timerRing: '#ef4444', timerText: '#7f1d1d', accent: '#f87171', accentLight: '#fecaca', buttonBg: '#7f1d1d', buttonText: '#fff', secondaryBg: '#fef2f2', secondaryText: '#7f1d1d', modeActive: '#ef4444', modeActiveText: '#fff', overlay: 'rgba(40,5,5,0.25)' } },
      { url: P('sunset-pink-3'), theme: { timerRing: '#e11d48', timerText: '#881337', accent: '#fb7185', accentLight: '#ffe4e6', buttonBg: '#881337', buttonText: '#fff', secondaryBg: '#fff1f2', secondaryText: '#881337', modeActive: '#e11d48', modeActiveText: '#fff', overlay: 'rgba(40,5,15,0.25)' } },
      { url: P('sunset-gold-4'), theme: { timerRing: '#f59e0b', timerText: '#78350f', accent: '#fbbf24', accentLight: '#fef3c7', buttonBg: '#78350f', buttonText: '#fff', secondaryBg: '#fffbeb', secondaryText: '#78350f', modeActive: '#f59e0b', modeActiveText: '#fff', overlay: 'rgba(40,20,0,0.2)' } },
      { url: P('sunset-magenta-5'), theme: { timerRing: '#ec4899', timerText: '#831843', accent: '#f472b6', accentLight: '#fce7f3', buttonBg: '#831843', buttonText: '#fff', secondaryBg: '#fdf2f8', secondaryText: '#831843', modeActive: '#ec4899', modeActiveText: '#fff', overlay: 'rgba(40,10,25,0.25)' } },
      { url: P('sunset-amber-6'), theme: { timerRing: '#f97316', timerText: '#7c2d12', accent: '#fb923c', accentLight: '#ffedd5', buttonBg: '#7c2d12', buttonText: '#fff', secondaryBg: '#fff7ed', secondaryText: '#7c2d12', modeActive: '#f97316', modeActiveText: '#fff', overlay: 'rgba(40,15,0,0.25)' } },
      { url: P('sunset-crimson-7'), theme: { timerRing: '#dc2626', timerText: '#7f1d1d', accent: '#f87171', accentLight: '#fecaca', buttonBg: '#7f1d1d', buttonText: '#fff', secondaryBg: '#fef2f2', secondaryText: '#7f1d1d', modeActive: '#dc2626', modeActiveText: '#fff', overlay: 'rgba(40,5,5,0.3)' } },
      { url: P('sunset-blood-8'), theme: { timerRing: '#b91c1c', timerText: '#450a0a', accent: '#ef4444', accentLight: '#fee2e2', buttonBg: '#450a0a', buttonText: '#fff', secondaryBg: '#fef2f2', secondaryText: '#450a0a', modeActive: '#b91c1c', modeActiveText: '#fff', overlay: 'rgba(35,5,5,0.35)' } },
      { url: P('sunset-fire-9'), theme: { timerRing: '#ea580c', timerText: '#43140c', accent: '#fb923c', accentLight: '#fed7aa', buttonBg: '#43140c', buttonText: '#fff', secondaryBg: '#fff7ed', secondaryText: '#43140c', modeActive: '#ea580c', modeActiveText: '#fff', overlay: 'rgba(35,10,0,0.3)' } },
      { url: P('sunset-honey-10'), theme: { timerRing: '#d97706', timerText: '#451a03', accent: '#f59e0b', accentLight: '#fef3c7', buttonBg: '#451a03', buttonText: '#fff', secondaryBg: '#fffbeb', secondaryText: '#451a03', modeActive: '#d97706', modeActiveText: '#fff', overlay: 'rgba(35,15,0,0.3)' } },
      { url: P('sunset-rose-11'), theme: { timerRing: '#e11d48', timerText: '#881337', accent: '#fb7185', accentLight: '#ffe4e6', buttonBg: '#881337', buttonText: '#fff', secondaryBg: '#fff1f2', secondaryText: '#881337', modeActive: '#e11d48', modeActiveText: '#fff', overlay: 'rgba(40,5,15,0.25)' } },
      { url: P('sunset-rust-12'), theme: { timerRing: '#c2410c', timerText: '#43140c', accent: '#f97316', accentLight: '#ffedd5', buttonBg: '#43140c', buttonText: '#fff', secondaryBg: '#fff7ed', secondaryText: '#43140c', modeActive: '#c2410c', modeActiveText: '#fff', overlay: 'rgba(35,10,0,0.3)' } },
      { url: P('sunset-peach-13'), theme: { timerRing: '#f97316', timerText: '#7c2d12', accent: '#fb923c', accentLight: '#ffedd5', buttonBg: '#7c2d12', buttonText: '#fff', secondaryBg: '#fff7ed', secondaryText: '#7c2d12', modeActive: '#f97316', modeActiveText: '#fff', overlay: 'rgba(40,15,0,0.25)' } },
      { url: P('sunset-coral-14'), theme: { timerRing: '#ef4444', timerText: '#7f1d1d', accent: '#f87171', accentLight: '#fecaca', buttonBg: '#7f1d1d', buttonText: '#fff', secondaryBg: '#fef2f2', secondaryText: '#7f1d1d', modeActive: '#ef4444', modeActiveText: '#fff', overlay: 'rgba(40,5,5,0.25)' } },
    ],
  },
];
