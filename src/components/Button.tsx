import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  to?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
}

export default function Button({
  children,
  variant = 'primary',
  to,
  onClick,
  className = '',
  type = 'button',
}: ButtonProps) {
  const baseClasses = `
    px-6 py-3 font-medium transition-all
    border-2 border-gray-900
    relative overflow-hidden
    hover:-translate-y-0.5 hover:shadow-md
  `;

  const variantClasses = {
    primary: 'bg-lime-400 text-gray-900 hover:bg-lime-300',
    secondary: 'bg-white text-gray-900 hover:bg-gray-50',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (to) {
    return (
      <Link
        to={to}
        className={classes}
        style={{
          clipPath: 'polygon(0% 3%, 3% 0%, 97% 0%, 100% 3%, 100% 97%, 97% 100%, 3% 100%, 0% 97%)',
        }}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      style={{
        clipPath: 'polygon(0% 3%, 3% 0%, 97% 0%, 100% 3%, 100% 97%, 97% 100%, 3% 100%, 0% 97%)',
      }}
    >
      {children}
    </button>
  );
}
