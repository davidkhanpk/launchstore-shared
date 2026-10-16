export const filterBarMeta = {
    name: 'FilterBar',
    label: 'Filter Bar',
    description: 'Storefront listing controls: filter panel (sidebar/drawer), sort dropdown, result count, clear-all. Category/collection listing pages only; filters are resolved by the storefront at render.',
    category: 'storefront',
    intent: ['filter', 'sort', 'browse'],
    visualRole: 'listing-controls',
    dataDeps: ['facet data (storefront-resolved)'],
    copyFields: [],
    themeable: [],
    a11yRisk: 'medium',
    a11yNotes: 'Drawer mode must be keyboard-reachable; filters should be announced.',
    mobileBehavior: 'drawer',
    searchTags: ['filter', 'sort', 'listing', 'collection page', 'facets'],
    props: {
        filterLayout: { type: 'enum', options: ['sidebar', 'drawer', 'horizontal'], required: true, description: 'Filter placement. drawer is best on mobile.' },
        showSort: { type: 'boolean', required: true, description: 'Show the sort dropdown.' },
        showCount: { type: 'boolean', required: true, description: 'Show the result count.' },
        showClearAll: { type: 'boolean', required: true, description: 'Show a clear-all-filters action.' },
        showFilters: { type: 'boolean', required: true, description: 'Show the filter controls at all.' },
    },
};
//# sourceMappingURL=filterbar.meta.js.map