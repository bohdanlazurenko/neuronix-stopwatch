'use client';

import { useState, useEffect, useRef } from 'react';
import StopwatchDisplay from '@/components/StopwatchDisplay';
import ControlButton from '@/components/ControlButton';
import { now } from '@/lib/time';

export default function Home() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const startTimeRef = useRef<number | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (isRunning) {
      startTimeRef.current = now() - time;
      
      const animate = () => {
        if (startTimeRef.current !== null) {
          setTime(now() - startTimeRef.current);
        }
        animationFrameRef.current = requestAnimationFrame(animate);
      };
      
      animationFrameRef.current = requestAnimationFrame(animate);
    } else {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    }

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isRunning, time]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
    startTimeRef.current = null;
  };

  return (
    <main className="flex flex-col items-center justify-center gap-12 p-8">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Neuronix Stopwatch
        </h1>
        <p className="text-gray-400 text-lg">
          Precision timing at your fingertips
        </p>
      </div>

      <div className="bg-gray-800 rounded-2xl p-12 shadow-2xl border border-gray-700">
        <StopwatchDisplay time={time} />
      </div>

      <div className="flex gap-6">
        {!isRunning ? (
          <ControlButton onClick={handleStart} variant="start">
            Start
          </ControlButton>
        ) : (
          <ControlButton onClick={handleStop} variant="stop">
            Stop
          </ControlButton>
        )}
        <ControlButton 
          onClick={handleReset} 
          variant="reset"
          disabled={time === 0}
        >
          Reset
        </ControlButton>
      </div>

      <div className="text-center text-gray-500 text-sm mt-8">
        <p>Built with Next.js 14, TypeScript, and Tailwind CSS</p>
      </div>
    </main>
  );
}