// Curated icon name list (used by Icon.tsx and exported via iconNames export)
export const ICON_NAMES = [
    'HeartIcon', 'StarIcon', 'BookmarkIcon', 'CheckIcon', 'XMarkIcon',
    'PlusIcon', 'MinusIcon', 'ChevronDownIcon', 'ChevronUpIcon', 'ChevronLeftIcon', 'ChevronRightIcon',
    'ArrowLeftIcon', 'ArrowRightIcon', 'ArrowUpIcon', 'ArrowDownIcon',
    'MagnifyingGlassIcon', 'ShoppingCartIcon', 'ShoppingBagIcon',
    'UserIcon', 'UsersIcon', 'HomeIcon', 'EnvelopeIcon', 'PhoneIcon',
    'CalendarIcon', 'ClockIcon', 'BellIcon', 'Cog6ToothIcon',
    'InformationCircleIcon', 'ExclamationCircleIcon', 'CheckCircleIcon',
    'XCircleIcon', 'MapPinIcon', 'TagIcon', 'EyeIcon',
    'DocumentIcon', 'GiftIcon', 'QuestionMarkCircleIcon',
];
export const iconFields = {
    id: { type: 'text', label: 'ID' },
    iconName: {
        type: 'select',
        label: 'Icon',
        options: ICON_NAMES.map((name) => ({
            label: name.replace('Icon', '').replace(/([A-Z])/g, ' $1').trim(),
            value: name,
        })),
    },
    size: {
        type: 'select', label: 'Size',
        options: [
            { label: 'Extra Small (16px)', value: 'xs' },
            { label: 'Small (20px)', value: 'sm' },
            { label: 'Medium (24px)', value: 'md' },
            { label: 'Large (32px)', value: 'lg' },
            { label: 'Extra Large (40px)', value: 'xl' },
            { label: '2XL (48px)', value: '2xl' },
        ],
    },
    color: { type: 'text', label: 'Color (hex or theme token)' },
    strokeWidth: { type: 'radio', label: 'Stroke Width', options: [{ label: '1', value: '1' }, { label: '1.5', value: '1.5' }, { label: '2', value: '2' }, { label: '2.5', value: '2.5' }] },
    alignment: { type: 'radio', label: 'Alignment', options: [{ label: 'Left', value: 'left' }, { label: 'Center', value: 'center' }, { label: 'Right', value: 'right' }] },
    marginTop: { type: 'select', label: 'Margin Top', options: [{ label: 'None', value: 'none' }, { label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }, { label: 'Extra Large', value: 'xl' }] },
    marginBottom: { type: 'select', label: 'Margin Bottom', options: [{ label: 'None', value: 'none' }, { label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }, { label: 'Extra Large', value: 'xl' }] },
};
//# sourceMappingURL=icon.fields.js.map