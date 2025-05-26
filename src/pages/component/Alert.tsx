
import { useEffect, useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import type { AlertProps } from '../../types/Alert';

export const Alert = ({
  type = 'info',
  message,
  closable = false,
  onClose,
}: AlertProps) => {
  // Timer state for countdown
  const [secondsLeft, setSecondsLeft] = useState(5);

  useEffect(() => {
    if (!onClose) return;
    setSecondsLeft(5);
    const interval = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          clearInterval(interval);
          onClose();
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [onClose]);
  const base = 'w-full rounded-lg px-5 py-4 flex items-center gap-3 shadow-lg border-l-4 animate-fade-in';
  const variants = {
    success: 'bg-green-50 text-green-900 border-green-500',
    error: 'bg-red-50 text-red-900 border-red-500',
    warning: 'bg-yellow-50 text-yellow-900 border-yellow-500',
    info: 'bg-blue-50 text-blue-900 border-blue-500',
  };

  return (
    <div className={`${base} ${variants[type]}`}
      style={{
        transition: 'box-shadow 0.2s, border-color 0.2s',
        boxShadow: '0 4px 24px 0 rgba(0,0,0,0.08)',
        fontWeight: 500,
      }}
    >
      <span className="flex-1 text-base leading-relaxed">
        {message}
        <span className="ml-3 text-xs font-semibold text-gray-500 align-middle select-none">
          ({secondsLeft})
        </span>
      </span>
      {closable && (
        <button
          onClick={onClose}
          className="ml-2 rounded-full p-1 hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black/20 transition"
          aria-label="Fechar alerta"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};
