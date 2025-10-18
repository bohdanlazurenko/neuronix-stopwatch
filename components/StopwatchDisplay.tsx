import { formatTime } from '@/lib/time';

interface StopwatchDisplayProps {
  time: number;
}

export default function StopwatchDisplay({ time }: StopwatchDisplayProps) {
  return (
    <div className="text-8xl font-bold tracking-wider text-shadow">
      {formatTime(time)}
    </div>
  );
}