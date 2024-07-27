'use client';
export function P({ children }) {
  return (
    <p
      className="leading-7 text-[15px] font-medium my-5 
    [blockquote_&]:font-semibold
    [blockquote_&]:my-2 
    [blockquote_&]:text-[15px] 

    [div_&]:font-semibold
    [div_&]:text-[15px] 
    [div_&]:leading-7

    sm:text-[17px]
    sm:[blockquote_&]:text-[17px] 
    sm:[div_&]:text-[16.5px] 
    "
    >
      {children}
    </p>
  );
}
