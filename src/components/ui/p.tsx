'use client';
export function P({ children }) {
  return (
    <p className="font-naverNormal my-5 [blockquote_&]:font-naverSemi [blockquote_&]:my-2 [div_&]:font-naverSemi">
      {children}
    </p>
  );
}
