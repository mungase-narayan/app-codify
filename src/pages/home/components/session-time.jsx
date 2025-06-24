import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

const MAX_TIME = 60;

const SessionTime = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => (prev + 1) % (MAX_TIME + 1));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (totalSeconds) => {
    const mins = Math.floor(totalSeconds / 60)
      .toString()
      .padStart(2, "0");
    const secs = (totalSeconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  };

  return (
    <div className="flex items-center gap-2 text-red-400">
      <Clock className="w-4 h-4" />
      <span className="text-sm">Session: {formatTime(seconds)}</span>
    </div>
  );
};

export default SessionTime;
