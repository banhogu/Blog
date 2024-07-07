'use client';
export function P({ children }) {
  return (
    <p className="leading-7  text-[17px] font-naverNormal my-5 [blockquote_&]:font-naverSemi [blockquote_&]:my-2 [blockquote_&]:text-[17px] [div_&]:font-naverSemi [div_&]:text-[16.5px] [div_&]:leading-7  ">
      {children}
    </p>
  );
}
