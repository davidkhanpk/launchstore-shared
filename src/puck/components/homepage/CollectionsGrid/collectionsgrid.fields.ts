import type { Field } from '@puckeditor/core';

export const collectionsGridFields = {
  sectionTitle: { type: 'text', label: 'Section Title' },
  sectionSubtitle: { type: 'text', label: 'Section Subtitle' },
  showTitle: { type: 'radio', label: 'Show Section Title', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  columns: { type: 'number', label: 'Columns (Desktop)', min: 2, max: 6 },
  columnsTablet: { type: 'number', label: 'Columns (Tablet)', min: 2, max: 4 },
  columnsMobile: { type: 'number', label: 'Columns (Mobile)', min: 1, max: 2 },
  gap: { type: 'number', label: 'Gap Between Items (px)', min: 0, max: 64 },
  showCollectionImage: { type: 'radio', label: 'Show Collection Image', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  showCollectionTitle: { type: 'radio', label: 'Show Collection Title', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  showProductCount: { type: 'radio', label: 'Show Product Count', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  showDescription: { type: 'radio', label: 'Show Description', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  imageAspectRatio: {
    type: 'select', label: 'Image Aspect Ratio',
    options: [
      { label: 'Square (1:1)', value: 'square' },
      { label: 'Portrait (3:4)', value: 'portrait' },
      { label: 'Landscape (4:3)', value: 'landscape' },
      { label: 'Wide (16:9)', value: 'wide' },
    ],
  },
  backgroundColor: { type: 'text', label: 'Background Color (hex or theme token)' },
  textColor: { type: 'text', label: 'Text Color (hex or theme token)' },
  cardStyle: {
    type: 'select', label: 'Card Style',
    options: [
      { label: 'Minimal', value: 'minimal' },
      { label: 'Bordered', value: 'bordered' },
      { label: 'Shadow', value: 'shadow' },
      { label: 'Image Overlay', value: 'overlay' },
    ],
  },
  borderRadius: {
    type: 'select', label: 'Border Radius',
    options: [
      { label: 'None', value: 'none' },
      { label: 'Small', value: 'sm' },
      { label: 'Medium', value: 'md' },
      { label: 'Large', value: 'lg' },
      { label: 'Extra Large', value: 'xl' },
    ],
  },
  hoverEffect: {
    type: 'select', label: 'Hover Effect',
    options: [
      { label: 'None', value: 'none' },
      { label: 'Scale Up', value: 'scale' },
      { label: 'Shadow', value: 'shadow' },
      { label: 'Lift', value: 'lift' },
    ],
  },
  collectionSource: {
    type: 'select', label: 'Collection Source',
    options: [
      { label: 'All Collections', value: 'all' },
      { label: 'Manual Selection', value: 'manual' },
    ],
  },
  selectedCollectionIds: {
    type: 'array',
    label: 'Manual Collection IDs (when Source = Manual)',
    arrayFields: {
      id: { type: 'text', label: 'Collection ID' },
    },
    defaultItemProps: { id: '' },
  } as any,
} as Record<string, Field>;
