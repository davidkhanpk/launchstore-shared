'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef } from 'react';
import { statsSectionFields } from './statssection.fields';
/** Emoji icon dictionary for StatsSection icons. */
const ICON_EMOJI = {
    people: '👥', star: '⭐', trophy: '🏆', briefcase: '💼',
    globe: '🌍', package: '📦', target: '🎯', diamond: '💎',
    rocket: '🚀', check: '✓',
};
const SPACING_CLASSES = {
    compact: 'py-6 px-4',
    normal: 'py-12 px-6',
    spacious: 'py-20 px-8',
};
const RADIUS_CLASSES = {
    none: 'rounded-none', sm: 'rounded-sm', md: 'rounded-md', lg: 'rounded-lg',
};
const ALIGNMENT_CLASSES = {
    left: 'text-left', center: 'text-center', right: 'text-right',
};
export const StatsSection = {
    label: 'Stats Section',
    fields: statsSectionFields,
    defaultProps: {
        title: 'Our Impact',
        subtitle: 'Trusted by thousands',
        columns: '4',
        alignment: 'center',
        stats: [
            { id: '1', number: '10K+', label: 'Happy Customers', icon: 'people', iconColor: '#3b82f6' },
            { id: '2', number: '500+', label: 'Products', icon: 'package', iconColor: '#3b82f6' },
            { id: '3', number: '50+', label: 'Countries', icon: 'globe', iconColor: '#3b82f6' },
            { id: '4', number: '99%', label: 'Satisfaction', icon: 'star', iconColor: '#3b82f6' },
        ],
        backgroundColor: '#ffffff',
        textColor: '#000000',
        numberColor: '#3b82f6',
        spacing: 'normal',
        showDividers: true,
        borderRadius: 'md',
    },
    render: ({ title, subtitle, columns, alignment, stats, backgroundColor, textColor, numberColor, spacing, showDividers, borderRadius, }) => {
        const [_hasAnimated, setHasAnimated] = useState(false);
        const sectionRef = useRef(null);
        useEffect(() => {
            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && !_hasAnimated)
                    setHasAnimated(true);
            }, { threshold: 0.2 });
            if (sectionRef.current)
                observer.observe(sectionRef.current);
            return () => observer.disconnect();
        }, [_hasAnimated]);
        return (_jsx("div", { ref: sectionRef, className: `stats-section w-full ${SPACING_CLASSES[spacing] || 'py-12 px-6'}`, style: { backgroundColor }, children: _jsxs("div", { className: "max-w-7xl mx-auto px-4", children: [(title || subtitle) && (_jsxs("div", { className: `mb-12 ${ALIGNMENT_CLASSES[alignment] || 'text-center'}`, children: [title && _jsx("h2", { className: "text-4xl font-bold mb-2", style: { color: textColor }, children: title }), subtitle && _jsx("p", { className: "text-lg opacity-75", style: { color: textColor }, children: subtitle })] })), _jsx("div", { className: `grid gap-6 md:gap-8 ${columns === '2' ? 'grid-cols-1 md:grid-cols-2' :
                            columns === '3' ? 'grid-cols-1 md:grid-cols-3' :
                                'grid-cols-2 md:grid-cols-4'}`, children: (stats || []).map((stat, index) => {
                            const isLast = index === (stats || []).length - 1;
                            const borderClass = showDividers && !isLast ? 'md:border-r border-gray-200' : '';
                            return (_jsxs("div", { className: `relative ${borderClass} ${RADIUS_CLASSES[borderRadius] || 'rounded-md'} p-6`, children: [_jsx("div", { className: "text-4xl mb-2", style: { color: stat.iconColor }, children: ICON_EMOJI[stat.icon] || '📊' }), _jsx("div", { className: "text-5xl font-bold mb-2", style: { color: numberColor }, children: stat.number }), _jsx("div", { className: "text-base font-semibold mb-1", style: { color: textColor }, children: stat.label }), stat.description && (_jsx("div", { className: "text-sm opacity-75", style: { color: textColor }, children: stat.description }))] }, stat.id));
                        }) })] }) }));
    },
};
export default StatsSection;
//# sourceMappingURL=StatsSection.js.map