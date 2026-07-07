export type IconName =
  | 'HeartIcon' | 'StarIcon' | 'BookmarkIcon' | 'CheckIcon' | 'XMarkIcon'
  | 'PlusIcon' | 'MinusIcon' | 'ChevronDownIcon' | 'ChevronUpIcon' | 'ChevronLeftIcon' | 'ChevronRightIcon'
  | 'ArrowLeftIcon' | 'ArrowRightIcon' | 'ArrowUpIcon' | 'ArrowDownIcon'
  | 'MagnifyingGlassIcon' | 'ShoppingCartIcon' | 'ShoppingBagIcon'
  | 'UserIcon' | 'UsersIcon' | 'HomeIcon' | 'EnvelopeIcon' | 'PhoneIcon'
  | 'CalendarIcon' | 'ClockIcon' | 'BellIcon' | 'Cog6ToothIcon'
  | 'InformationCircleIcon' | 'ExclamationCircleIcon' | 'CheckCircleIcon'
  | 'XCircleIcon' | 'MapPinIcon' | 'TagIcon' | 'EyeIcon'
  | 'DocumentIcon' | 'GiftIcon' | 'QuestionMarkCircleIcon';

export interface IconProps {
  id?: string;
  iconName: IconName;
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  color?: string;
  strokeWidth: '1' | '1.5' | '2' | '2.5';
  alignment: 'left' | 'center' | 'right';
  marginTop?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  marginBottom?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}
