'use client';

export function H2({ children }) {
  //##에 대해 id추가 하기, sidebar에서 바로 갈 수 있어야함
  const parsedId = children
    .replace('# ', '')
    .replace('#', '')
    .replace(/[\[\]:!@#$/%^&*()+=,.]/g, '')
    .replace(/ /g, '-')
    .toLowerCase()
    .replace('?', '');
  return (
    <h2
      id={parsedId}
      className="font-naverBold pl-2 flex items-center group my-8 relative text-[24px] bg-my-strong-gray py-2 dark:text-white dark:bg-gray-800"
    >
      {children}
    </h2>
  );
}
