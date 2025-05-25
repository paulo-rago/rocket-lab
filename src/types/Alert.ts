export interface AlertProps {
  type?: 'success' | 'error' | 'warning' | 'info';
  message: string;
  closable?: boolean;
  onClose?: () => void;
}
