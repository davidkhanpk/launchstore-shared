/**
 * Newsletter Puck component — render + inline accordion fields + defaultProps.
 *
 * Both consumers import `Newsletter` from here:
 *   - launchstore-frontend (Puck editor) — extends color/image fields with
 *     custom widgets
 *   - launchstore-storefront (renderer) — uses the base fields as-is
 *
 * KNOWN LIMITATION: this component renders a `<form>` shell but does NOT
 * wire up an `onSubmit` handler. The platform's actual newsletter signup
 * logic (Mailchimp / Klaviyo / etc.) is integrated at the storefront page
 * level, not inside this component. Follow-up epics should expose an
 * `onSubmit` prop or a `subscribeEndpoint` URL prop on the shared component.
 */
import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import type { NewsletterProps } from './newsletter.types';

const RADIUS_CLASSES: Record<NewsletterProps['borderRadius'], string> = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
};

const LAYOUT_CLASSES: Record<NewsletterProps['layout'], string> = {
  centered: 'text-center max-w-2xl mx-auto',
  split: 'flex items-center gap-12',
  inline: 'flex items-center justify-between',
};

// ── Content fields (text + email + privacy) ─────────────────────────────────

const contentFields = {
  title: { type: 'text' as const, label: 'Title' },
  subtitle: { type: 'text' as const, label: 'Subtitle' },
  description: { type: 'textarea' as const, label: 'Description' },
  placeholderText: { type: 'text' as const, label: 'Email Placeholder' },
  buttonText: { type: 'text' as const, label: 'Button Text' },
  showPrivacyText: {
    type: 'radio' as const, label: 'Show Privacy Text',
    options: [
      { label: 'Yes', value: true },
      { label: 'No', value: false },
    ],
  },
  privacyText: { type: 'textarea' as const, label: 'Privacy Text' },
};

// ── Email / form fields ─────────────────────────────────────────────────────

const emailFields = {
  collectName: {
    type: 'radio' as const, label: 'Collect Name',
    options: [
      { label: 'Yes', value: true },
      { label: 'No', value: false },
    ],
  },
  nameRequired: {
    type: 'radio' as const, label: 'Name Required',
    options: [
      { label: 'Yes', value: true },
      { label: 'No', value: false },
    ],
  },
  successMessage: { type: 'text' as const, label: 'Success Message' },
};

// ── Layout fields ───────────────────────────────────────────────────────────

const layoutFields = {
  layout: {
    type: 'select' as const, label: 'Layout Style',
    options: [
      { label: 'Centered', value: 'centered' },
      { label: 'Split (Text + Image)', value: 'split' },
      { label: 'Inline', value: 'inline' },
    ],
  },
  showImage: {
    type: 'radio' as const, label: 'Show Image (for split layout)',
    options: [
      { label: 'Yes', value: true },
      { label: 'No', value: false },
    ],
  },
  imageUrl: { type: 'text' as const, label: 'Image URL' },
};

// ── Color / style fields (component-specific — more than shared) ────────────

const styleFields = {
  backgroundColor: { type: 'text' as const, label: 'Background Color (hex or theme token)' },
  textColor: { type: 'text' as const, label: 'Text Color (hex or theme token)' },
  inputBackground: { type: 'text' as const, label: 'Input Background (hex or theme token)' },
  inputBorder: { type: 'text' as const, label: 'Input Border (hex or theme token)' },
  buttonBackground: { type: 'text' as const, label: 'Button Background (hex or theme token)' },
  buttonTextColor: { type: 'text' as const, label: 'Button Text Color (hex or theme token)' },
  borderRadius: {
    type: 'select' as const, label: 'Border Radius',
    options: [
      { label: 'None', value: 'none' },
      { label: 'Small', value: 'sm' },
      { label: 'Medium', value: 'md' },
      { label: 'Large', value: 'lg' },
      { label: 'Full (Pills)', value: 'full' },
    ],
  },
};

// ── All flat fields ─────────────────────────────────────────────────────────

const allFields = {
  ...contentFields,
  ...emailFields,
  ...layoutFields,
  ...styleFields,
};

