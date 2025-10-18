interface ControlButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: 'start' | 'stop' | 'reset';
  disabled?: boolean;
}

export default function ControlButton({ 
  onClick, 
  children, 
  variant = 'start',
  disabled = false 
}: ControlButtonProps) {
  const baseClasses = "px-8 py-4 rounded-lg font-semibold text-xl transition-all duration-200 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variantClasses = {
    start: "bg-green-600 hover:bg-green-700 shadow-green-500/50",
    stop: "bg-red-600 hover:bg-red-700 shadow-red-500/50",
    reset: "bg-gray-600 hover:bg-gray-700 shadow-gray-500/50"
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} shadow-lg hover:shadow-xl`}
    >
      {children}
    </button>
  );
}