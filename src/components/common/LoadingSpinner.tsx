'use client';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-[99999]">
      <div className="h-8 w-8 animate-spin rounded-full border-8 border-t-space-purple border-gray-300" />
    </div>
  );
};

export default LoadingSpinner;