// ── Component ───────────────────────────────────────────────────────────────

export const Newsletter: ComponentConfig<NewsletterProps> = {
  label: 'Newsletter',
  fields: allFields as any,
  defaultProps: {
    title: 'Join Our Newsletter',
    subtitle: 'Stay Updated',
    description: 'Get the latest updates on new products, exclusive deals, and special offers delivered straight to your inbox.',
    placeholderText: 'Enter your email address',
    buttonText: 'Subscribe',
    showPrivacyText: true,
    privacyText: 'We respect your privacy. Unsubscribe at any time.',
    layout: 'centered',
    showImage: true,
    imageUrl: 'https://via.placeholder.com/600x400?text=Newsletter+Image',
    collectName: false,
    nameRequired: false,
    successMessage: 'Thanks for subscribing! Check your email to confirm.',
    backgroundColor: '#000000',
    textColor: '#ffffff',
    inputBackground: '#ffffff',
    inputBorder: '#e5e5e5',
    buttonBackground: '#3b82f6',
    buttonTextColor: '#ffffff',
    borderRadius: 'md',
  } as NewsletterProps,
  render: (props) => (
    <div className="newsletter-section py-16" style={{ backgroundColor: props.backgroundColor }}>
      <div className="container mx-auto px-4">
        <div className={LAYOUT_CLASSES[props.layout] || 'text-center max-w-2xl mx-auto'}>
          {props.layout === 'split' && props.showImage && (
            <div className="w-1/2">
              <img
                src={props.imageUrl}
                alt="Newsletter"
                className={`w-full h-auto ${RADIUS_CLASSES[props.borderRadius] || 'rounded-lg'}`}
              />
            </div>
          )}

          <div className={props.layout === 'split' ? 'w-1/2' : 'w-full'}>
            {props.subtitle && (
              <p
                className="text-sm font-semibold uppercase tracking-wide mb-2"
                style={{ color: props.textColor, opacity: 0.8 }}
              >
                {props.subtitle}
              </p>
            )}

            <h2 className="text-4xl font-bold mb-4" style={{ color: props.textColor }}>
              {props.title}
            </h2>

            {props.description && (
              <p className="text-lg mb-6" style={{ color: props.textColor, opacity: 0.9 }}>
                {props.description}
              </p>
            )}

            {/* 
             * The form shell renders correctly but has no onSubmit wiring.
             * Platform newsletter integration (Mailchimp / Klaviyo) is handled
             * at the page level, not inside this component.
             */}
            <form className="space-y-4">
              {props.collectName && (
                <input
                  type="text"
                  placeholder="Your name"
                  required={props.nameRequired}
                  className={`w-full px-4 py-3 ${RADIUS_CLASSES[props.borderRadius] || 'rounded-lg'} border-2`}
                  style={{
                    backgroundColor: props.inputBackground,
                    borderColor: props.inputBorder,
                  }}
                />
              )}

              <div className={props.layout === 'inline' ? 'flex gap-2' : ''}>
                <input
                  type="email"
                  placeholder={props.placeholderText}
                  required
                  className={`${props.layout === 'inline' ? 'flex-1' : 'w-full'} px-4 py-3 ${RADIUS_CLASSES[props.borderRadius] || 'rounded-lg'} border-2`}
                  style={{
                    backgroundColor: props.inputBackground,
                    borderColor: props.inputBorder,
                  }}
                />

                <button
                  type="submit"
                  className={`${props.layout === 'inline' ? '' : 'w-full'} px-8 py-3 font-semibold ${RADIUS_CLASSES[props.borderRadius] || 'rounded-lg'} hover:opacity-90 transition`}
                  style={{
                    backgroundColor: props.buttonBackground,
                    color: props.buttonTextColor,
                  }}
                >
                  {props.buttonText}
                </button>
              </div>

              {props.showPrivacyText && (
                <p className="text-xs" style={{ color: props.textColor, opacity: 0.7 }}>
                  {props.privacyText}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  ),
};

export default Newsletter;
