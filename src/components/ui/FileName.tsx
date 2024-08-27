'use client';
export const FileName = ({ children }) => (
  <div className="bg-zinc-700 text-gray-50 p-3 rounded-t-md font-[600] text-md border-t border-r border-l border-gray-800">
    <div className="flex items-center gap-1">
      <div className="w-[13px] h-[13px] flex items-center justify-center  rounded-full bg-red-500"></div>
      <div className="w-[13px] h-[13px] flex items-center justify-center rounded-full bg-yellow-500 "></div>
      <div className="w-[13px] h-[13px] flex items-center justify-center  rounded-full bg-green-500 "></div>
      <div className="ml-2">{children}</div>
    </div>
  </div>
);
