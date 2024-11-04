import recommend from '@/database/recommend.json' assert { type: 'json' };

export const getRecommend = (category: string) => {
  const filtered = recommend.recommendPost.filter((item) => {
    return item.tag === category;
  });

  return filtered;
};
