'use client';
import React from 'react';

interface items {
  id: string;
  tag: string;
  title: string;
  date: string;
  img: string;
}

const RecommendPostItem = ({ id, tag, title, date, img }: items) => {
  console.log(img);
  return (
    <div>
      <img src={`${img}`} alt="" />
    </div>
  );
};

export default RecommendPostItem;
