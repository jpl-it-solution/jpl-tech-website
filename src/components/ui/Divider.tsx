import React from 'react';

interface DividerProps {
  text?: string;
  className?: string;
  textClassName?: string;
  lineClassName?: string;
}

const Divider: React.FC<DividerProps> = ({
  text,
  className = '',
  textClassName = '',
  lineClassName = ''
}) => {
  return (
    <div className={`w-full px-4 ${className}`}>
      <span className="flex items-center w-full">
        <span className={`h-px flex-1 bg-gradient-to-r from-transparent to-gray-300 dark:to-gray-600 ${lineClassName}`}></span>
        {text && (
          <span className={`shrink-0 px-4 text-white uppercase ${textClassName}`}>
            {text}
          </span>
        )}
        <span className={`h-px flex-1 bg-gradient-to-l from-transparent to-gray-300 dark:to-gray-600 ${lineClassName}`}></span>
      </span>
    </div>
  );
};

export default Divider;
