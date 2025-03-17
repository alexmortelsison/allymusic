"use client";
import { useEffect, useState } from "react";

const CountdownTimer = ({ targetDate }: { targetDate: string }) => {
  const calculateTimeLeft = () => {
    const now = new Date().toLocaleString("en-US", {
      timeZone: "America/Los_Angeles",
    });
    const nowTime = new Date(now).getTime();
    const targetTime = new Date(targetDate).getTime();
    const difference = targetTime - nowTime;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4 text-center">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div
          key={unit}
          className="flex flex-col bg-[#dd0d66]/10 text-white p-4 rounded-lg w-16 border-blue-500 border"
        >
          <span className="text-2xl font-bold">{value}</span>
          <span className="text-sm uppercase">{unit}</span>
        </div>
      ))}
    </div>
  );
};

export default function CountdownPage() {
  const now = new Date().toLocaleString("en-US", {
    timeZone: "America/Los_Angeles",
  });
  const target = new Date(now);
  target.setDate(target.getDate() + 5);
  target.setHours(17, 0, 0, 0); // Set exact time to 17:00

  return (
    <div className="relative z-10">
      <div className="absolute bottom-5 left-8">
        <CountdownTimer targetDate={target.toISOString()} />
      </div>
    </div>
  );
}
