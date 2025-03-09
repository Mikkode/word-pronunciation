"use client";

import { useRef, useEffect } from "react";
import styles from "./Timer.module.css";

type TimerProps = {
  className?: string;
  color?: "pink" | "blue" | "purple" | "orange";
};

export default function Timer({ className = "", color = "pink" }: TimerProps) {
  const timerRef = useRef({ hours: 0, minutes: 0, seconds: 0 });
  const timerDisplayRef = useRef<HTMLDivElement>(null);

  // Format timer display with leading zeros
  const formatTime = (value: number) => {
    return value.toString().padStart(2, "0");
  };

  // Timer logic
  useEffect(() => {
    const updateTimerDisplay = () => {
      if (timerDisplayRef.current) {
        const { hours, minutes, seconds } = timerRef.current;
        timerDisplayRef.current.textContent = `${formatTime(
          hours
        )}:${formatTime(minutes)}:${formatTime(seconds)}`;
      }
    };

    const interval = setInterval(() => {
      const { seconds, minutes, hours } = timerRef.current;

      const newSeconds = seconds + 1;
      const newMinutes = minutes + Math.floor(newSeconds / 60);
      const newHours = hours + Math.floor(newMinutes / 60);

      timerRef.current = {
        hours: newHours % 24,
        minutes: newMinutes % 60,
        seconds: newSeconds % 60,
      };

      updateTimerDisplay();
    }, 1000);

    // Initialiser l'affichage
    updateTimerDisplay();

    return () => clearInterval(interval);
  }, []);

  const colorClass = {
    pink: styles.pinkTimer,
    blue: styles.blueTimer,
    purple: styles.purpleTimer,
    orange: styles.orangeTimer,
  }[color];

  return (
    <div className={`${styles.floatingTimer} ${className}`}>
      <div className={`${styles.timerInner} ${colorClass}`}>
        <div className={styles.timerDigits} ref={timerDisplayRef}>
          00:00:00
        </div>
      </div>
    </div>
  );
}
