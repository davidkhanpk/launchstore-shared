export interface CountdownTimerProps {
    id?: string;
    title: string;
    subtitle: string;
    endDate: string;
    timerStyle: 'boxes' | 'minimal' | 'circle';
    showDays: boolean;
    showHours: boolean;
    showMinutes: boolean;
    showSeconds: boolean;
    showCTA: boolean;
    ctaText: string;
    ctaLink: string;
    backgroundColor: string;
    textColor: string;
    timerColor: string;
    accentColor: string;
    spacing: 'compact' | 'normal' | 'spacious';
    /**
     * `'live'` = real countdown using setInterval (default — what shows in
     *   production).
     * `'preview'` = static rendering (Puck editor doesn't tick). Renders the
     *   units at 00:00:00:00; use to avoid infinite re-renders in editor
     *   preview if re-mounting triggers setInterval churn.
     *
     * Default: 'live'.
     */
    mode?: 'preview' | 'live';
}
//# sourceMappingURL=countdowntimer.types.d.ts.map