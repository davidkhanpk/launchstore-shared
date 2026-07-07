'use client';

import React, { useState, useEffect } from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { countdownTimerFields } from './countdowntimer.fields';
import type { CountdownTimerProps } from './countdowntimer.types';

const SPACING_CLASSES: Record<CountdownTimerProps['spacing'], string> = {
  compact: 'py-6 px-4',
  normal: 'py-10 px-6',
  spacious: 'py-16 px-8',
};

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const ZERO: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

function computeTimeLeft(endDate: string): TimeLeft {
  const diff = +new Date(endDate) - +new Date();
  if (diff <= 0) return ZERO;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / 1000 / 60) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function TimerUnit({
  value,
  label,
  timerColor,
  backgroundColor,
  accentColor,
  textColor,
  timerStyle,
}: {
  value: number;
  label: string;
  timerColor: string;
  backgroundColor: string;
  accentColor: string;
  textColor: string;
  timerStyle: CountdownTimerProps['timerStyle'];
}) {
  if (timerStyle === 'circle') {
    return (
      <div className="flex flex-col items-center">
        <div
          className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full font-bold text-2xl md:text-3xl"
          style={{ backgroundColor: timerColor, color: backgroundColor, border: `3px solid ${accentColor}` }}
        >
          {String(value).padStart(2, '0')}
        </div>
        <div className="text-xs md:text-sm mt-2 font-medium" style={{ color: textColor }}>{label}</div>
      </div>
    );
  }
  if (timerStyle === 'boxes') {
    return (
      <div className="flex flex-col items-center">
        <div
          className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-lg font-bold text-2xl md:text-3xl"
          style={{ backgroundColor: timerColor, color: backgroundColor, border: `2px solid ${accentColor}` }}
        >
          {String(value).padStart(2, '0')}
        </div>
        <div className="text-xs md:text-sm mt-2 font-medium" style={{ color: textColor }}>{label}</div>
      </div>
    );
  }
  // minimal
  return (
    <div className="flex flex-col items-center">
      <div className="text-3xl md:text-5xl font-bold" style={{ color: timerColor }}>
        {String(value).padStart(2, '0')}
      </div>
      <div className="text-xs md:text-sm mt-1 font-medium" style={{ color: textColor }}>{label}</div>
    </div>
  );
}

export const CountdownTimer: ComponentConfig<CountdownTimerProps> = {
  label: 'Countdown Timer',
  fields: countdownTimerFields as ComponentConfig<CountdownTimerProps>['fields'],
  defaultProps: {
    title: 'Limited Time Offer',
    subtitle: 'Sale ends soon',
    endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    timerStyle: 'boxes',
    showDays: true,
    showHours: true,
    showMinutes: true,
    showSeconds: true,
    showCTA: true,
    ctaText: 'Shop Now',
    ctaLink: '/sale',
    backgroundColor: '#000000',
    textColor: '#ffffff',
    timerColor: '#ffffff',
    accentColor: '#3b82f6',
    spacing: 'normal',
    mode: 'live',
  },
  render: ({
    title, subtitle, endDate, timerStyle, showDays, showHours, showMinutes,
    showSeconds, showCTA, ctaText, ctaLink, backgroundColor, textColor,
    timerColor, accentColor, spacing, mode = 'live',
  }) => {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>(ZERO);

    // Only the 'live' mode runs setInterval. 'preview' shows 00:00:00:00
    // statically (or more accurately: it never ticks, so the displayed
    // value is just whatever was set on first render — which is ZERO).
    useEffect(() => {
      if (mode === 'preview') return;
      setTimeLeft(computeTimeLeft(endDate));
      const id = window.setInterval(() => {
        setTimeLeft(computeTimeLeft(endDate));
      }, 1000);
      return () => window.clearInterval(id);
    }, [endDate, mode]);

    return (
      <div
        style={{ backgroundColor }}
        className={`w-full ${SPACING_CLASSES[spacing] || 'py-10 px-6'}`}
      >
        <div className="max-w-7xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-2" style={{ color: textColor }}>{title}</h2>
          <p className="text-base md:text-xl mb-8" style={{ color: textColor }}>{subtitle}</p>

          <div className="flex items-center justify-center gap-4 md:gap-6 mb-8">
            {showDays && (
              <TimerUnit value={timeLeft.days} label="Days" timerColor={timerColor} backgroundColor={backgroundColor} accentColor={accentColor} textColor={textColor} timerStyle={timerStyle} />
            )}
            {showDays && showHours && (
              <div className="text-3xl font-bold" style={{ color: timerColor }}>:</div>
            )}
            {showHours && (
              <TimerUnit value={timeLeft.hours} label="Hours" timerColor={timerColor} backgroundColor={backgroundColor} accentColor={accentColor} textColor={textColor} timerStyle={timerStyle} />
            )}
            {showHours && showMinutes && (
              <div className="text-3xl font-bold" style={{ color: timerColor }}>:</div>
            )}
            {showMinutes && (
              <TimerUnit value={timeLeft.minutes} label="Minutes" timerColor={timerColor} backgroundColor={backgroundColor} accentColor={accentColor} textColor={textColor} timerStyle={timerStyle} />
            )}
            {showMinutes && showSeconds && (
              <div className="text-3xl font-bold" style={{ color: timerColor }}>:</div>
            )}
            {showSeconds && (
              <TimerUnit value={timeLeft.seconds} label="Seconds" timerColor={timerColor} backgroundColor={backgroundColor} accentColor={accentColor} textColor={textColor} timerStyle={timerStyle} />
            )}
          </div>

          {showCTA && (
            // Plain anchor — consumer can wrap in <Link> if they want
            // client-side nav. See migration pattern in MIGRATION.md.
            <a
              href={ctaLink}
              className="inline-block px-8 py-4 font-bold text-lg rounded-lg transition-transform hover:scale-105"
              style={{ backgroundColor: accentColor, color: backgroundColor }}
            >
              {ctaText}
            </a>
          )}
        </div>
      </div>
    );
  },
};

export default CountdownTimer;
