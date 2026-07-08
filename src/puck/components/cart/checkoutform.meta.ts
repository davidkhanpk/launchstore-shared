export const checkoutFormMeta = {
  name: 'CheckoutForm',
  label: 'Checkout Form',
  description: '3-step checkout (Contact & Shipping → Delivery Method → Payment) with step indicator, optional guest checkout, optional phone/notes fields, optional same-as-billing. Cart-library-agnostic: takes shippingMethods[], paymentMethods[], onSubmit(data), onStepChange, isProcessing, initialStep, formatPrice. Lucide Check/ChevronRight/Loader2 replaced with inline SVG.',
  category: 'cart',
  intent: ['checkout', 'form', 'shipping', 'payment', 'multi-step'],
  visualRole: 'block',
  dataDeps: ['onSubmit (injected)', 'shippingMethods (consumer)', 'paymentMethods (consumer)'],
  copyFields: [],
  themeable: [],
  a11yRisk: 'medium',
  a11yNotes: 'Real <form> + <input> + <button> elements. Step indicator uses aria-friendly text. Card form fields are real <input type="text">. Submit is keyboard accessible. Note: card number / expiry / CVV are uncontrolled inputs (no PCI scope, Puck preview only).',
  mobileBehavior: 'responsive',
  searchTags: ['checkout', 'form', 'shipping', 'payment', 'multi-step'],
  props: {
    showStepIndicators: { type: 'boolean', required: true },
    enableGuestCheckout: { type: 'boolean', required: true },
    requirePhoneNumber: { type: 'boolean', required: true },
    showSaveAddressCheckbox: { type: 'boolean', required: true },
    defaultCountry: { type: 'enum', options: ['US', 'CA', 'GB', 'AU'], required: true },
    showOrderNotes: { type: 'boolean', required: true },
  },
} as const;

export type CheckoutFormMeta = typeof checkoutFormMeta;
