import { useState, useRef, useCallback, useEffect } from 'react';

export type TimerStatus = 'idle' | 'running' | 'paused';

interface UseTimerProps {
  duration: number; // in seconds
  onComplete: () => void;
}

export function useTimer({ duration, onComplete }: UseTimerProps) {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [status, setStatus] = useState<TimerStatus>('idle');
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  const clearTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const start = useCallback(() => {
    clearTimer();
    setStatus('running');
    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearTimer();
          setStatus('idle');
          onCompleteRef.current();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }, [clearTimer]);

  const pause = useCallback(() => {
    clearTimer();
    setStatus('paused');
  }, [clearTimer]);

  const reset = useCallback(() => {
    clearTimer();
    setTimeLeft(duration);
    setStatus('idle');
  }, [clearTimer, duration]);

  // Reset timer when duration changes
  useEffect(() => {
    if (status === 'idle') {
      setTimeLeft(duration);
    }
  }, [duration, status]);

  // Cleanup on unmount
  useEffect(() => {
    return () => clearTimer();
  }, [clearTimer]);

  const progress = 1 - timeLeft / duration;

  return { timeLeft, status, progress, start, pause, reset };
}
