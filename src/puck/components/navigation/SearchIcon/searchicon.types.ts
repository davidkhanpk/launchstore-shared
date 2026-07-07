/**
 * SearchIcon button + modal overlay.
 * The modal search-and-route behavior is rendered alongside the
 * trigger button. Routing happens via the `onSearchSubmit`
 * callback so this component stays router-agnostic (Next.js
 * `useRouter` lives in the consumer wrapper).
 */
export interface SearchIconProps {
  iconSize: 'sm' | 'md' | 'lg';
  iconColor: string;
  hoverColor: string;
  style: 'minimal' | 'outlined' | 'filled';
  openSearchOnClick: boolean;
  /** Called when the user submits the search form with a query. */
  onSearchSubmit?: (query: string) => void;
  /** Called when the user dismisses the modal. */
  onClose?: () => void;
}
