import type { Field } from '@puckeditor/core';
import type { MenuNavigationProps } from './menunavigation.types';

export const menuNavigationFields = {
  menuHandle: { type: 'text', label: 'Menu Handle' },
  layout: {
    type: 'select', label: 'Layout',
    options: [
      { label: 'Horizontal', value: 'horizontal' },
      { label: 'Vertical', value: 'vertical' },
      { label: 'Stacked', value: 'stacked' },
    ],
  },
  alignment: {
    type: 'select', label: 'Alignment',
    options: [
      { label: 'Left', value: 'left' },
      { label: 'Center', value: 'center' },
      { label: 'Right', value: 'right' },
    ],
  },
  hoverEffect: {
    type: 'select', label: 'Hover Effect',
    options: [
      { label: 'Underline', value: 'underline' },
      { label: 'Background', value: 'background' },
      { label: 'Color Change', value: 'color' },
      { label: 'None', value: 'none' },
    ],
  },
  textColor: { type: 'text', label: 'Text Color (token or hex)' },
  hoverColor: { type: 'text', label: 'Hover Color (token or hex)' },
  fontSize: {
    type: 'select', label: 'Font Size',
    options: [
      { label: 'Small', value: 'sm' },
      { label: 'Base', value: 'base' },
      { label: 'Large', value: 'lg' },
    ],
  },
  fontWeight: {
    type: 'select', label: 'Font Weight',
    options: [
      { label: 'Normal', value: 'normal' },
      { label: 'Medium', value: 'medium' },
      { label: 'Semibold', value: 'semibold' },
      { label: 'Bold', value: 'bold' },
    ],
  },
  showDropdownArrows: {
    type: 'radio', label: 'Show Dropdown Arrows',
    options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
  },
  dropdownStyle: {
    type: 'select', label: 'Dropdown Style',
    options: [
      { label: 'Default Dropdown', value: 'default' },
      { label: 'Mega Menu', value: 'mega' },
    ],
  },
  maxDepth: {
    type: 'select', label: 'Maximum Nesting Depth',
    options: [
      { label: '1 Level', value: '1' },
      { label: '2 Levels', value: '2' },
      { label: '3 Levels', value: '3' },
    ],
  },
  dropdownBackground: { type: 'text', label: 'Dropdown Background (token or color)' },
  dropdownBorder: { type: 'text', label: 'Dropdown Border (token or color)' },
  dropdownShadow: {
    type: 'select', label: 'Dropdown Shadow',
    options: [
      { label: 'Small', value: 'sm' },
      { label: 'Medium', value: 'md' },
      { label: 'Large', value: 'lg' },
      { label: 'Extra Large', value: 'xl' },
    ],
  },
  dropdownRadius: {
    type: 'select', label: 'Dropdown Border Radius',
    options: [
      { label: 'Small', value: 'sm' },
      { label: 'Medium', value: 'md' },
      { label: 'Large', value: 'lg' },
      { label: 'Extra Large', value: 'xl' },
    ],
  },
} as Record<string, Field>;
