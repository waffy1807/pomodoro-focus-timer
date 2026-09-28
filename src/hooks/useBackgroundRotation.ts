import { useState, useEffect, useCallback, useRef } from 'react';
import { backgroundCategories, BackgroundImage, BackgroundTheme } from '../data/backgrounds';

export interface BackgroundState {
  currentImage: BackgroundImage;
  currentCategoryIndex: number;
  currentImageIndex: number;
  theme: BackgroundTheme;
  isTransitioning: boolean;
}

interface UseBackgroundRotationProps {
  intervalMinutes: number;
  selectedCategories: string[];
  enabled: boolean;
}

function getStoredIndex(key: string, max: number): number {
  try {
    const stored = localStorage.getItem(key);
    if (stored !== null) {
      const val = parseInt(stored, 10);
      if (!isNaN(val) && val >= 0 && val < max) return val;
    }
  } catch {}
  return Math.floor(Math.random() * max);
}

function preloadImage(url: string) {
  const img = new Image();
  img.src = url;
}

export function useBackgroundRotation({ intervalMinutes, selectedCategories, enabled }: UseBackgroundRotationProps) {
  const filteredCategories = selectedCategories.length > 0
    ? backgroundCategories.filter(c => selectedCategories.includes(c.id))
    : backgroundCategories;

  const [categoryIndex, setCategoryIndex] = useState(() =>
    getStoredIndex('bg-cat-index', filteredCategories.length)
  );
  const [imageIndex, setImageIndex] = useState(() =>
    getStoredIndex('bg-img-index', filteredCategories[0]?.images.length || 1)
  );
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const safeCategoryIndex = Math.min(categoryIndex, filteredCategories.length - 1);
  const currentCategory = filteredCategories[safeCategoryIndex] || filteredCategories[0];
  const safeImageIndex = Math.min(imageIndex, currentCategory.images.length - 1);
  const currentImage = currentCategory.images[safeImageIndex];

  // Preload next image
  useEffect(() => {
    const nextImgIndex = (safeImageIndex + 1) % currentCategory.images.length;
    if (nextImgIndex === 0) {
      // Preload first image of next category
      const nextCatIndex = (safeCategoryIndex + 1) % filteredCategories.length;
      const nextCat = filteredCategories[nextCatIndex];
      if (nextCat) preloadImage(nextCat.images[0].url);
    } else {
      preloadImage(currentCategory.images[nextImgIndex].url);
    }
  }, [safeCategoryIndex, safeImageIndex, currentCategory, filteredCategories]);

  const transitionToNext = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setImageIndex(prev => {
        const cat = filteredCategories[Math.min(categoryIndex, filteredCategories.length - 1)] || filteredCategories[0];
        const nextImg = (prev + 1) % cat.images.length;
        if (nextImg === 0) {
          setCategoryIndex(c => (c + 1) % filteredCategories.length);
        }
        return nextImg;
      });
      setTimeout(() => setIsTransitioning(false), 100);
    }, 400);
  }, [filteredCategories, categoryIndex]);

  const goToNext = useCallback(() => {
    transitionToNext();
  }, [transitionToNext]);

  const goToPrevious = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setImageIndex(prev => {
        if (prev === 0) {
          setCategoryIndex(c => {
            const newCat = (c - 1 + filteredCategories.length) % filteredCategories.length;
            const cat = filteredCategories[newCat];
            setImageIndex(cat.images.length - 1);
            return newCat;
          });
          return prev;
        }
        return prev - 1;
      });
      setTimeout(() => setIsTransitioning(false), 100);
    }, 400);
  }, [filteredCategories]);

  const setSpecificImage = useCallback((catIdx: number, imgIdx: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCategoryIndex(catIdx % filteredCategories.length);
      setImageIndex(imgIdx);
      setTimeout(() => setIsTransitioning(false), 100);
    }, 400);
  }, [filteredCategories.length]);

  // Auto-rotation
  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (enabled && intervalMinutes > 0) {
      intervalRef.current = setInterval(() => {
        transitionToNext();
      }, intervalMinutes * 60 * 1000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [enabled, intervalMinutes, transitionToNext]);

  // Persist indices
  useEffect(() => {
    localStorage.setItem('bg-cat-index', String(safeCategoryIndex));
    localStorage.setItem('bg-img-index', String(safeImageIndex));
  }, [safeCategoryIndex, safeImageIndex]);

  return {
    currentImage,
    currentCategory,
    currentCategoryIndex: safeCategoryIndex,
    currentImageIndex: safeImageIndex,
    theme: currentImage.theme,
    isTransitioning,
    filteredCategories,
    goToNext,
    goToPrevious,
    setSpecificImage,
  };
}
