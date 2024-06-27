'use client';
export function P({ children }) {
  return (
    <p className="text-[16px] font-naverNormal my-5 [blockquote_&]:font-naverSemi [blockquote_&]:my-2 [blockquote_&]:text-[16px] [div_&]:font-naverSemi [div_&]:text-[16px]">
      {children}
    </p>
  );
}
