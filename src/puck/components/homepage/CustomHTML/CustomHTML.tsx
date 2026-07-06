/**
 * CustomHTML Puck component — render + fields + defaultProps.
 *
 * Both consumers import `CustomHTML` from here:
 *   - launchstore-frontend (Puck editor) — extends `fields` with custom widgets
 *   - launchstore-storefront (renderer) — uses the base fields as-is
 *
 * The component renders user-supplied HTML/CSS inside a styled container. A
 * built-in regex sanitizer strips `<script>` tags and inline event handlers
 * when `sanitizeHTML` is true (default). For production-grade sanitization,
 * swap in DOMPurify via the consumer's render hook — this baseline is best-
 * effort only.
 */
import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { customHtmlFields } from './customhtml.fields';
import type { CustomHTMLProps } from './customhtml.types';

const MAX_WIDTH_CLASSES: Record<CustomHTMLProps['maxWidth'], string> = {
  sm: 'max-w-screen-sm',
  md: 'max-w-screen-md',
  lg: 'max-w-screen-lg',
  xl: 'max-w-screen-xl',
  '2xl': 'max-w-screen-2xl',
  full: 'max-w-full',
};

/**
 * Best-effort HTML sanitizer: removes <script> tags, inline event handlers,
 * and javascript: URLs. NOT a substitute for DOMPurify — wire that in via
 * a custom wrapper in the storefront if you accept untrusted user content.
 */
function sanitizeHTML(html: string): string {
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/on\w+\s*=\s*["'][^"']*["']/gi, '')
    .replace(/javascript:/gi, '');
}

export const CustomHTML: ComponentConfig<CustomHTMLProps> = {
  label: 'Custom HTML',
  fields: customHtmlFields as ComponentConfig<CustomHTMLProps>['fields'],
  defaultProps: {
    htmlContent: `<div class="custom-section">
  <h2>Custom HTML Section</h2>
  <p>Add your custom HTML content here. You can include any HTML tags, inline styles, and even JavaScript.</p>
  <button class="custom-btn">Click Me</button>
</div>`,
    cssContent: `.custom-section {
  text-align: center;
}

.custom-btn {
  background-color: #3b82f6;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
}

.custom-btn:hover {
  background-color: #2563eb;
}`,
    useContainer: true,
    maxWidth: 'lg',
    paddingTop: 64,
    paddingBottom: 64,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: '#ffffff',
    backgroundImage: '',
    sanitizeHTML: true,
  },
  render: (props) => {
    const containerClass = props.useContainer
      ? `${MAX_WIDTH_CLASSES[props.maxWidth]} mx-auto px-4`
      : 'w-full';

    const backgroundStyle = {
      backgroundColor: props.backgroundColor,
      backgroundImage: props.backgroundImage ? `url(${props.backgroundImage})` : undefined,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      paddingTop: `${props.paddingTop}px`,
      paddingBottom: `${props.paddingBottom}px`,
      paddingLeft: `${props.paddingLeft}px`,
      paddingRight: `${props.paddingRight}px`,
    };

    const cleanHtml = props.sanitizeHTML
      ? sanitizeHTML(props.htmlContent)
      : props.htmlContent;

    return (
      <div className="custom-html-section" style={backgroundStyle}>
        <div className={containerClass}>
          {props.cssContent && (
            <style dangerouslySetInnerHTML={{ __html: props.cssContent }} />
          )}
          <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />
        </div>
      </div>
    );
  },
};

export default CustomHTML;
