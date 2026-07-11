'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { countdownTimerFields } from './countdowntimer.fields';
const SPACING_CLASSES = {
    compact: 'py-6 px-4',
    normal: 'py-10 px-6',
    spacious: 'py-16 px-8',
};
const ZERO = { days: 0, hours: 0, minutes: 0, seconds: 0 };
function computeTimeLeft(endDate) {
    const diff = +new Date(endDate) - +new Date();
    if (diff <= 0)
        return ZERO;
    return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
    };
}
function TimerUnit({ value, label, timerColor, backgroundColor, accentColor, textColor, timerStyle, }) {
    if (timerStyle === 'circle') {
        return (_jsxs("div", { className: "flex flex-col items-center", children: [_jsx("div", { className: "w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full font-bold text-2xl md:text-3xl", style: { backgroundColor: timerColor, color: backgroundColor, border: `3px solid ${accentColor}` }, children: String(value).padStart(2, '0') }), _jsx("div", { className: "text-xs md:text-sm mt-2 font-medium", style: { color: textColor }, children: label })] }));
    }
    if (timerStyle === 'boxes') {
        return (_jsxs("div", { className: "flex flex-col items-center", children: [_jsx("div", { className: "w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-lg font-bold text-2xl md:text-3xl", style: { backgroundColor: timerColor, color: backgroundColor, border: `2px solid ${accentColor}` }, children: String(value).padStart(2, '0') }), _jsx("div", { className: "text-xs md:text-sm mt-2 font-medium", style: { color: textColor }, children: label })] }));
    }
    // minimal
    return (_jsxs("div", { className: "flex flex-col items-center", children: [_jsx("div", { className: "text-3xl md:text-5xl font-bold", style: { color: timerColor }, children: String(value).padStart(2, '0') }), _jsx("div", { className: "text-xs md:text-sm mt-1 font-medium", style: { color: textColor }, children: label })] }));
}
export const CountdownTimer = {
    label: 'Countdown Timer',
    fields: countdownTimerFields,
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
    render: ({ title, subtitle, endDate, timerStyle, showDays, showHours, showMinutes, showSeconds, showCTA, ctaText, ctaLink, backgroundColor, textColor, timerColor, accentColor, spacing, mode = 'live', }) => {
        const [timeLeft, setTimeLeft] = useState(ZERO);
        // Only the 'live' mode runs setInterval. 'preview' shows 00:00:00:00
        // statically (or more accurately: it never ticks, so the displayed
        // value is just whatever was set on first render — which is ZERO).
        useEffect(() => {
            if (mode === 'preview')
                return;
            setTimeLeft(computeTimeLeft(endDate));
            const id = window.setInterval(() => {
                setTimeLeft(computeTimeLeft(endDate));
            }, 1000);
            return () => window.clearInterval(id);
        }, [endDate, mode]);
        return (_jsx("div", { style: { backgroundColor }, className: `w-full ${SPACING_CLASSES[spacing] || 'py-10 px-6'}`, children: _jsxs("div", { className: "max-w-7xl mx-auto text-center px-4", children: [_jsx("h2", { className: "text-3xl md:text-5xl font-bold mb-2", style: { color: textColor }, children: title }), _jsx("p", { className: "text-base md:text-xl mb-8", style: { color: textColor }, children: subtitle }), _jsxs("div", { className: "flex items-center justify-center gap-4 md:gap-6 mb-8", children: [showDays && (_jsx(TimerUnit, { value: timeLeft.days, label: "Days", timerColor: timerColor, backgroundColor: backgroundColor, accentColor: accentColor, textColor: textColor, timerStyle: timerStyle })), showDays && showHours && (_jsx("div", { className: "text-3xl font-bold", style: { color: timerColor }, children: ":" })), showHours && (_jsx(TimerUnit, { value: timeLeft.hours, label: "Hours", timerColor: timerColor, backgroundColor: backgroundColor, accentColor: accentColor, textColor: textColor, timerStyle: timerStyle })), showHours && showMinutes && (_jsx("div", { className: "text-3xl font-bold", style: { color: timerColor }, children: ":" })), showMinutes && (_jsx(TimerUnit, { value: timeLeft.minutes, label: "Minutes", timerColor: timerColor, backgroundColor: backgroundColor, accentColor: accentColor, textColor: textColor, timerStyle: timerStyle })), showMinutes && showSeconds && (_jsx("div", { className: "text-3xl font-bold", style: { color: timerColor }, children: ":" })), showSeconds && (_jsx(TimerUnit, { value: timeLeft.seconds, label: "Seconds", timerColor: timerColor, backgroundColor: backgroundColor, accentColor: accentColor, textColor: textColor, timerStyle: timerStyle }))] }), showCTA && (
                    // Plain anchor — consumer can wrap in <Link> if they want
                    // client-side nav. See migration pattern in MIGRATION.md.
                    _jsx("a", { href: ctaLink, className: "inline-block px-8 py-4 font-bold text-lg rounded-lg transition-transform hover:scale-105", style: { backgroundColor: accentColor, color: backgroundColor }, children: ctaText }))] }) }));
    },
};
export default CountdownTimer;
//# sourceMappingURL=CountdownTimer.js.map