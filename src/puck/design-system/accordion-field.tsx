import React, { useState, useCallback } from 'react';
import type { Field } from '@puckeditor/core';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';

// ── Types ──────────────────────────────────────────────────────────────────

export interface AccordionGroup {
  /** Section label shown in the accordion header. */
  label: string;
  /** Field keys that belong to this group (must exist in allFields). */
  fieldKeys: string[];
  /** Whether this section starts expanded. Default: false. */
  defaultOpen?: boolean;
}

export interface AccordionConfig {
  groups: AccordionGroup[];
  /** The full flat fields record (same object that normally goes to ComponentConfig.fields). */
  allFields: Record<string, Field>;
}

// ── Accordion state persistence ────────────────────────────────────────────
// Remember open/closed state per component+section across re-renders.
const accordionState: Record<string, boolean> = {};

function getStateKey(componentId: string, groupLabel: string): string {
  return `${componentId}::${groupLabel}`;
}

// ── Chevron icon ───────────────────────────────────────────────────────────

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    style={{
      width: '16px', height: '16px', flexShrink: 0,
      transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
      transition: 'transform 200ms ease',
    }}
    fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

// ── Field renderer ─────────────────────────────────────────────────────────
// Renders a single Puck field inside the accordion section.
// Puck's custom field render receives { value, onChange }.

interface FieldRendererProps {
  fieldKey: string;
  field: Field;
  value: any;
  onChange: (value: any) => void;
}

const FieldRenderer: React.FC<FieldRendererProps> = ({ fieldKey, field, value, onChange }) => {
  const anyField = field as any;

  // For select/radio/text/number/textarea — render a native input
  if (anyField.type === 'select') {
    return (
      <div style={{ marginBottom: '12px' }}>
        <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, marginBottom: '4px', color: '#374151' }}>
          {anyField.label || fieldKey}
        </label>
        <select
          value={value ?? ''}
          onChange={(e) => onChange(e.target.value)}
          style={{
            width: '100%', padding: '8px 12px', border: '1px solid #d1d5db',
            borderRadius: '6px', fontSize: '14px', background: '#fff', color: '#111827',
          }}
        >
          {anyField.options?.map((opt: any) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>
    );
  }

  if (anyField.type === 'radio') {
    return (
      <div style={{ marginBottom: '12px' }}>
        <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, marginBottom: '4px', color: '#374151' }}>
          {anyField.label || fieldKey}
        </label>
        <div style={{ display: 'flex', gap: '8px' }}>
          {anyField.options?.map((opt: any) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => onChange(opt.value)}
              style={{
                padding: '6px 12px', borderRadius: '6px', fontSize: '13px',
                border: `1px solid ${value === opt.value ? '#111827' : '#d1d5db'}`,
                background: value === opt.value ? '#111827' : '#fff',
                color: value === opt.value ? '#fff' : '#374151',
                cursor: 'pointer', fontWeight: 500,
              }}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (anyField.type === 'number') {
    return (
      <div style={{ marginBottom: '12px' }}>
        <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, marginBottom: '4px', color: '#374151' }}>
          {anyField.label || fieldKey}
        </label>
        <input
          type="number"
          value={value ?? ''}
          onChange={(e) => onChange(e.target.value ? Number(e.target.value) : undefined)}
          min={anyField.min}
          max={anyField.max}
          style={{
            width: '100%', padding: '8px 12px', border: '1px solid #d1d5db',
            borderRadius: '6px', fontSize: '14px', background: '#fff', color: '#111827',
          }}
        />
      </div>
    );
  }

  if (anyField.type === 'textarea') {
    return (
      <div style={{ marginBottom: '12px' }}>
        <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, marginBottom: '4px', color: '#374151' }}>
          {anyField.label || fieldKey}
        </label>
        <textarea
          value={value ?? ''}
          onChange={(e) => onChange(e.target.value)}
          rows={3}
          style={{
            width: '100%', padding: '8px 12px', border: '1px solid #d1d5db',
            borderRadius: '6px', fontSize: '14px', background: '#fff', color: '#111827',
            resize: 'vertical',
          }}
        />
      </div>
    );
  }

  if (anyField.type === 'custom' && typeof anyField.render === 'function') {
    // Delegate to the field's own custom render (e.g. ColorField, MediaPickerField)
    return <>{anyField.render({ value, onChange })}</>;
  }

  // Default: text input
  return (
    <div style={{ marginBottom: '12px' }}>
      <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, marginBottom: '4px', color: '#374151' }}>
        {anyField.label || fieldKey}
      </label>
      <input
        type="text"
        value={value ?? ''}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: '100%', padding: '8px 12px', border: '1px solid #d1d5db',
          borderRadius: '6px', fontSize: '14px', background: '#fff', color: '#111827',
        }}
      />
    </div>
  );
};

// ── Main accordion inspector widget ─────────────────────────────────────────

export function createAccordionFields(config: AccordionConfig): Record<string, Field> {
  // Return a single custom field that renders the entire accordion.
  // The value passed to render is the component's entire props object.
  // Each field's value is read from props[fieldKey] and written back
  // by calling onChange with a shallow-merged new props object.
  return {
    _accordion: {
      type: 'custom' as const,
      label: '',
      render: ({ value, onChange }: { value: any; onChange: (v: any) => void }) => {
        const props = value || {};
        const componentId = props.id || 'unknown';

        const handleFieldChange = useCallback((fieldKey: string, fieldValue: any) => {
          onChange({ ...props, [fieldKey]: fieldValue });
        }, [props, onChange]);

        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {config.groups.map((group) => {
              const stateKey = getStateKey(componentId, group.label);
              const isOpen = accordionState[stateKey] ?? group.defaultOpen ?? false;

              const toggle = () => {
                accordionState[stateKey] = !isOpen;
                // Force re-render by calling onChange with same props
                onChange({ ...props });
              };

              return (
                <Disclosure key={group.label} defaultOpen={isOpen}>
                  {({ open }) => (
                    <div style={{ borderBottom: '1px solid #f3f4f6' }}>
                      <DisclosureButton
                        onClick={toggle}
                        style={{
                          width: '100%', display: 'flex', alignItems: 'center',
                          justifyContent: 'space-between', padding: '12px 0',
                          background: 'none', border: 'none', cursor: 'pointer',
                          fontSize: '14px', fontWeight: 600, color: '#111827',
                        }}
                      >
                        {group.label}
                        <ChevronIcon open={open} />
                      </DisclosureButton>
                      <DisclosurePanel style={{ paddingBottom: '8px' }}>
                        {group.fieldKeys.map((fieldKey) => {
                          const field = config.allFields[fieldKey];
                          if (!field) return null;
                          return (
                            <FieldRenderer
                              key={fieldKey}
                              fieldKey={fieldKey}
                              field={field}
                              value={props[fieldKey]}
                              onChange={(v) => handleFieldChange(fieldKey, v)}
                            />
                          );
                        })}
                      </DisclosurePanel>
                    </div>
                  )}
                </Disclosure>
              );
            })}
          </div>
        );
      },
    } as Field,
  };
}
