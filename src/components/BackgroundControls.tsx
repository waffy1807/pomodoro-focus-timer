import React from 'react';
import { BackgroundTheme } from '../data/backgrounds';

interface BackgroundControlsProps {
  theme: BackgroundTheme;
  currentCategory: { label: string; emoji: string };
  currentCategoryIndex: number;
  currentImageIndex: number;
  totalImages: number;
  totalCategories: number;
  onNext: () => void;
  onPrevious: () => void;
  onSelectImage: (catIdx: number, imgIdx: number) => void;
  intervalMinutes: number;
  enabled: boolean;
}

export const BackgroundControls: React.FC<BackgroundControlsProps> = ({
  theme,
  currentCategory,
  currentImageIndex,
  totalImages,
  onNext,
  onPrevious,
  enabled,
  intervalMinutes,
}) => {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white/10 backdrop-blur-md rounded-xl px-5 py-3 border border-white/15 shadow-lg">
        <div className="flex items-center justify-between">
          <button
            onClick={onPrevious}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all active:scale-90"
            aria-label="Previous background"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          
          <div className="flex flex-col items-center gap-1.5">
            <span className="text-white/90 text-sm font-medium drop-shadow flex items-center gap-1.5">
              <span>{currentCategory.emoji}</span>
              <span>{currentCategory.label}</span>
            </span>
            {/* Image progress dots */}
            <div className="flex items-center gap-1">
              {Array.from({ length: Math.min(totalImages, 7) }).map((_, i) => {
                const actualIndex = totalImages <= 7 ? i : Math.max(0, Math.min(currentImageIndex - 3, totalImages - 7)) + i;
                const isCurrent = actualIndex === currentImageIndex;
                return (
                  <div
                    key={i}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: isCurrent ? '16px' : '4px',
                      height: '4px',
                      backgroundColor: isCurrent ? theme.accent : 'rgba(255,255,255,0.3)',
                    }}
                  />
                );
              })}
            </div>
            {enabled && (
              <span className="text-white/40 text-[10px]">
                Auto • {intervalMinutes}min
              </span>
            )}
          </div>
          
          <button
            onClick={onNext}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all active:scale-90"
            aria-label="Next background"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
