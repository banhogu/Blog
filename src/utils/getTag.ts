export const getTag = (tag: string) => {
  const arr = [
    {
      tag: 'experience',
      korean: '경험',
    },
    {
      tag: 'study',
      korean: '학습',
    },
    {
      tag: 'tech',
      korean: '기술',
    },
    {
      tag: 'think',
      korean: '생각',
    },
  ];

  const find = arr.find((item) => item.tag === tag);
  return find.korean;
};
