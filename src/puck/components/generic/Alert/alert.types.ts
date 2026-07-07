export interface AlertProps {
  id?: string;
  type: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  message: string;
  showIcon: boolean;
  dismissible: boolean;
}
