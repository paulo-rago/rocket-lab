import { XMarkIcon } from '@heroicons/react/24/outline';
import type { AlertProps } from '../../types/Alert';

export const Alert = ({
  type = 'info',
  message,
  closable = false,
  onClose,
}: AlertProps) => {
  const base = 'w-full rounded-md px-4 py-3 flex items-center justify-between text-sm';
  const variants = {
    success: 'bg-green-100 text-green-800 border border-green-200',
    error: 'bg-red-100 text-red-800 border border-red-200',
    warning: 'bg-yellow-100 text-yellow-800 border border-yellow-200',
    info: 'bg-blue-100 text-blue-800 border border-blue-200',
  };

  return (
    <div className={`${base} ${variants[type]}`}>
      <span>{message}</span>
      {closable && (
        <button onClick={onClose} className="text-inherit hover:text-black">
          <XMarkIcon className="h-4 w-4" />
        </button>
      )}
    </div>
  );
};
